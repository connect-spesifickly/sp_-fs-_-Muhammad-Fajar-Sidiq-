import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "./utils/axios";

const config: NextAuthConfig = {
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      authorize: async (credentials) => {
        try {
          const response = await api.post<{
            data: {
              user: { id?: string; email?: string };
              accessToken: string;
              refreshToken?: string;
            };
          }>("/auth/login", credentials);
          // Return an object that matches the expected User shape
          
            const user = {
              data: {
                accessToken: response.data.data.accessToken,
                refreshToken: response.data.data.refreshToken,
                id: response.data.data.user.id,
                email: response.data.data.user.email,
              }
            }
            return user;
          
        } catch (error) {
          console.error("Authorize error in production:", error);
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.accessToken = user.data.accessToken;
        token.refreshToken = user.data.refreshToken;
        token.email = user.data.email;
        token.id = user.data.id;
      } else if (token.accessToken || trigger === "update") {
        const newToken = await api.post<{
          data: {
            accessToken: string;
            refreshToken?: string;
          };
        }>("/auth/refresh-token", {
          refreshToken: token.refreshToken,
        });
        token.accessToken = newToken.data.data.accessToken;
        token.refreshToken = newToken.data.data.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
        session.email = token.email as string;
        session.id = token.id as string;
      }
      return session;
    },
  },
};

const nextAuth = NextAuth(config);

export const handlers = nextAuth.handlers;
export const auth: any = nextAuth.auth;
export const signIn = nextAuth.signIn;
export const signOut = nextAuth.signOut;
