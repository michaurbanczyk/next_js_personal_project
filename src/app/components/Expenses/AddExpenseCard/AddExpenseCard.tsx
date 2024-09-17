"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Card from "@/app/components/_common/Card/Card";
import { postExpense } from "@/app/api/mutations/postExpense";
import { SubmitHandler, useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import {
  InputAdornment,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { getCategories } from "@/app/api/queries/getCategories";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

type addExpenseInput = {
  description: string;
  category:
    | "Food"
    | "Fitness"
    | "Utilities"
    | "Transportation"
    | "Entertainment"
    | "Clothing"
    | "Housing";
  amount: number;
  date: string; // ISO Date format e.g., "2024-09-01"
  paymentMethod: "Credit Card" | "Debit Card" | "Cash" | "Bank Transfer";
};

function AddExpenseCard() {
  const queryClient = useQueryClient();

  const [open, setOpen] = React.useState(false);

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<addExpenseInput>({
    defaultValues: {
      category: "Food",
    },
  });
  const onSubmit: SubmitHandler<addExpenseInput> = (data) =>
    addNewExpense(data);

  return (
    <Card title={"Add Expense"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <TextField
          id="description-textfield"
          label="Expense Description"
          variant="outlined"
          {...register("description")}
        />
        <br />
        <Select
          labelId="category-label-id"
          id="category-select-id"
          value={watch("category")}
          label="Category"
          {...register("category")}
        >
          {data?.categories.map((category) => (
            <MenuItem value={category.name} key={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="amount-textfield"
          label="Amount"
          {...register("amount")}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="Date"
              format="DD-MM-YYYY"
              onChange={(value) =>
                register("date", { value: dayjs(value).format("YYYY-MM-DD") })
              }
            />
          </DemoContainer>
        </LocalizationProvider>
        <Select
          labelId="payment-method-label-id"
          id="payment-method-select-id"
          value={watch("paymentMethod")}
          label="Payment Method"
          {...register("paymentMethod")}
        >
          {["Credit Card", "Debit Card", "Cash", "Bank Transfer"].map(
            (paymentMethod, index) => (
              <MenuItem value={paymentMethod} key={index}>
                {paymentMethod}
              </MenuItem>
            )
          )}
        </Select>
        {/* include validation with required or other standard HTML validation rules */}
        {/*<input {...register("exampleRequired", { required: true })} />*/}
        {/*{errors.exampleRequired && <span>This field is required</span>}*/}

        <input type="submit" />
      </form>
    </Card>
  );
}

export default AddExpenseCard;
