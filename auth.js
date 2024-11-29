import NextAuth from "next-auth";

export const { handlers, auth ,signOut ,signIn} = NextAuth ({
    providers: [],
})