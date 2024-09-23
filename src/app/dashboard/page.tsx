"use client";
import React from "react";
import { Grid } from "@mui/material";
import Card from "@/app/components/_common/Card/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpensesTable from "@/app/components/Expenses/ExpensesTableCard/ExpensesTable";
import AddExpenseCard from "@/app/components/Expenses/AddExpenseCard/AddExpenseCard";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid container item xs={4} spacing={4}>
        <Grid item xs={12}>
          <Card
            title="Profile"
            subtitle={"User Profile Information"}
            icon={<AccountCircleIcon fontSize="large" />}
          />
        </Grid>
        <Grid item xs={12}>
          <AddExpenseCard />
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <ExpensesTable />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
