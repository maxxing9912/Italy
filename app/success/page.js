// app/success/page.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Imposta il piano Premium nel localStorage
    localStorage.setItem('clarivexPlan', 'premium');
    // Reindirizza alla pagina pricing
    router.replace('/pricing');
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen text-center">
      <p className="text-xl font-semibold text-indigo-500">
        ✅ Payment successful! Redirecting to your Premium plan…
      </p>
    </main>
  );
}