"use client";
import { Item, StyledBox } from "@/app/page.styled";
import SignIn from "@/components/SignIn/SignIn";

export default function Home() {
  return (
    <StyledBox>
      <Item>
        <SignIn />
      </Item>
    </StyledBox>
  );
}
