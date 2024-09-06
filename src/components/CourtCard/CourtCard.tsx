"use client"
import React from "react";
import { StyledCourtCard } from "@/components/CourtCard/CourtCard.styled";
import { useRouter } from "next/navigation";

export type CourtCardProps = {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
  };
};

function CourtCard(props: CourtCardProps) {
  const { id, name, address } = props;

  const router = useRouter();

  const handleGoToCourtCard = async () => {
    router.push(`/courts/${id}`);
  };

  return (
    <StyledCourtCard onClick={handleGoToCourtCard}>
      <h1>{name}</h1>
      <p>{address.street}</p>
      <p>{address.city}</p>
    </StyledCourtCard>
  );
}

export default CourtCard;
