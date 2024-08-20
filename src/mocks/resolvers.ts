import { HttpResponse } from "msw";

type resolverInputType = {
  request: Request;
  cookies: Record<string, string>;
  params: Record<string, string[] | string>;
};

export const courtsResolver = ({
  request,
  params,
  cookies,
}: resolverInputType) => {
  console.log("request", request);
  console.log("params", params);
  console.log("cookies", cookies);
  return HttpResponse.json(
    {
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    },
    {
      status: 200,
    }
  );
};
