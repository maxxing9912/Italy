'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // status può essere "loading", "authenticated", "unauthenticated"
  if (status === 'loading') {
    return <p>Caricamento...</p>;
  }

  if (session) {
    // Se sei già loggato, potresti reindirizzare automaticamente alla dashboard
    // oppure mostrare info e bottone logout.
    return (
      <div style={{ padding: '1rem' }}>
        <p>✅ Loggato come {session.user.name} ({session.user.email || 'no email'})</p>
        <button onClick={() => signOut({ callbackUrl: '/' })}>
          Logout
        </button>
        <button
          style={{ marginLeft: '1rem' }}
          onClick={() => router.push('/dashboard')}
        >
          Vai alla Dashboard
        </button>
      </div>
    );
  }

  // Non autenticato: mostra pulsante login con Discord
  return (
    <div style={{ padding: '1rem' }}>
      <h1>Login</h1>
      <button onClick={() => signIn('discord')}>
        Accedi con Discord
      </button>
    </div>
  );
}
