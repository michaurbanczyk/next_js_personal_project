import { HttpResponse } from "msw";
import getCourts from "../mocks/responses/getCourts.json";

const getQueryString = () => window?.location?.search;

export const courtsResolver = () => {
  const queryString = getQueryString();

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
