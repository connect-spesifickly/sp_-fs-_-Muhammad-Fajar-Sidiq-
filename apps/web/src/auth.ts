import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { api } from "./utils/axios";

interface CustomUser {
  id?: string;
  email?: string;
  token: string;
}

const config: NextAuthConfig = {
  providers: [
    Credentials({
      id: "credentials",
      name: "credentials",
      authorize: async (credentials, req) => {
        try {
          const response = await api.post<{
            data: {
              accessToken: string;
              refreshToken?: string;
              id?: string;
              email?: string;
            };
          }>("/auth/login", credentials);
          // Return an object that matches the expected User shape
          return {
            data: {
              accessToken: response.data.data.accessToken,
              refreshToken: response.data.data.refreshToken,
              id: response.data.data.id,
              email: response.data.data.email,
            },
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.data.accessToken;
        token.refreshToken = user.data.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.accessToken = token.accessToken as string;
      }
      return session;
    },
  },
};

const nextAuth = NextAuth(config);

export const auth: typeof nextAuth.auth = nextAuth.auth;
export const handlers: typeof nextAuth.handlers = nextAuth.handlers;
export const signIn: typeof nextAuth.signIn = nextAuth.signIn;
export const signOut: typeof nextAuth.signOut = nextAuth.signOut;
