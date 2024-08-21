"use client";

import React from "react";
import useFetch from "@/hooks/useFetch";
import { CourtsData } from "@/types/responses/getCourts";
import { Grid } from "@mui/material";
import CourtCard from "@/components/CourtCard/CourtCard";
import { StyledClubsSection, StyledGrid } from "@/app/courts/page.styled";

type UseFetchReturnType = {
  data: CourtsData | null;
  loading: boolean;
  error: string | null;
};

export default function Page() {
  const { data, loading, error }: UseFetchReturnType = useFetch(
    "https://api.example.com/courts"
  );

  return (
    <StyledClubsSection>
      <StyledGrid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.clubs.map((club, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CourtCard
              id={club.id}
              name={club.name}
              address={{ street: club.address.street, city: club.address.city }}
            />
          </Grid>
        ))}
      </StyledGrid>
    </StyledClubsSection>
  );
}
