import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientProviders } from './client-providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bayu Mulyana - Web3 Product Developer',
  description: 'Web3 Product Developer specializing in end-to-end Web3 solutions. Building complete products from smart contracts to user interfaces across EVM, MoveVM, and Solana ecosystems. Based in Bogor, Indonesia.',
  keywords: ['Web3', 'Product Developer', 'Smart Contracts', 'DApp Development', 'Solidity', 'Move', 'Next.js', 'Blockchain', 'Web3 Engineer', 'Bayu Mulyana'],
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
