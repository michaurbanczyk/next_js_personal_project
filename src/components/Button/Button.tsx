"use client";
import { StyledButton } from "@/components/Button/Button.styles";
import { FC, ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, disabled, autoCapitalize } = props;
  return <StyledButton>{children}</StyledButton>;
};
