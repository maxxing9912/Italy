// app/support/page.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SupportPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <header className="bg-gray-800 shadow-md sticky top-0 z-50" data-aos="fade-down">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">Clarivex</h1>
          <nav className="space-x-4 text-lg">
            <a href="/" className="hover:text-indigo-400">Home</a>
            <a href="/tos" className="hover:text-indigo-400">Terms</a>
            <a href="/privacy" className="hover:text-indigo-400">Privacy</a>
            <a href="/support" className="hover:text-indigo-400 font-semibold">Support</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20 text-center space-y-8" data-aos="zoom-in">
        <h2 className="text-4xl font-bold">Support & Contact</h2>
        <p>If you have any questions or need assistance, reach out to us via Discord or email:</p>
        <div className="space-y-4 text-lg">
          <a
            href="https://discord.gg/tuo-server"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-indigo-600 hover:bg-indigo-700 py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition"
          >
            Join Our Discord Server
          </a>
          <a
            href="mailto:support@clarivex.io"
            className="block border-2 border-indigo-400 hover:border-indigo-300 py-3 px-6 rounded-full inline-block transition"
          >
            support@clarivex.io
          </a>
        </div>
      </main>

      <footer className="text-center p-6 text-sm bg-gray-900 border-t border-gray-700" data-aos="fade-up">
        &copy; 2025 Clarivex. All rights reserved.
      </footer>
    </div>
  );
}