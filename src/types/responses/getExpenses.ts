type Expense = {
  id: number;
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
  currency: "PLN";
  date: string; // ISO Date format e.g., "2024-09-01"
  paymentMethod: "Credit Card" | "Debit Card" | "Cash" | "Bank Transfer";
};

type ExpensesResponse = {
  expenses: Expense[];
};
