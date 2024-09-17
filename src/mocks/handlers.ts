import { http } from "msw";
import { postExpenseResolver, getExpensesResolver } from "@/mocks/resolvers";

export const handlers = [
  http.get("https://api.example.com/expenses", ({ request, params, cookies }) =>
    getExpensesResolver(request, params, cookies)
  ),
  http.post(
    "https://api.example.com/expenses",
    ({ request, params, cookies }) =>
      postExpenseResolver(request, params, cookies)
  ),
];
