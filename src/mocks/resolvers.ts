import { HttpResponse, PathParams } from "msw";
import { db } from "@/mocks/db";

const getQueryString = () => window?.location?.search;

function waitForTimeout(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}

export const getExpensesResolver = async (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const queryString = getQueryString();

  const allExpenses = db.expense.getAll();
  switch (true) {
    case queryString?.includes("ERROR"):
      return HttpResponse.error();
    case queryString?.includes("LOADING"):
      await waitForTimeout(2000);
      return HttpResponse.json(
        { expenses: allExpenses },
        {
          status: 200,
        }
      );
    default:
      return HttpResponse.json(
        { expenses: allExpenses },
        {
          status: 200,
        }
      );
  }
};

export const postExpenseResolver = async (
  request: Request,
  params: PathParams,
  cookies: Record<string, string>
) => {
  const requestBody = await request.json();
  const newExpense = db.expense.create(requestBody);
  return HttpResponse.json(newExpense, {
    status: 201,
  });
};
