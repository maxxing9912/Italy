// app/cancel/page.js
export default function CancelPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Payment cancelled</h1>
      <p className="text-lg text-gray-300 mb-2">No charge was made.</p>
      <a
        href="/pricing"
        className="mt-4 inline-block px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition"
      >
        Back to Pricing
      </a>
    </main>
  );
}