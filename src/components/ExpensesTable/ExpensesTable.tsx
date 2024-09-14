"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/app/api/queries/getExpenses";
import React, { useEffect } from "react";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: "description",
    headerName: "Description",
    width: 150,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 100,
  },
  {
    field: "currency",
    headerName: "Currency",
    width: 100,
  },
  {
    field: "date",
    headerName: "Date",
    width: 160,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    width: 160,
  },
];

function ExpensesTable() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getExpenses"],
    queryFn: getExpenses,
  });

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isError) {
      setOpen(true);
    }
  }, [isError]);

  return (
    <div style={{ maxWidth: "750px" }}>
      {isLoading && <CircularProgress sx={{ fontSize: "60px" }} />}
      <DataGrid
        rows={data?.expenses}
        columns={columns}
        onRowClick={(details) => console.log(details)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          We have problem with loading your data :(
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ExpensesTable;
