import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Github, Linkedin, MessageSquare, Link2 } from 'lucide-react';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Premium Dark Blue Background System */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0d1117] to-[#0a0e1a] -z-50"></div>
      
      {/* Subtle Blue Accent Layer */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-blue-950/10"></div>
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, rgba(30, 58, 138, 0.15), transparent 70%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-32">
        <div className="space-y-20">
          {/* Header */}
          <ScrollFade>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Get in touch
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              Available for validator operations, Web3 development projects, and blockchain infrastructure consulting. Reach me via Telegram for fastest response. Based in Bogor, Indonesia — working remotely worldwide.
            </p>
          </div>
          </ScrollFade>

          {/* Contact Links */}
          <ScrollFade delay={100}>
          <div className="space-y-8">
            <div className="space-y-6">
              <Link
                href="mailto:bayumlynn@gmail.com"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5" />
                <span className="group-hover:underline">bayumlynn@gmail.com</span>
              </Link>

              <Link
                href="https://t.me/deranaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <MessageSquare className="h-5 w-5" />
                <span className="group-hover:underline">@deranaz</span>
              </Link>

              <Link
                href="https://link3.to/bayumlyn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Link2 className="h-5 w-5" />
                <span className="group-hover:underline">link3.to/bayumlyn</span>
              </Link>

              <Link
                href="https://github.com/deranalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Github className="h-5 w-5" />
                <span className="group-hover:underline">@deranalabs</span>
              </Link>

              <Link
                href="https://x.com/bayumlynn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Twitter className="h-5 w-5" />
                <span className="group-hover:underline">@bayumlynn</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/bayumlyn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
              >
                <Linkedin className="h-5 w-5" />
                <span className="group-hover:underline">linkedin.com/in/bayumlyn</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-zinc-800/30">
              <div className="space-y-3 text-zinc-400 leading-relaxed">
                <p><strong className="text-white">Location:</strong> Artzimar II St., Bogor City, Indonesia</p>
                <p><strong className="text-white">Operating as:</strong> Derana</p>
                <p>Currently available for validator operations, infrastructure consulting, and Web3 development projects.</p>
              </div>
            </div>
          </div>
          </ScrollFade>

        </div>
      </div>
    </div>
  );
}
