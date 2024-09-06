"use client";

import { Feature } from "@/types/responses/getFeatures";
import { Alert, Grid, LinearProgress } from "@mui/material";
import FeatureCard from "@/components/FeatureCard/FeatureCard";
import { StyledClubsSection, StyledGrid } from "@/app/features/page.styled";
import { useQuery } from "@tanstack/react-query";
import { getFeatures } from "../api/queries/getFeatures";

export default function Page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getFeatures"],
    queryFn: getFeatures,
  });

  if (isLoading) {
    return <LinearProgress />;
  }

  if (isError) {
    return <Alert severity="error">Cannot fetch data</Alert>;
  }

  return (
    <StyledClubsSection>
      <StyledGrid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.features.map((feature: Feature, index: number) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <FeatureCard
              id={feature.id}
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </StyledGrid>
    </StyledClubsSection>
  );
}
