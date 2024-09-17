import { factory, primaryKey } from "@mswjs/data";

export const db = factory({
  expense: {
    id: primaryKey(Number),
    description: String,
    category: String,
    amount: Number,
    currency: String,
    date: String,
    paymentMethod: String,
  },
});

db.expense.create({
  id: 1,
  description: "Grocery shopping",
  category: "Food",
  amount: 300.5,
  currency: "PLN",
  date: "2024-09-01",
  paymentMethod: "Credit Card",
});
