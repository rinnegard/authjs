import NextAuth from "next-auth";
import github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [github],
});
