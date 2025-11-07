import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClientProviders } from './client-providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bayu Mulyana - Independent Validator & Web3 Developer',
  description: 'Independent Blockchain Validator and Web3 Developer operating as Derana. Running validator infrastructure across 30+ networks, building Web3 applications, and providing professional KYC services. Based in Bogor, Indonesia.',
  keywords: ['Web3', 'Blockchain Validator', 'Web3 Developer', 'Validator Operations', 'Blockchain Infrastructure', 'Node Operator', 'KYC Services', 'Derana', 'Bayu Mulyana', 'Indonesia'],
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
