"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Card from "@/app/components/_common/Card/Card";
import { postExpense } from "@/app/api/mutations/postExpense";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Grid, InputLabel, Select } from "@mui/material";
import { getCategories } from "@/app/api/queries/getCategories";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { StyledGrid } from "@/app/components/Expenses/AddExpenseCard/AddExpenseCard.styled";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import { ExpenseCategoryType, PaymentMethodType } from "@/types/api/types";

type addExpenseInput = {
  description: string;
  category: ExpenseCategoryType | string;
  amount: string;
  date: string;
  paymentMethod: PaymentMethodType | string;
};

export const paymentMethods: PaymentMethodType[] = [
  "Credit Card",
  "Debit Card",
  "Cash",
  "Bank Transfer",
];

function AddExpenseCard() {
  const formDefaultValues = {
    description: "",
    category: "",
    amount: "",
    date: "",
    paymentMethod: paymentMethods[0],
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { isDirty, errors },
  } = useForm<addExpenseInput>({
    defaultValues: formDefaultValues,
  });
  const onSubmit: SubmitHandler<addExpenseInput> = (data) => {
    addNewExpense(data);
    reset();
  };

  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
  });

  const { mutate: addNewExpense, error } = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getExpenses"] });
    },
  });

  useEffect(() => {
    if (data?.categories) {
      reset({
        ...formDefaultValues,
        category: data.categories[0].name,
      });
    }
  }, [data, reset]);

  return (
    <Card
      title={"Add Expense"}
      subtitle={"Add new items to your expenses"}
      icon={<AddCircleIcon fontSize="large" />}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledGrid container rowSpacing={2}>
          <Grid item xs={12}>
            <TextField
              id="description-textfield"
              label="Description"
              variant={"outlined"}
              error={!!errors.description}
              {...register("description", { required: true })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label-id">Category</InputLabel>
              <Select
                labelId="category-label-id"
                id="category-select-id"
                value={watch("category")}
                error={!!errors.category}
                label="Category"
                defaultValue={data?.categories[0].name}
                {...register("category", { required: true })}
              >
                {data?.categories.map((category) => (
                  <MenuItem value={category.name} key={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="amount-textfield"
              label="Amount"
              error={!!errors.amount}
              {...register("amount", { required: true })}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                target.value = target.value.replace(/[^0-9.]/g, "");

                if ((target.value.match(/\./g) || []).length > 1) {
                  target.value = target.value.slice(0, -1); // Remove the extra dot
                }

                if (target.value.includes(".")) {
                  const [whole, decimals] = target.value.split(".");
                  if (decimals && decimals.length > 2) {
                    target.value = `${whole}.${decimals.slice(0, 2)}`; // Trim decimals to 2 digits
                  }
                }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="payment-method-label-id">
                Payment Method
              </InputLabel>
              <Select
                labelId="payment-method-label-id"
                id="payment-method-select-id"
                value={watch("paymentMethod")}
                label="Payment Method"
                error={!!errors.paymentMethod}
                defaultValue={paymentMethods[0]}
                {...register("paymentMethod", { required: true })}
                fullWidth
              >
                {paymentMethods.map((paymentMethod, index) => (
                  <MenuItem value={paymentMethod} key={index}>
                    {paymentMethod}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ paddingTop: 0, width: "100%" }}
              >
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <DatePicker
                      format="DD-MM-YYYY"
                      value={value ? dayjs(value) : null}
                      onChange={(value) => {
                        const formattedValue = value
                          ? dayjs(value).format("YYYY-MM-DD")
                          : null;
                        onChange(formattedValue); // Call the form's onChange handler
                      }}
                      slotProps={{
                        textField: {
                          error: !!error, // Mark error if there's a validation error
                          helperText: error ? error.message : null, // Show error message
                        },
                      }}
                    />
                  )}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!isDirty}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => reset()}
              disabled={!isDirty}
            >
              Cancel
            </Button>
          </Grid>
        </StyledGrid>
      </form>
    </Card>
  );
}

export default AddExpenseCard;
