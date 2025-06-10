// app/tos/page.js
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TermsPage() {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <header className="bg-gray-800 shadow-md sticky top-0 z-50" data-aos="fade-down">
        <div className="container mx-auto flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">Clarivex</h1>
          <nav className="space-x-4 text-lg">
            <a href="/" className="hover:text-indigo-400">Home</a>
            <a href="/tos" className="hover:text-indigo-400 font-semibold">Terms</a>
            <a href="/privacy" className="hover:text-indigo-400">Privacy</a>
            <a href="/support" className="hover:text-indigo-400">Support</a>
          </nav>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">Clarivex – Terms of Service</h2>
        <p className="text-gray-400 text-center" data-aos="fade-up" data-aos-delay="100">Last Updated: May 25, 2025</p>

        <section data-aos="fade-right" data-aos-delay="200">
          <p>Welcome to Clarivex. These Terms of Service ("Terms") govern your access to and use of the Clarivex software, services, and systems ("Services"). By accessing or using our Services, you agree to be bound by these Terms.</p>
        </section>

        <Section title="1. Definitions" delay={300} direction="left">
          <ul className="list-disc pl-6 space-y-2">
            <li>"Clarivex" refers to the automation platform and its associated bot, website, and services.</li>
            <li>"User", "you", and "your" refer to the individual or entity using Clarivex.</li>
            <li>"Group" means your Roblox or Discord group using our Services.</li>
            <li>"Subscription" refers to any paid or free plan associated with Clarivex.</li>
          </ul>
        </Section>

        <Section title="2. Eligibility and Account Responsibilities" delay={400}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>You must be at least 13 years old to use our Services.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You agree to provide accurate and up-to-date information at all times.</li>
          </ol>
        </Section>

        <Section title="3. Use of Services" delay={500} direction="left">
          <ol className="list-decimal pl-6 space-y-2">
            <li>You may not reverse engineer, duplicate, or redistribute our software without written permission.</li>
            <li>You agree to use Clarivex only for lawful purposes and in accordance with community guidelines.</li>
            <li>You are solely responsible for any configuration choices you make within Clarivex.</li>
            <li>You may not share your license key or login credentials with others.</li>
            <li>Misuse of the API (e.g., excessive requests) may result in temporary suspension or termination.</li>
          </ol>
        </Section>

        <Section title="4. Payments" delay={600}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>All payments are non-refundable except under specific conditions outlined below.</li>
            <li>Refunds are granted only if:
              <ul className="list-disc pl-6">
                <li>No support is received within 3 days of initial setup.</li>
                <li>The bot fails to function within 24 hours and no assistance is provided.</li>
                <li>A chargeback is attempted only after contacting support.</li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="5. Ownership and Group Transfers" delay={700}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Only the verified group owner may request a data or service transfer.</li>
            <li>A group transfer is permitted if:
              <ul className="list-disc pl-6">
                <li>The current subscription has at least 25 days remaining.</li>
                <li>Ownership verification is completed.</li>
                <li>You accept that all previous data will be lost.</li>
              </ul>
            </li>
          </ol>
        </Section>

        <Section title="6. Data Collection and Privacy" delay={800} direction="left">
          <ol className="list-decimal pl-6 space-y-2">
            <li>Clarivex collects basic user identifiers and configuration metadata.</li>
            <li>We do not sell or share user data with third parties.</li>
            <li>See our <a href="/privacy" className="text-indigo-400 underline">Privacy Policy</a> for more information.</li>
          </ol>
        </Section>

        <Section title="7. Prohibited Conduct" delay={900}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Abuse the API or attempt to bypass security systems.</li>
            <li>Attempt to redeem a code not issued to you.</li>
            <li>Leak or steal another group’s credentials.</li>
            <li>Threaten, harass, or be abusive toward staff or other users.</li>
            <li>Attempt unauthorized access to internal Clarivex systems.</li>
            <li>Resell or redistribute keys or paid access.</li>
          </ul>
        </Section>

        <Section title="8. Termination" delay={1000}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>We reserve the right to suspend or terminate access to Clarivex at any time for violating these Terms.</li>
            <li>Upon termination, all data associated with your account or group may be permanently deleted.</li>
          </ol>
        </Section>

        <Section title="9. Limitation of Liability" delay={1100}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Loss of profits or revenues.</li>
            <li>Group failure or poor management outcomes.</li>
            <li>Service interruptions or software bugs.</li>
            <li>Any damages arising from unauthorized access.</li>
          </ul>
        </Section>

        <Section title="10. Changes to Terms" delay={1200}>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Clarivex may modify these Terms at any time.</li>
            <li>We will notify users via Discord or site announcements when changes are made.</li>
            <li>Continued use of the Services after changes means you accept the new Terms.</li>
          </ol>
        </Section>

        <Section title="11. Support & Contact" delay={1300}>
          <p>
            If you need support, contact us through our official Discord server or open a ticket in the designated support channel.
            You can also reach us via email at <a href="mailto:support@clarivex.io" className="text-indigo-400 underline">support@clarivex.io</a>.
          </p>
        </Section>

        <p className="mt-12 text-gray-500 text-center" data-aos="fade-up" data-aos-delay="1400">End of Terms</p>
      </main>

      <footer className="text-center p-6 text-sm bg-gray-900 border-t border-gray-700" data-aos="fade-up">
        &copy; 2025 Clarivex. All rights reserved.
      </footer>
    </div>
  );
}

function Section({ title, children, delay = 0, direction = 'up' }) {
  return (
    <section data-aos={`fade-${direction}`} data-aos-delay={delay}>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {children}
    </section>
  );
}