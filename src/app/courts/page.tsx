"use client";

import React from "react";
import useFetch from "@/hooks/useFetch";
import { Club, CourtsData } from "@/types/responses/getCourts";
import { Grid } from "@mui/material";
import CourtCard from "@/components/CourtCard/CourtCard";
import { StyledClubsSection, StyledGrid } from "@/app/courts/page.styled";
import { useQuery } from "@tanstack/react-query";
import { getCourts } from "../api/queries/getCourts";

export default function Page() {
  const {data} = useQuery({ queryKey: ['getCourts'], queryFn: getCourts })

  console.log("data", data)

  return (
    <StyledClubsSection>
      <StyledGrid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.clubs.map((club: Club, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <CourtCard
              id={club.id}
              name={club.name}
              address={club.address}
            />
          </Grid>
        ))}
      </StyledGrid>
    </StyledClubsSection>
  );
}
