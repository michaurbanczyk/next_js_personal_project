"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Card from "@/app/components/_common/Card/Card";
import { postExpense } from "@/app/api/mutations/postExpense";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Grid, InputLabel, Select } from "@mui/material";
import { getCategories } from "@/app/api/queries/getCategories";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { StyledGrid } from "@/app/components/Expenses/AddExpenseCard/AddExpenseCard.styled";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import {
  ExpenseCategoryType,
  PaymentMethodType,
} from "@/types/responses/getExpenses";

type addExpenseInput = {
  description: string;
  category: ExpenseCategoryType;
  amount: number;
  date: string; // ISO Date format e.g., "2024-09-01"
  paymentMethod: PaymentMethodType;
};

function AddExpenseCard() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<addExpenseInput>({});
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

  return (
    <Card title={"Add Expense"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledGrid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
              id="description-textfield"
              label="Expense Description"
              variant="outlined"
              {...register("description")}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="category-label-id">Category</InputLabel>
              <Select
                labelId="category-label-id"
                id="category-select-id"
                value={watch("category") ?? ""}
                label="Category"
                {...register("category")}
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
              {...register("amount")}
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
                value={watch("paymentMethod") ?? ""}
                label="Payment Method"
                {...register("paymentMethod", { required: true })}
                fullWidth
              >
                {["Credit Card", "Debit Card", "Cash", "Bank Transfer"].map(
                  (paymentMethod, index) => (
                    <MenuItem value={paymentMethod} key={index}>
                      {paymentMethod}
                    </MenuItem>
                  )
                )}
              </Select>
              {errors.paymentMethod && <span>This field is required</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ paddingTop: 0, width: "100%" }}
              >
                <DatePicker
                  format="DD-MM-YYYY"
                  onChange={(value) =>
                    register("date", {
                      value: dayjs(value).format("YYYY-MM-DD"),
                    })
                  }
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth type="submit">
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" fullWidth onClick={() => reset()}>
              Cancel
            </Button>
          </Grid>
        </StyledGrid>
      </form>
    </Card>
  );
}

export default AddExpenseCard;
