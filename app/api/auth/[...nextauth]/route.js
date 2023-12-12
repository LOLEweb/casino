import NextAuth from "next-auth/next";
import DiscordProvider from 'next-auth/providers/discord'

const authOptions = {
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
    ],
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST}