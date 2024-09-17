import { factory, primaryKey } from "@mswjs/data";
import { v4 as uuidv4 } from "uuid";

export const db = factory({
  expense: {
    id: primaryKey(String),
    description: String,
    category: String,
    amount: Number,
    currency: String,
    date: String,
    paymentMethod: String,
  },
  category: {
    id: primaryKey(String),
    name: String,
  },
});

const listOfCategories = [
  "Food",
  "Fitness",
  "Utilities",
  "Transportation",
  "Entertainment",
  "Clothing",
  "Housing",
];

db.expense.create({
  id: uuidv4(),
  description: "Grocery shopping",
  category: "Food",
  amount: 300.5,
  currency: "PLN",
  date: "2024-09-01",
  paymentMethod: "Credit Card",
});

listOfCategories.forEach((category) =>
  db.category.create({ id: uuidv4(), name: category })
);
