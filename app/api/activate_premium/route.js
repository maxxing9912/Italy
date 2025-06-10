///////////////////////////////////////
// 1. ROUTE AUTH - app/api/auth/[...nextauth]/route.js
///////////////////////////////////////

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
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


///////////////////////////////////////
// 2. API PROTETTA - app/api/activate_premium/route.js
///////////////////////////////////////

import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ success: false, message: 'Non loggato' }, { status: 401 });
  }

  const userId = session.user.id;
  // TODO: Chiamata al bot o database per attivare Premium con userId

  return NextResponse.json({ success: true });
}


///////////////////////////////////////
// 3. LOGIN PAGE - app/login/page.jsx
///////////////////////////////////////

'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Loggato come {session.user.name}</p>
        <button onClick={() => signOut()}>Logout</button>
      </div>
    );
  }

  return <button onClick={() => signIn('discord')}>Login con Discord</button>;
}


///////////////////////////////////////
// 4. DASHBOARD PROTETTO - app/dashboard/page.jsx
///////////////////////////////////////

import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p>🔒 Devi loggarti per accedere al dashboard.</p>;
  }

  return <p>Benvenuto {session.user.name} (ID: {session.user.id})</p>;
}
