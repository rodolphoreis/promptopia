import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import User from "@models/user";
import { connectToDB } from "@/utils/database";

const handle = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email: session.user.email,
    });

    session.user.id = sessionUser._id.toString();

    return session;
  },
  async signIn({ profile }) {
    try {
      await connectToDB();

      //check if user already exists
      const userExists = await User.findOne({ email: profile.email });

      // if not, create new user
      if (!userExists) {
        const newUser = await User.create({
          email: profile.email,
          userName: profile.name.replace(" ", "").toLowerCase(),
          image: profile.image,
        });

        return newUser;
      }
      return newUser;

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handle as GET, handle as POST };
