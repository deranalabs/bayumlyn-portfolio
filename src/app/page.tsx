import { Wallet, Image as ImageIcon, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ConnectButton } from '@/components/wallet/connect-button';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
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

      {/* Hero Section */}
      <ScrollFade>
      <section className="container mx-auto max-w-5xl px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-1 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 text-zinc-100 px-4 py-2 rounded-full text-sm font-medium border border-zinc-800 shadow-lg shadow-black/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Web3 Products
              </span>{' '}
              &{' '}Working Solutions
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed">
              Hi, I{'&apos;'}m <span className="font-semibold text-white">Bayu Mulyana</span> — a Web3 Product Developer who builds end-to-end solutions with intuitive problem-solving. I focus on delivering working products from concept to deployment across Web2 and Web3 ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-6 sm:px-8">Get in touch</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="h-12 px-6 sm:px-8">View work</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex sm:grid gap-4 sm:gap-6 sm:grid-cols-4 overflow-x-auto pb-2 sm:pb-0 pt-8 border-t border-zinc-800/50">
              <div>
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-zinc-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3</div>
                <div className="text-sm text-zinc-400">Ecosystems</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-zinc-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-zinc-400">GitHub Commits</div>
              </div>
            </div>
          </div>

          {/* Visual Element with Animation */}
          <div className="relative flex items-center justify-center order-2 lg:order-2">
            <div className="w-full max-w-[280px] sm:max-w-xs lg:max-w-md aspect-square rounded-2xl bg-zinc-900 p-1 border border-zinc-800">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  {/* Orbital Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-cyan-500/20 animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 rounded-full border border-cyan-400/30 animate-spin-reverse"></div>
                  
                  {/* Floating Particles - Desktop Only */}
                  <div className="hidden sm:block absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-1 shadow-lg shadow-cyan-400/50"></div>
                  <div className="hidden sm:block absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float-2 shadow-lg shadow-cyan-300/50"></div>
                  <div className="hidden sm:block absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-float-3 shadow-lg shadow-cyan-500/50"></div>
                  <div className="hidden sm:block absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-4 shadow-lg shadow-cyan-400/50"></div>
                  <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-float-5 shadow-lg shadow-cyan-500/50"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-4 lg:space-y-6 p-6 lg:p-12">
                  {/* Profile Photo with Glow */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-cyan-500/30 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="relative p-1 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30">
                      <div className="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-32 bg-zinc-800">
                        <Image 
                          src="/images/bayuprofile.png"
                          alt="Bayu Mulyana"
                          width={128}
                          height={128}
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1 lg:space-y-2">
                    <div className="text-xl lg:text-2xl font-bold text-white">Web3 Product Developer</div>
                    <div className="text-sm lg:text-base text-zinc-400">End-to-End Solutions • Practical Approach</div>
                  </div>
                  {/* Tech Stack Badges Inside */}
                  <div className="flex flex-wrap justify-center gap-1.5 lg:gap-2 pt-2 lg:pt-4">
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">Solidity</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">Move</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">Node.js</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">PostgreSQL</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">Next.js</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-cyan-500/50 transition-all">Wagmi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Featured Projects */}
      <ScrollFade delay={100}>
      <section className="border-t border-zinc-800/30 py-16 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Recent Projects
              </h2>
              <p className="text-lg text-zinc-400">Featured DApps and infrastructure work</p>
            </div>
            <Link href="/projects" className="text-zinc-400 hover:text-white font-medium flex items-center gap-2 shrink-0">
              View all projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          {/* Main Featured Project - Full Width */}
          <div className="mb-12">
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-cyan-900/50 hover:shadow-2xl hover:shadow-cyan-950/50 transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-zinc-800 to-cyan-950/30 relative overflow-hidden">
                  <Image
                    src="/images/projects/catalyst.png"
                    alt="Catalyst NFT Launchpad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-medium px-2 py-1 bg-amber-900/30 text-amber-300 rounded border border-amber-700/50">🏆 2nd Place</span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium px-2 py-1 bg-green-900/30 text-green-300 rounded border border-green-700/50">Live</span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Sui</span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Move</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    Catalyst
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    NFT Launchpad protocol built on MoveVM during Sui Indonesia Hackathon 2025. Features batch minting, metadata management, and creator royalties.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      🏆 2nd Place Winner
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      Hackathon Project
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href="https://catalyst-sui-kohl.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm">Live App</Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Additional Featured Projects - Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Irys Proofboard */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-cyan-900/50 hover:shadow-lg hover:shadow-cyan-950/30 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-zinc-800/50">
                <video 
                  src="/images/projects/proofboard.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-2 py-1 bg-green-900/30 text-green-300 rounded border border-green-700/50">Live</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Irys Testnet</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">React</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  Irys Proofboard
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Decentralized Proof-of-Existence platform using Irys SDK & SHA-256 hashing with gamified user achievements and permanent storage.
                </p>
                <div className="flex gap-3 pt-2">
                  <a href="https://app.irysproofboard.xyz/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">Live App</Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Sukatani */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-cyan-900/50 hover:shadow-lg hover:shadow-cyan-950/30 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-zinc-800/50">
                <video 
                  src="/images/projects/demo-sukatani.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-700/50">Base Sepolia</span>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">GameFi</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Solidity</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  Sukatani
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Web3 Farming RPG featuring tradable Land NFTs, on-chain inventory, and a "Play, Harvest, Own" economic loop on Base Sepolia.
                </p>
                <div className="flex gap-3 pt-2">
                  <a href="https://sukatani.fun" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">Play Demo</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* What I Do */}
      <ScrollFade delay={200}>
      <section className="py-16 md:py-24 border-t border-zinc-800/30">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Expertise
            </h2>
            <p className="text-lg text-zinc-400">Practical Product Development & End-to-End Solutions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-cyan-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-cyan-950/30">
                <Code className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Smart Contracts</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                Building secure smart contracts with practical testing approach. Focus on working solutions rather than theoretical perfection, with proper security audits.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-cyan-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-cyan-950/30">
                <Wallet className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Backend Systems</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                Designing APIs, databases, and server architecture with PostgreSQL and Node.js. Building robust backend systems that power Web2 and Web3 applications.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-cyan-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-cyan-950/30">
                <ImageIcon className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Product Integration</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                Connecting all pieces together with intuitive problem-solving. From smart contracts to user interfaces, I focus on delivering complete working products.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* CTA Section */}
      <ScrollFade delay={300}>
      <section className="py-16 md:py-24 border-t border-zinc-800/30">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Ready to build working products?
              </h2>
              <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                Let{'&apos;'}s discuss your project requirements and build practical solutions together. I focus on delivering working products from concept to deployment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">Start a Project</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="h-12 px-8">View My Work</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </ScrollFade>
    </div>
  );
}
