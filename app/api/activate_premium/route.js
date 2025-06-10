import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Verifica sessione
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { success: false, message: 'Non autenticato' },
      { status: 401 }
    );
  }

  const userId = session.user.id;
  //TODO: logica per attivare premium, es. chiamata a DB o bot:
  // await activatePremiumForUser(userId);

  return NextResponse.json({ success: true, message: 'Premium attivato' });
}

// Se vuoi anche GET o altri metodi, aggiungi export function GET(...) ecc.
