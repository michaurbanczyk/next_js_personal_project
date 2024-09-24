import { ExpenseCategoryType, PaymentMethodType } from "@/types/api/types";

export type PostExpenseType = {
  description: string;
  category: ExpenseCategoryType | string;
  amount: string;
  date: string;
  paymentMethod: PaymentMethodType | string;
};
