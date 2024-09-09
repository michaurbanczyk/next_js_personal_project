"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/app/api/queries/getExpenses";
import {
  Item,
  StyledBox,
  StyledButton,
  StyledGridItem,
} from "@/app/expenses/page.styled";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";

function ExpensesDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getExpenses"],
    queryFn: getExpenses,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error Occurred</div>;
  }

  return (
    <StyledBox>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Item>Profile</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
              <h3
                style={{
                  margin: "auto",
                  textAlign: "left",
                  border: "10px solid",
                  borderImageSlice: "1",
                  borderWidth: "3px",
                  padding: "10px",
                  borderStyle: "solid",
                  borderLeft: "0",
                  borderRight: "0",
                  borderTop: "0",
                  borderImageSource:
                    "linear-gradient(to left, #9b9ea1, #dee2e6)",
                  marginBottom: "20px",
                }}
              >
                Expense Tracker
              </h3>
            </div>
            2
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=4</Item>
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
