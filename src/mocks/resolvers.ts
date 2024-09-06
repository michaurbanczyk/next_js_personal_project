import { HttpResponse, PathParams } from "msw";
import getCourts from "../mocks/responses/getCourts.json";
import { Club } from "@/types/responses/getCourts";

const getQueryString = () => window?.location?.search;

export const courtsResolver = (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const queryString = getQueryString();
  const { id } = params;

  const responseData = JSON.parse(JSON.stringify(getCourts))
  const singleData = responseData.clubs.filter((item: Club)  => item.id === parseInt(id as string))

  switch (true) {
    case queryString?.includes("SERVER_ERROR"):
      return HttpResponse.json(null, {
        status: 500,
      });
    default:
      return HttpResponse.json(id ? singleData[0] : responseData, {
        status: 200,
      });
  }
};
