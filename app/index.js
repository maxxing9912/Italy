import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css'; // Custom Tailwind setup

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });

    let pct = 0;
    const interval = setInterval(() => {
      pct += 5;
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 50);

    // Cookie banner
    if (localStorage.getItem('cookiesAccepted')) setCookiesAccepted(true);

    // Check Discord login
    fetch('/api/me', { credentials: 'include' })
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await fetch('/logout', { method: 'POST', credentials: 'include' });
    location.reload();
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  return (
    <>
      <Head>
        <title>Clarivex – Discord Bot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* LOADER */}
      {loading && (
        <div id="loader" className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-sky-400 z-50 transition-opacity">
          <div className="w-24 h-24 border-8 border-sky-400/20 border-t-sky-400 rounded-full animate-spin"></div>
          <div className="mt-2 text-lg font-mono">{progress}%</div>
        </div>
      )}

      {/* DISCORD BAR */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 text-indigo-400 p-2 flex justify-end items-center z-50">
        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={
                user.avatar
                  ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=64`
                  : `https://cdn.discordapp.com/embed/avatars/${parseInt(user.discriminator) % 5}.png`
              }
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sky-400 font-medium">{user.username}#{user.discriminator}</span>
            <button onClick={handleLogout} className="ml-2 bg-red-500 text-white px-3 py-1 rounded">
              Logout
            </button>
          </div>
        ) : (
          <Link href="/auth/discord" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded">
            Login with Discord
          </Link>
        )}
      </div>

      {/* HEADER & HERO */}
      <main className="mt-12">
        <header className="sticky top-0 backdrop-blur bg-gray-800/80 text-white py-6 transition-all">
          <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
            <h1 className="text-3xl font-extrabold">Clarivex</h1>
            <nav className="hidden md:flex space-x-6">
              <Link href="#hero" className="nav-link active">Home</Link>
              <Link href="/pricing" className="nav-link">Pricing</Link>
              <Link href="/tos" className="nav-link">Terms</Link>
              <Link href="/privacy" className="nav-link">Privacy</Link>
              <Link href="/support" className="nav-link">Support</Link>
            </nav>
          </div>
        </header>

        <section id="hero" className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 py-32 text-center text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6">Clarivex Bot</h2>
            <p className="text-xl sm:text-2xl text-indigo-100 mb-12">
              The ultimate Discord bot for server management, advanced tools & premium features.
            </p>
            <a
              href="https://discord.gg/tuo-server"
              target="_blank"
              className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white font-bold py-3 px-6 rounded-full shadow-lg inline-block"
            >
              Join Discord
            </a>
          </div>
        </section>

        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto grid md:grid-cols-3 gap-10 px-6 max-w-6xl">
            {["Advanced Moderation", "XP & Levels", "Premium Unlocks"].map((feature, idx) => (
              <div key={feature} data-aos="fade-up" data-aos-delay={idx * 100} className="feature-card">
                <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
                <p>{
                  feature === "Advanced Moderation"
                    ? "Smart commands, auto-moderation & full logs."
                    : feature === "XP & Levels"
                    ? "Engage your community with XP, ranks & leaderboards."
                    : "Exclusive tools via redeemable keys."
                }</p>
                <button className="learn-btn mt-4 underline">Learn More</button>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-16 px-6">
          <a
            href="https://discord.gg/tuo-server"
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
          >
            Get Started Now
          </a>
        </section>

        {!cookiesAccepted && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-3 px-6 flex justify-between items-center z-50">
            <span>We use cookies to enhance your experience. By continuing, you agree to our cookie policy.</span>
            <button
              onClick={acceptCookies}
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded"
            >
              Accept
            </button>
          </div>
        )}

        <footer className="bg-gray-900 text-indigo-400 py-6 border-t border-gray-700 text-center">
          <Link href="/tos" className="hover:text-indigo-300">Terms of Service</Link> |
          <Link href="/privacy" className="hover:text-indigo-300">Privacy Policy</Link> |
          <Link href="/support" className="hover:text-indigo-300">Support</Link>
          <p className="mt-4">&copy; 2025 Clarivex. All rights reserved.</p>
        </footer>
      </main>

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="beforeInteractive" />
    </>
  );
}
import Head from 'next/head';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: 'ease-in-out' });

    // Loader Simulation
    let pct = 0;
    const interval = setInterval(() => {
      pct += 5;
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
    }, 50);

    // Discord Auth Check
    fetch('/api/me', { credentials: 'include' })
      .then((res) => res.ok ? res.json() : Promise.reject())
      .then(setUser)
      .catch(() => setUser(null));

    // Cookie Banner
    if (!localStorage.getItem('cookiesAccepted')) {
      setTimeout(() => setShowCookieBanner(true), 1000);
    }
  }, []);

  const handleLogout = async () => {
    await fetch('/logout', { method: 'POST', credentials: 'include' });
    location.reload();
  };

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieBanner(false);
  };

  if (loading) {
    return (
      <div id="loader" className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-sky-400 z-50 transition-opacity">
        <div className="spinner w-24 h-24 border-8 border-sky-400 border-opacity-20 border-t-sky-400 rounded-full animate-spin"></div>
        <div id="progress" className="mt-2 text-xl font-mono">{progress}%</div>
      </div>
    );
  }

  return (
    <div className="dark">
      <Head>
        <title>Clarivex – Discord Bot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div id="discordBar" className="fixed top-0 left-0 right-0 bg-gray-900 text-indigo-400 p-2 flex justify-end items-center z-50">
        {user ? (
          <span id="discordUserInfo" className="flex items-center gap-2">
            <img id="discordAvatar" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar?.startsWith('a_') ? 'gif' : 'png'}?size=64`} alt="Avatar" className="w-8 h-8 rounded-full" />
            <span id="discordUsernameTag" className="text-sky-400 font-medium">{user.username}#{user.discriminator}</span>
            <button onClick={handleLogout} className="ml-2 bg-red-500 text-white px-3 py-1 rounded">Logout</button>
          </span>
        ) : (
          <a id="discordLoginBtn" href="/auth/discord" className="bg-indigo-500 text-white font-bold px-4 py-2 rounded hover:bg-indigo-600">
            Login with Discord
          </a>
        )}
      </div>

      {/* COOKIE BANNER */}
      {showCookieBanner && (
        <div id="cookieBanner" className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 flex justify-between items-center z-50">
          <span>Usiamo cookie per migliorare la tua esperienza. Navigando accetti la nostra cookie policy.</span>
          <button onClick={acceptCookies} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded">Accetta</button>
        </div>
      )}

      {/* Content can be extracted to components or pages as needed */}
      <main className="mt-16">
        <section id="hero" className="animated-gradient relative text-center py-32 overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 className="typewriter text-5xl sm:text-6xl font-extrabold mb-6">
              <span className="wrap">Clarivex</span>
            </h2>
            <p className="text-xl sm:text-2xl text-indigo-300 mb-12">
              The ultimate Discord bot for server management, advanced tools & premium features.
            </p>
            <a
              href="https://discord.gg/tuo-server"
              target="_blank"
              className="cta-btn bg-white dark:bg-gray-900 dark:text-white text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg inline-block relative"
            >
              Join Discord
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-indigo-400 py-6 border-t border-gray-700 text-center">
        <a href="/tos.html" className="hover:text-indigo-300">Terms of Service</a> |
        <a href="/privacy.html" className="hover:text-indigo-300">Privacy Policy</a> |
        <a href="/support.html" className="hover:text-indigo-300">Support</a>
        <p className="mt-4">&copy; 2025 Clarivex. All rights reserved.</p>
      </footer>
    </div>
  );
}