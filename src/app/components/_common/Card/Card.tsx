"use client";
import React from "react";
import {
  StyledBodyDiv,
  StyledCard,
  StyledHeaderDiv,
  StyledHeaderTextDiv,
} from "@/app/components/_common/Card/Card.styled";
import Typography from "@mui/material/Typography";
import { PaperOwnProps } from "@mui/material/Paper/Paper";

export interface CardProps extends PaperOwnProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Card(props: CardProps) {
  const { title, children, subtitle, icon, onClick } = props;

  return (
    <StyledCard onClick={onClick}>
      <StyledHeaderDiv>
        {icon}
        <StyledHeaderTextDiv>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{subtitle ?? <>&nbsp;</>}</Typography>
        </StyledHeaderTextDiv>
      </StyledHeaderDiv>
      <StyledBodyDiv>{children}</StyledBodyDiv>
    </StyledCard>
  );
}

export default Card;
