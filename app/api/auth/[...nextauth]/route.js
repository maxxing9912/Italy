import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Aggiungiamo user.id preso dal token.sub
      session.user.id = token.sub;
      return session;
    },
    // Se vuoi aggiungere campi al JWT/Token:
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   // token.sub di default è l’ID utente
    //   return token;
    // },
  },
  // eventualmente altre opzioni (database, adapter, ecc.)
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
