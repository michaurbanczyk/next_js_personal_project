import axios from "axios";

export async function postExpense(newExpense: Expense): Promise<Expense> {
  const { data } = await axios.post(
    "https://api.example.com/expenses",
    newExpense
  );
  return data;
}
