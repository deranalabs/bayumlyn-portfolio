'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ConnectButton } from '@/components/wallet/connect-button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-900/30 bg-[#0a0f1d]/95 backdrop-blur-sm shadow-lg shadow-cyan-950/20">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white hover:text-zinc-400 transition-colors">
          Bayu Mulyana
        </Link>
        
        <div className="flex items-center gap-4 md:gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-white',
                  pathname === item.href
                    ? 'text-white'
                    : 'text-zinc-400'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <ConnectButton />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-3 min-h-[44px] min-w-[44px] hover:bg-zinc-800/50 rounded-lg transition-colors flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-[#0a0f1d]/98 backdrop-blur-sm">
          <nav className="container mx-auto max-w-5xl px-4 py-4 flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-cyan-900/20 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
