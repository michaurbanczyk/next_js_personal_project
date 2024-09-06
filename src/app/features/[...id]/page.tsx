"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { getFeatureById } from "@/app/api/queries/getFeature";

function Page() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getFeatureById"],
    queryFn: () => getFeatureById("1"),
  });
  return <div>{data?.title}</div>;
}

export default Page;
