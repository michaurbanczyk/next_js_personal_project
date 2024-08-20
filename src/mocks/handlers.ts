import { http } from "msw";
import { courtsResolver } from "@/mocks/resolvers";

export const handlers = [
  http.get("https://api.example.com/courts", courtsResolver),
];
