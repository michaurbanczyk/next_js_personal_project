import axios from "axios";
import { PostExpenseType } from "@/types/api/mutations/postExpense";

export async function postExpense(newExpense: PostExpenseType) {
  const { data } = await axios.post("https://api.example.com/expenses", {
    ...newExpense,
    currency: "PLN",
  });
  return data;
}
