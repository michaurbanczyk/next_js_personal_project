import { http } from "msw";
import { courtsResolver } from "@/mocks/resolvers";

export const handlers = [
  http.get("https://api.example.com/courts", ({ request, params, cookies }) =>
    courtsResolver(request, params, cookies)
  ),
  http.get(
    "https://api.example.com/courts/:id",
    ({ request, params, cookies }) => courtsResolver(request, params, cookies)
  ),
];
