import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Github, Linkedin, MessageSquare, Link2, Globe, Briefcase, Users, ExternalLink } from 'lucide-react';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0f1d] via-[#0b1220] to-[#0a0f1d] -z-50"></div>

      <div className="fixed inset-0 -z-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-blue-950/10"></div>
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(ellipse, rgba(34, 211, 238, 0.12), transparent 70%)'
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-16 md:py-24">
        <div className="space-y-16">
          {/* Header */}
          <ScrollFade>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Let{'&apos;'}s Connect
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Web3 Product Developer who builds complete solutions with practical approach. Reach out for collaborations, product development, or end-to-end Web3 projects from concept to deployment.
            </p>
          </div>
          </ScrollFade>

          {/* Contact Links */}
          <ScrollFade delay={100}>
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="mailto:bayumlynn@gmail.com"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Mail className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-zinc-400">bayumlynn@gmail.com</p>
                </div>
              </Link>

              <Link
                href="https://t.me/deranaz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <MessageSquare className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">Telegram</p>
                  <p className="text-sm text-zinc-400">@deranaz</p>
                </div>
              </Link>

              <Link
                href="https://x.com/bayumlynn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Twitter className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">X</p>
                  <p className="text-sm text-zinc-400">@bayumlynn</p>
                </div>
              </Link>

              <Link
                href="https://github.com/deranalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Github className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-zinc-400">@deranalabs</p>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/bayumlyn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Linkedin className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-zinc-400">bayumlyn</p>
                </div>
              </Link>

              <Link
                href="https://www.upwork.com/freelancers/bayum8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Briefcase className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">Upwork</p>
                  <p className="text-sm text-zinc-400">bayumlyn</p>
                </div>
              </Link>

              <Link
                href="https://link3.to/bayumlyn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Globe className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">Link3</p>
                  <p className="text-sm text-zinc-400">bayumlyn</p>
                </div>
              </Link>

              <Link
                href="https://farcaster.xyz/derana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Users className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">Farcaster</p>
                  <p className="text-sm text-zinc-400">Derana</p>
                </div>
              </Link>

              <Link
                href="https://base.app/profile/0x30F71f18cDF315Ad2A0bE35E47FC20a523BCAf46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:bg-cyan-950/10 transition-all group"
              >
                <Users className="h-5 w-5 text-zinc-400" />
                <div>
                  <p className="font-medium">BaseApp</p>
                  <p className="text-sm text-zinc-400">Derana</p>
                </div>
              </Link>
            </div>

            <div className="border-t border-zinc-800/40 pt-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Based in</h3>
                  <p className="text-zinc-400">Bogor, Indonesia</p>
                  <p className="text-sm text-zinc-500 mt-1">Available remotely worldwide</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Open to</h3>
                  <ul className="text-zinc-400 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 text-lg leading-none">•</span>
                      <span>Product development & MVP building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 text-lg leading-none">•</span>
                      <span>End-to-end Web3 solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 text-lg leading-none">•</span>
                      <span>Practical smart contract development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 text-lg leading-none">•</span>
                      <span>Backend systems & API design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400 text-lg leading-none">•</span>
                      <span>Rapid prototyping & hackathon partnerships</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </ScrollFade>

        </div>
      </div>
    </div>
  );
}
