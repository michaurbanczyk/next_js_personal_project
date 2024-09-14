"use client";
import { StyledBox } from "@/app/expenses/page.styled";
import React from "react";
import ExpensesTable from "@/components/ExpensesTable/ExpensesTable";

function ExpensesDashboard() {
  return (
    <StyledBox>
      <ExpensesTable />
    </StyledBox>
  );
}

export default ExpensesDashboard;
