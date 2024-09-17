"use client";
import React from "react";
import { Grid } from "@mui/material";
import Card from "@/app/components/_common/Card/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import { useRouter } from "next/navigation";

function ExpensesDashboard() {
  const router = useRouter();

  return (
    <Grid container spacing={4}>
      <Grid item xs={4}>
        <Card
          title="Profile"
          subtitle={"User Profile Information"}
          icon={<AccountCircleIcon fontSize="large" />}
        />
      </Grid>
      <Grid item xs={8}>
        <Card
          title="Expenses"
          subtitle={"Your last expenses"}
          icon={<PaidIcon fontSize="large" />}
          onClick={() => router.push("/expenses")}
        />
      </Grid>
    </Grid>
  );
}

export default ExpensesDashboard;
