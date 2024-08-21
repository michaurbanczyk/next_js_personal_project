"use client"
import React from "react";

import { useParams } from 'next/navigation'
import { Club, CourtsData } from "@/types/responses/getCourts";
import useFetch from "@/hooks/useFetch";

type UseFetchReturnType = {
  data: Club | null;
  loading: boolean;
  error: string | null;
};

function Page() {
    const { id } = useParams()

    
const { data, loading, error }: UseFetchReturnType = useFetch(
    `https://api.example.com/courts/${id}`
  );
  console.log("data", data)
  return <div>{data?.name}</div>;
}

export default Page;
