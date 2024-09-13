import React from "react";
import {
  StyledCard,
  StyledHeaderDiv,
  StyledHeaderTextDiv,
} from "@/components/_common/Card/Card.styled";
import Typography from "@mui/material/Typography";
import { PaperOwnProps } from "@mui/material/Paper/Paper";

export interface CardProps extends PaperOwnProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  body?: string;
  onClick?: () => void;
}

function Card(props: CardProps) {
  const { title, body, subtitle, icon, onClick } = props;

  return (
    <StyledCard onClick={onClick}>
      <StyledHeaderDiv>
        {icon}
        <StyledHeaderTextDiv>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </StyledHeaderTextDiv>
      </StyledHeaderDiv>
      {body}
    </StyledCard>
  );
}

export default Card;
