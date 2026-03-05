import NextAuth from "next-auth";
import Cognito from "next-auth/providers/cognito";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  callbacks: {
    redirect({ url, baseUrl }) {
      if (url === baseUrl || url === baseUrl + "/") return baseUrl + "/portal";
      return url;
    },
    jwt({ token, profile }) {
      if (profile) {
        token.role =
          (profile as Record<string, unknown>)["custom:role"] as string ??
          "customer";
        token.customerId =
          (profile as Record<string, unknown>)["custom:customer_id"] as string ??
          "";
      }
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      session.user.customerId = token.customerId;
      return session;
    },
  },
});
