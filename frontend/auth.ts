import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulasi validasi login
        if (credentials?.email === "admin@marlibu.com" && credentials?.password === "admin123") {
          return { id: "1", name: "Admin Marlibu", email: "admin@marlibu.com", role: "admin" };
        }
        if (credentials?.email === "user@marlibu.com" && credentials?.password === "user123") {
          return { id: "2", name: "User Biasa", email: "user@marlibu.com", role: "user" };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Wajib ada di Auth.js v5 agar cookie session tersimpan otomatis!
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || "user";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET || "secret-bebas-untuk-dev-12345",
});
