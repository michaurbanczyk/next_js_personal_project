"use client";

import React from "react";
import useFetch from "@/hooks/useFetch";

type UseFetchReturnType = {
  data: CourtsData | null;
  loading: boolean;
  error: string | null;
};

export default function Page() {
  const { data, loading, error }: UseFetchReturnType = useFetch(
    "https://api.example.com/courts"
  );

  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      {data?.clubs.map((court) => <p key={court.name}>{court.name}</p>)}
    </div>
  );
}
