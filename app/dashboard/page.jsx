import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Opzione A: mostra un messaggio
    // return <p>🔒 Devi loggarti per accedere al dashboard.</p>;

    // Opzione B: reindirizza a /login
    redirect('/login');
  }

  // Se vuoi ottenere dati lato server (es. fetch da DB) puoi farlo qui
  // Esempio: const profile = await fetchProfileFromDB(session.user.id);

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Dashboard</h1>
      <p>Benvenuto, {session.user.name}!</p>
      <p>ID utente Discord: {session.user.id}</p>
      {/* Qui mostra contenuto riservato */}
    </main>
  );
}
