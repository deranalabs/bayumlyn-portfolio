import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/layout/footer';

const ClientProviders = dynamic(() => import('./client-providers').then(mod => ({ default: mod.ClientProviders })), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

const Header = dynamic(() => import('@/components/layout/header').then(mod => ({ default: mod.Header })), {
  ssr: false,
  loading: () => <div className="h-16" />,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bayu Mulyana - Web3 Product Developer',
  description: 'Web3 Product Developer specializing in end-to-end Web3 solutions. Building complete products from smart contracts to user interfaces across EVM, MoveVM, and Solana ecosystems. Based in Bogor, Indonesia.',
  keywords: ['Web3', 'Product Developer', 'Smart Contracts', 'DApp Development', 'Solidity', 'Move', 'Next.js', 'Blockchain', 'Web3 Engineer', 'Bayu Mulyana'],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
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
