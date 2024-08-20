"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export type User = {
  firstName: string;
  lastName: string;
};

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/user");
      const json = await response.json();
      console.log("json", json);
    };
    void fetchData();
  }, []);

  if (session) {
    return (
      <div>
        <p>Welcome {session.user?.name}. Signed In As</p>
        <p>{session.user?.email}</p>
      </div>
    );
  }

  return <div>You are not logged</div>;
}
