import React from "react";
import { StyledFeatureCard } from "@/components/FeatureCard/FeatureCard.styled";
import { useRouter } from "next/navigation";

export type FeatureCardProps = {
  id: number;
  title: string;
  description: string;
};

function FeatureCard(props: FeatureCardProps) {
  const { id, title, description } = props;

  const router = useRouter();

  const handleGoToFeature = async () => {
    router.push(`/features/${id}`);
  };

  return (
    <StyledFeatureCard onClick={handleGoToFeature}>
      <h1>{title}</h1>
      <p>{description}</p>
    </StyledFeatureCard>
  );
}

export default FeatureCard;
