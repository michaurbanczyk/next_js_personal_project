export type ExpenseCategoryType =
  | "Food"
  | "Fitness"
  | "Utilities"
  | "Transportation"
  | "Entertainment"
  | "Clothing"
  | "Housing";

export type PaymentMethodType =
  | "Credit Card"
  | "Debit Card"
  | "Cash"
  | "Bank Transfer";

type Expense = {
  id: number;
  description: string;
  category: ExpenseCategoryType;
  amount: number;
  currency: "PLN";
  date: string; // ISO Date format e.g., "2024-09-01"
  paymentMethod: PaymentMethodType;
};

type ExpensesResponse = {
  expenses: Expense[];
};
