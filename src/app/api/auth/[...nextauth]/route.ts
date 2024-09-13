import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn() {
      console.log("signing in");
      return true;
    },
    async session({ session, token, user }) {
      console.log("token", token);
      return session;
    },
  },
  session: {
    maxAge: 3600, // Set the session duration to 30 minutes (in seconds)
  },
});

export { handler as GET, handler as POST };
