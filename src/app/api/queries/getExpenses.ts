import axios from "axios";

type getExpensesParamsType = {
  page: number;
  pageSize: number;
};

export async function getExpenses(
  params: getExpensesParamsType
): Promise<ExpensesResponse> {
  const { data } = await axios.get("https://api.example.com/expenses", {
    params,
  });
  return data;
}
