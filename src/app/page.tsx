import { Wallet, Image as ImageIcon, Code, Github, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ConnectButton } from '@/components/wallet/connect-button';
import { GitHubStats } from '@/components/stats/github-stats';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
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

      {/* Hero Section */}
      <ScrollFade>
      <section className="container mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 text-zinc-100 px-4 py-2 rounded-full text-sm font-medium border border-zinc-800 shadow-lg shadow-black/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              Available for new projects
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Building{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Web3 Infrastructure
              </span>{' '}
              &amp; Applications
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              Hi, I&apos;m <span className="font-semibold text-white">Bayu Mulyana</span> — an Independent Validator &amp; Web3 Developer from Bogor, Indonesia. Operating as <span className="font-semibold text-white">Derana</span>, I build blockchain infrastructure and Web3 applications focused on permanence and verification.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8">Get in touch</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" size="lg" className="h-12 px-8">View work</Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-zinc-800/50">
              <div>
                <div className="text-3xl font-bold text-white">4+</div>
                <div className="text-sm text-zinc-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">30+</div>
                <div className="text-sm text-zinc-400">Networks Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-zinc-400">Testnet Projects</div>
              </div>
            </div>
          </div>

          {/* Visual Element with Animation */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-xs lg:max-w-md aspect-square rounded-2xl bg-zinc-900 p-1 border border-zinc-800">
              <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                  {/* Orbital Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-500/20 animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-400/30 animate-spin-reverse"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-1 shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-2 shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-300 rounded-full animate-float-3 shadow-lg shadow-blue-300/50"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-float-4 shadow-lg shadow-indigo-400/50"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float-5 shadow-lg shadow-blue-500/50"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center space-y-4 lg:space-y-6 p-6 lg:p-12">
                  {/* Profile Photo with Glow */}
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse-slow"></div>
                    <div className="relative p-1 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-500/30">
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
                    <div className="text-xl lg:text-2xl font-bold text-white">Validator &amp; Builder</div>
                    <div className="text-sm lg:text-base text-zinc-400">Infrastructure • Node Ops • Web3 Apps</div>
                  </div>
                  {/* Tech Stack Badges Inside */}
                  <div className="flex flex-wrap justify-center gap-1.5 lg:gap-2 pt-2 lg:pt-4">
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-blue-500/50 transition-all">Docker</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-blue-500/50 transition-all">Next.js</span>
                    <span className="bg-zinc-800/80 backdrop-blur-sm text-zinc-300 px-2 lg:px-3 py-0.5 lg:py-1 rounded-full text-[10px] lg:text-xs font-medium border border-zinc-700/50 hover:border-blue-500/50 transition-all">Cosmos SDK</span>
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
      <section className="border-t border-zinc-800/30 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Portfolio
              </h2>
              <p className="text-lg text-zinc-400">Live projects and professional services</p>
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
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-zinc-800 to-blue-950/30 relative overflow-hidden">
                  <Image 
                    src="/images/proofboard.png" 
                    alt="Proofboard Dashboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-medium px-2 py-1 bg-green-900/30 text-green-300 rounded border border-green-700/50">Live</span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Irys Datachain</span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">React</span>
                    <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Vite</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    Irys Proofboard
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    Community-driven dashboard for verifying permanent proofs on Irys Datachain. Built with React, Vite, and Irys SDK for proof verification and immutable storage tracking.
                  </p>
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      100+ proofs verified
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      23 contributors
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-300"></span>
                      Community project
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href="https://app.irysproofboard.xyz/" target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm">View Live App</Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Additional Featured Projects - Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Web3 KYC Specialist */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden bg-zinc-800/50">
                <Image
                  src="/images/Kyc.png"
                  alt="Web3 KYC Specialist"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2 py-1 bg-cyan-900/30 text-cyan-300 rounded border border-cyan-700/50">Available for Hire</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Synaps</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Sumsub</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  Web3 KYC Specialist
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Professional KYC services for crypto exchanges, token sales, and launchpads. 4 years experience with CoinList, supporting thousands of users across 8+ countries with Synaps/Sumsub tools.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                    Thousands of orders processed
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    Global team collaboration (8+ countries)
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300"></span>
                    Aug 2021 - Mar 2025
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <a href="https://t.me/deranaz" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.122.1.155.234.171.326.016.093.036.305.02.471z"/>
                      </svg>
                      Contact via Telegram
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Validator Monitoring Dashboard */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-zinc-900 via-blue-950/20 to-zinc-900 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
                <div className="relative z-10 text-center space-y-3 p-6">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono">Infrastructure Project</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-medium px-2 py-1 bg-blue-900/30 text-blue-300 rounded border border-blue-700/50">Production</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Grafana</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Docker</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  Validator Monitoring Dashboard
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Custom Grafana/Prometheus monitoring system managing 30+ blockchain validators across Cosmos, EVM, and ZK networks with real-time alerting.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    30+ networks monitored
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    99.5%+ average uptime
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" disabled className="opacity-50">
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* What I Do */}
      <ScrollFade delay={200}>
      <section className="py-24 md:py-32 border-t border-zinc-800/30">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              What I do
            </h2>
            <p className="text-lg text-zinc-400">Validator Operations &amp; Web3 Development</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-blue-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-blue-950/30">
                <Code className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Validator Infrastructure</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                I&apos;ve contributed to 30+ blockchain networks across Cosmos, EVM, and ZK networks. Expertise in Docker, monitoring (Grafana/Prometheus), and validator operations for testnet &amp; devnet ecosystems.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-blue-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-blue-950/30">
                <Wallet className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Fullstack Web3 Development</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                Building end-to-end Web3 applications with React, Vite, Next.js, and Irys SDK. Creator of Proofboard — a project focused on verifiable storage and permanent proofs on Irys Datachain.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-zinc-900 to-blue-950/30 flex items-center justify-center mx-auto border border-zinc-800 shadow-lg shadow-blue-950/30">
                <ImageIcon className="h-6 w-6 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">DevOps & Automation</h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                Implementing CI/CD pipelines, infrastructure automation with Ansible, and deploying scalable backend systems (Node.js, PostgreSQL, Supabase) on Railway and Vercel.
              </p>
            </div>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Testnet Projects */}
      <ScrollFade delay={100}>
      <section className="py-24 md:py-32 border-t border-zinc-800/30">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Testnet Projects
            </h2>
            <p className="text-lg text-zinc-400">Blockchain networks and protocols I&apos;ve contributed to</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* === ROW 1: ACTIVE PROJECTS (TOP PRIORITY) === */}
            
            {/* Irys - Active */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-green-900/50 hover:shadow-lg hover:shadow-green-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/irys-logo.png"
                    alt="Irys"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Irys</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Proofboard builder and active network contributor through Vibe Coding, Irys Mafia, and community engagement as Shugo
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-green-900/30 text-green-300 border border-green-700/50">Active</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Shugo</span>
                </div>
              </CardContent>
            </Card>

            {/* Aztec - Active */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-green-900/50 hover:shadow-lg hover:shadow-green-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/aztec.png"
                    alt="Aztec"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Aztec</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Running sequencer and prover node as Guardian, contributing to privacy-focused ZK-rollup infrastructure
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-green-900/30 text-green-300 border border-green-700/50">Active</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Guardian</span>
                </div>
              </CardContent>
            </Card>

            {/* Sui - Layer 1 */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/sui-logo.png"
                    alt="Sui"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sui</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Participated in network development and testnet, whitelisted for Bybit presale with 45 USDT max allocation
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Layer 1</span>
                </div>
              </CardContent>
            </Card>

            {/* === ROW 2: LAYER 1 NETWORKS === */}
            
            {/* Namada - Layer 1 */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/namada-logo.png"
                    alt="Namada"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Namada</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Privacy-focused proof-of-stake validator for interchain asset-agnostic protocol
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Layer 1</span>
                </div>
              </CardContent>
            </Card>

            {/* Initia - Layer 1 */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/initia-logo.png"
                    alt="Initia"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Initia</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Validator infrastructure for optimistic rollup and Cosmos interoperability
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Layer 1</span>
                </div>
              </CardContent>
            </Card>

            {/* Nibiru - Layer 1 */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/nibiru-logo.png"
                    alt="Nibiru"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Nibiru Chain</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Cosmos SDK validator operations for Layer 1 blockchain testnet ecosystem
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                  <span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">Layer 1</span>
                </div>
              </CardContent>
            </Card>

            {/* === ROW 3: HIGH-TIER ZK & ROLLUPS === */}
            
            {/* Taiko */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/taiko-logo.png"
                    alt="Taiko"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Taiko</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    ZK-rollup node operations for Ethereum scaling and Layer 2 infrastructure
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Mantra */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/mantra-logo.png"
                    alt="Mantra"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mantra</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Selected as whitelisted validator and operated validator node for 3 months in the ecosystem
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Alt Layer */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/altlayer-logo.png"
                    alt="Alt Layer"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Alt Layer</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Participated in testnet campaign on Galxe for 3 months, contributing to rollup-as-a-service ecosystem
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* === ROW 4: ESTABLISHED VALIDATORS === */}
            
            {/* Stader Labs */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/staderlabs-logo.png"
                    alt="Stader Labs"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Stader Labs</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Testnet validator with high uptime, staking infrastructure and governance participation
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Drosera */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/drosera-logo.png"
                    alt="Drosera"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Drosera</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Validator operations for decentralized monitoring and incident response protocol
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Over Protocol */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/overprotocol-logo.png"
                    alt="Over Protocol"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Over Protocol</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Validator node operations with stable uptime and testnet staking participation
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* === ROW 5: OTHERS === */}
            
            {/* Subsquid */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/subsquid-logo.png"
                    alt="Subsquid"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Subsquid</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Multi-validator setup for indexer reliability testing and high-load scenarios
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* BonusBlock */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/bonusblock-logo.png"
                    alt="BonusBlock"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">BonusBlock</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    NodeDerana validator contributing to network security and testnet operations
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>

            {/* Nomina */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-lg hover:shadow-blue-950/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 overflow-hidden">
                  <Image
                    src="/images/testnetprojects/nomina-logo.png"
                    alt="Nomina"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Nomina</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Completed weekly testnet tasks on Galxe (Week 1 to Week++) for 4-6 months, consistent participation
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-blue-900/30 text-blue-300 border border-blue-700/50">Completed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" className="group">
                View all projects
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* Web3 Events */}
      <ScrollFade delay={100}>
      <section className="py-24 md:py-32 border-t border-zinc-800/30">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Web3 Events
            </h2>
            <p className="text-lg text-zinc-400">Community meetups and ecosystem gatherings I&apos;ve attended</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* zkSync Event */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-4 bg-zinc-800/50">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/zksyncevent1.png"
                    alt="zkSync Community Meetup"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/zksyncevent2.png"
                    alt="zkSync Community Meetup"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/zksyncevent3.png"
                    alt="zkSync Community Meetup"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/zksyncevent4.png"
                    alt="zkSync Community Meetup"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">zkSync</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Community</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  zkSync Community Meetup
                </h3>
                <div className="space-y-2 text-zinc-400">
                  <p className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Saturday, April 27, 2024
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Ganara Art Space, Plaza Indonesia, Jakarta
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ramadhan with Sui Event */}
            <Card className="group border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-2 gap-2 p-4 bg-zinc-800/50">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/ramadhanwithsui1.png"
                    alt="Ramadhan with Sui"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/ramadhanwithsui2.png"
                    alt="Ramadhan with Sui"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/ramadhanwithsui3.png"
                    alt="Ramadhan with Sui"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image 
                    src="/images/events/ramadhanwithsui4.png"
                    alt="Ramadhan with Sui"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Sui</span>
                  <span className="text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Community</span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  Ramadhan with Sui
                </h3>
                <div className="space-y-2 text-zinc-400">
                  <p className="text-sm flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Sunday, March 23, 2025
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Ruang Eatery, Coworking & Event Space, Bogor
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </ScrollFade>

      {/* CTA */}
      <ScrollFade delay={100}>
      <section className="border-t border-zinc-800/30 py-24 md:py-32">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-blue-950/20 to-zinc-900 p-12 md:p-16 border border-blue-900/30 shadow-2xl shadow-blue-950/50">
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Available for validator operations, Web3 development, and KYC services. Based in Indonesia, working globally.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="h-12 px-8 bg-white text-gray-900 hover:bg-gray-100">Get in touch</Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="h-12 px-8 border-white/50 text-white hover:bg-white/10 hover:border-white">View work</Button>
                </Link>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
      </ScrollFade>
    </div>
  );
}
