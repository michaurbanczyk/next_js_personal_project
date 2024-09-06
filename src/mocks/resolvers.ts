import { HttpResponse, PathParams } from "msw";
import getFeatures from "./responses/getFeatures.json";
import { Features } from "@/types/responses/getFeatures";

const getQueryString = () => window?.location?.search;

function waitForTimeout(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export const featureResolvers = async (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const queryString = getQueryString();

  if (params?.id) {
    const data: Features = JSON.parse(JSON.stringify(getFeatures));
    const singleData = data.features.find((item) => item.id === params?.id);
    return HttpResponse.json(singleData, {
      status: 200,
    });
  }

  switch (true) {
    case queryString?.includes("SERVER_ERROR"):
      return HttpResponse.json(null, {
        status: 500,
      });
    case queryString?.includes("ERROR"):
      return HttpResponse.error();
    case queryString?.includes("LOADING"):
      await waitForTimeout(2000);
      return HttpResponse.json(getFeatures, {
        status: 200,
      });
    default:
      return HttpResponse.json(getFeatures, {
        status: 200,
      });
  }
};
