import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, CheckCircle2, Code } from 'lucide-react';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
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
          <div className="space-y-4 md:space-y-6">
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-300">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Recent Projects
            </h1>
            <p className="text-base md:text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
              Working Web3 products built with practical development approach across multiple ecosystems. From smart contracts to complete applications, I focus on delivering solutions that actually work.
            </p>
          </div>
          </ScrollFade>

          {/* Web3 Applications */}
          <ScrollFade delay={100}>
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">Web3 Applications</h2>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Catalyst Card */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden group">
                <div className="relative h-[160px] sm:h-[200px] bg-zinc-800/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image 
                    src="/images/projects/catalyst.png"
                    alt="Catalyst - NFT Launchpad on Sui"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <Badge className="bg-yellow-900/30 text-yellow-300 border border-yellow-700 text-xs sm:text-sm">
                      🏆 2nd Place
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <Badge className="bg-green-900/30 text-green-300 border border-green-700 text-xs">Live</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs">Move</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs">Sui</Badge>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Catalyst</h3>
                  <p className="text-[13px] sm:text-sm text-zinc-400 leading-relaxed">
                    NFT Launchpad protocol built with practical approach during Sui Indonesia Hackathon 2025. Features batch minting, metadata management, and creator royalties - focused on working solutions.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="https://catalyst-sui-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
                       <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live App
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Proofboard Card */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden group">
                <div className="relative h-[200px] bg-zinc-800/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <video 
                    src="/images/projects/proofboard.mp4"
                    controls
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-900/30 text-green-300 border border-green-700">Irys Testnet</Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">React</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Irys</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">Irys Proofboard</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Decentralized Proof-of-Existence platform using Irys SDK & SHA-256 hashing with gamified user achievements and permanent storage.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="https://app.irysproofboard.xyz/" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live App
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Sukatani Card */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden group">
                <div className="relative h-[200px] bg-zinc-800/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <video 
                    src="/images/projects/demo-sukatani.mp4"
                    controls
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">Base App</Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">Base Ecosystem</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">P2E</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Solidity</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">Sukatani</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Web3 Farming RPG featuring tradable Land NFTs, on-chain inventory, and a {"\"Play, Harvest, Own\""} economic loop on Base Sepolia.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="https://sukatani.fun" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Play
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* ReplayCaster Card */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 overflow-hidden group">
                <div className="relative h-[200px] bg-zinc-800/30 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <video 
                    src="/images/projects/replaycaster.mp4"
                    controls
                    className="w-full h-full object-contain bg-zinc-900"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-900/30 text-purple-300 border border-purple-700">Farcaster</Badge>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-900/30 text-purple-300 border border-purple-700">Farcaster</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Data Viz</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Social</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">ReplayCaster</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Cinematic Year-in-Review experience for Farcaster users, visualizing social graph activity and engagement metrics.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a href="https://replaycaster.vercel.app" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live App
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </ScrollFade>

          {/* Infrastructure & Protocol Work */}
          <ScrollFade delay={200}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px bg-zinc-800 flex-1"></div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">Infrastructure & Protocol Work</h2>
              <div className="h-px bg-zinc-800 flex-1"></div>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {/* Gonka Validator */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300 p-4 sm:p-5">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                    <Badge className="bg-green-900/30 text-green-300 border border-green-700 text-[10px] sm:text-xs">Active</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-[10px] sm:text-xs">Validator</Badge>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white">Gonka Testnet</h3>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                    Active validator node operator on high-throughput testnet with focus on reliability and monitoring.
                  </p>
                </div>
              </Card>

              {/* Cedra Labs */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300 p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700 text-xs">Contributor</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs">MoveVM</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Cedra Labs</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Contributing to Move-based event indexing architecture and tooling through cedra-cli development.
                  </p>
                </div>
              </Card>

              {/* Kept */}
              <Card className="border-zinc-800/60 bg-zinc-900/40 hover:border-cyan-900/40 hover:shadow-lg hover:shadow-cyan-950/10 transition-all duration-300 p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700 text-xs">Base Ecosystem</Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700 text-xs">DeFi</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Kept</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Accountability protocol where users stake tokens to back daily commitments, introducing financial incentives for habit building.
                  </p>
                </div>
              </Card>
            </div>
          </div>
          </ScrollFade>
          
          {/* CTA */}
          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/40 pt-12 mt-12 text-center space-y-4">
            <h3 className="text-xl font-semibold text-white">Ready to build working products?</h3>
            <p className="text-zinc-400">
              Let&apos;s discuss your next projects from smart contracts to complete deployment with practical development approach
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/deranalabs" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="mailto:deranalabs@proton.me">
                <Button className="gap-2 bg-cyan-600 hover:bg-cyan-500">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          </ScrollFade>
        </div>
      </div>
    </div>
  );
}
