import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: "Naim12345",
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user: any = {
          id: 1,
          name: "jannatun niam",
          email: "jannatunn4500@gmail.com",
          role: "admin"
        }
        if(email === "jannatunn4500@gmail.com" && password === "sinabeLAH12345") {
          return user;
        } else {
          return null;
        } 
      }
    })
  ],
  callbacks: {
    async jwt({token, account, profile, user}: any) {
      if( account?.provider === "credentials" ) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token}: any) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("fullname" in token) {
        session.user.fullname = token.fullname;
      }
      if ("role" in token) {
        session.user.role = token.role;
      }

      return session;
    }
  },
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };