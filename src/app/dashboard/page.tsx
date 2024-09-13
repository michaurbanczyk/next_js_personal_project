"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/app/api/queries/getExpenses";
import { Item, StyledBox } from "@/app/dashboard/page.styled";
import { Button, CircularProgress, Grid } from "@mui/material";
import Card from "@/components/_common/Card/Card";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import { useRouter } from "next/navigation";

function ExpensesDashboard() {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getExpenses"],
    queryFn: getExpenses,
  });

  if (isLoading) {
    return (
      <StyledBox>
        <CircularProgress sx={{ fontSize: "60px" }} />
      </StyledBox>
    );
  }

  if (isError) {
    return <div>Error Occurred</div>;
  }

  return (
    <StyledBox>
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
        <Grid item xs={8}>
          <Item>
            {" "}
            <Button variant="outlined">Button 1</Button>
            <Button variant="contained">Button 1</Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </StyledBox>
  );
}

export default ExpensesDashboard;
