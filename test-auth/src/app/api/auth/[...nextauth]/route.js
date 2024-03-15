//NOTE AUTH NEEDS TO EXIST IN ap/auth/[...nextauth]
// https://next-auth.js.org/configuration/initialization#route-handlers-app
import User from "@/app/(models)/User";
import { connectDB } from "@/app/lib/mongodb";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";
//creds (username and password)
//other providers exists such as google and discord but for proof of concept just using creds.
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  //all providers will live here, if you want more than one just add it to the list
  providers: [
    //The following is from next auth docs
    CredentialsProvider({
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials;
        try {
          await connectDB();
          const user = await User.findOne({ username });

          if (!user) {
            return null;
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return null;
          }
          console.log("return user");
          return user;
        } catch (ex) {
          console.log(ex);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, //lives in env
  pages: {
    signIn: "/login", //set this to where the user log ins
  },
});

export { handler as GET, handler as POST };
