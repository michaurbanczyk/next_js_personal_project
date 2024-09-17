import axios from "axios";
import { ne } from "@faker-js/faker";

export type PostExpenseType = {
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

export async function postExpense(
  newExpense: PostExpenseType
): Promise<Expense> {
  const { data } = await axios.post("https://api.example.com/expenses", {
    ...newExpense,
    currency: "PLN",
  });
  return data;
}
