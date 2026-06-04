import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'Deyar Cafe - Himachal Mountain Café',
  description: 'A cozy, mountain-inspired Himachal café website featuring woodfired single-origin espresso, local herbal infusions, and storytelling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-brand-dark flex flex-col justify-between" id="app-viewport">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
