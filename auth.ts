import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import github from "next-auth/providers/github";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [github],
    callbacks: {
        session({ session, user }) {
            session.user.role = user.role;
            return session;
        },
    },
});
