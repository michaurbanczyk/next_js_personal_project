import { HttpResponse, PathParams } from "msw";
import getCourts from "../mocks/responses/getCourts.json";

const getQueryString = () => window?.location?.search;

export const courtsResolver = (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const queryString = getQueryString();
  const { id } = params;
  switch (true) {
    case queryString?.includes("SERVER_ERROR"):
      return HttpResponse.json(null, {
        status: 500,
      });
    default:
      return HttpResponse.json(getCourts, {
        status: 200,
      });
  }
};
