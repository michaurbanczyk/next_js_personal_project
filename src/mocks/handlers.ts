import { http } from "msw";
import { expenseResolvers } from "@/mocks/resolvers";

export const handlers = [
  http.get("https://api.example.com/expenses", ({ request, params, cookies }) =>
    expenseResolvers(request, params, cookies)
  ),
];
