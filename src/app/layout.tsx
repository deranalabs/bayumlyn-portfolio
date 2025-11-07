import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientProviders } from './client-providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bayu Mulyana - Web3 Engineer & Frontend Developer',
  description: 'Web3 Engineer and Frontend Developer based in Bogor, Indonesia. Specializing in blockchain development, smart contracts, and modern web applications.',
  keywords: ['Web3', 'Blockchain', 'Frontend Developer', 'Smart Contracts', 'React', 'Next.js', 'Solidity', 'Bayu Mulyana'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
