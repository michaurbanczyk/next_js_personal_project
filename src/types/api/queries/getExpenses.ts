import { ExpenseCategoryType, PaymentMethodType } from "@/types/api/types";

type Expense = {
  id: number;
  description: string;
  category: ExpenseCategoryType;
  amount: string;
  currency: "PLN";
  date: string; // ISO Date format e.g., "2024-09-01"
  paymentMethod: PaymentMethodType;
};

type ExpensesResponse = {
  expenses: Expense[];
};
