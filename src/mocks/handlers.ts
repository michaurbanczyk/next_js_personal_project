import { http } from "msw";
import { featureResolvers } from "@/mocks/resolvers";

export const handlers = [
  http.get("https://api.example.com/features", ({ request, params, cookies }) =>
    featureResolvers(request, params, cookies)
  ),
  http.get(
    "https://api.example.com/features/:id",
    ({ request, params, cookies }) => featureResolvers(request, params, cookies)
  ),
];
