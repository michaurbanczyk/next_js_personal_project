"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/app/api/queries/getExpenses";

function ExpensesDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getExpenses"],
    queryFn: getExpenses,
  });

  return (
    <div>
      <h3>Recent Expenses:</h3>
    </div>
  );
}

export default ExpensesDashboard;
