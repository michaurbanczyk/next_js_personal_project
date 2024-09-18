"use client";
import React from "react";
import ExpensesTable from "@/app/components/Expenses/ExpensesTableCard/ExpensesTable";
import { Grid } from "@mui/material";

import AddExpenseCard from "@/app/components/Expenses/AddExpenseCard/AddExpenseCard";

function ExpensesDashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={9}>
        <ExpensesTable />
      </Grid>
      <Grid item xs={3}>
        <AddExpenseCard />
      </Grid>
    </Grid>
  );
}

export default ExpensesDashboard;
