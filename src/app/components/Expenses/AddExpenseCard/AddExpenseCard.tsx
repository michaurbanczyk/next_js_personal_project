"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import Card from "@/app/components/_common/Card/Card";
import { postExpense } from "@/app/api/mutations/postExpense";

function AddExpenseCard() {
  const queryClient = useQueryClient();

  const [open, setOpen] = React.useState(false);

  const mutation = useMutation({
    mutationFn: postExpense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getExpenses"] });
    },
  });

  return (
    <Card title={"Add Expense"}>
      <div>Add Expense</div>
    </Card>
  );
}

export default AddExpenseCard;
