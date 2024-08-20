"use client";

import { useSession } from "next-auth/react";

export type User = {
  firstName: string;
  lastName: string;
};

export default function Home() {
  const { data: session } = useSession();

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
