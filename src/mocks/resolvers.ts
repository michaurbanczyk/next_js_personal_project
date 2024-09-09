import { HttpResponse, PathParams } from "msw";
import getExpenses from "./responses/getExpenses.json";

const getQueryString = () => window?.location?.search;

function waitForTimeout(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export const expenseResolvers = async (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const queryString = getQueryString();

  switch (true) {
    case queryString?.includes("ERROR"):
      return HttpResponse.error();
    case queryString?.includes("LOADING"):
      await waitForTimeout(2000);
      return HttpResponse.json(getExpenses, {
        status: 200,
      });
    default:
      return HttpResponse.json(getExpenses, {
        status: 200,
      });
  }
};
