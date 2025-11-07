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
              Projects
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
              Validator operations and Web3 applications across 30+ blockchain networks — from Cosmos SDK to EVM and ZK ecosystems.
            </p>
          </div>
          </ScrollFade>

          {/* Web3 Applications */}
          <ScrollFade delay={100}>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Code className="h-6 w-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Web3 Applications
              </h2>
            </div>

            {/* Proofboard Card */}
            <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-[300px] lg:h-full bg-zinc-800/50">
                  <Image 
                    src="/images/irysproofboard.png"
                    alt="Proofboard - Verifiable Dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                
                {/* Content */}
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-900/30 text-green-300 border border-green-700">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Live
                      </Badge>
                      <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">React</Badge>
                      <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Vite</Badge>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white">
                      Proofboard
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed">
                      Verifiable dashboard for permanent proofs on Irys Datachain. Built with React, Vite, and Irys SDK for proof verification and immutable storage tracking.
                    </p>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a href="https://app.irysproofboard.xyz/" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live App
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
          </ScrollFade>

          {/* Featured Validator Work */}
          <ScrollFade delay={200}>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Featured Validator Work
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Drosera */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-[200px] bg-zinc-800/50">
                  <Image 
                    src="/images/droserawork.png"
                    alt="Drosera Network Operator"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Drosera</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Drosera Network Operator
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Completed validator operations on Drosera testnet, providing secure infrastructure for decentralized monitoring and incident response. Successfully managed node operations with high uptime.
                  </p>
                </CardContent>
              </Card>

              {/* Stader Labs */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-[200px] bg-zinc-800/50">
                  <Image 
                    src="/images/staderlabs.png"
                    alt="Stader Labs Validator"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Stader Labs</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Stader Labs Testnet Validator
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Successfully completed validator participation in the Stader Labs testnet, maintained high uptime and supported staking, governance, and faucet delegation testing.
                  </p>
                </CardContent>
              </Card>

              {/* Over Protocol */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-[200px] bg-zinc-800/50">
                  <Image 
                    src="/images/overprotocol.png"
                    alt="Over Protocol Validator"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Over Protocol</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Over Protocol Validator Node
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Successfully completed Over Protocol validator node operations with stable uptime and active participation in testnet staking and governance.
                  </p>
                </CardContent>
              </Card>

              {/* Subsquid */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-[200px] bg-zinc-800/50">
                  <Image 
                    src="/images/subsquid.png"
                    alt="Subsquid Validator"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Subsquid</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Subsquid Multi-Validator Setup
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Successfully completed multiple Subsquid validator identities operations, simulated high-load scenarios and validated indexer reliability in testnet conditions.
                  </p>
                </CardContent>
              </Card>

              {/* BonusBlock */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300 overflow-hidden">
                <div className="relative h-[200px] bg-zinc-800/50">
                  <Image 
                    src="/images/bonusblock.png"
                    alt="BonusBlock Validator - NodeDerana"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">BonusBlock</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    BonusBlock Validator - NodeDerana
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Successfully completed testnet operations as NodeDerana validator on BonusBlock network, contributed to network security and validator operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          </ScrollFade>
          
          {/* Additional Networks */}
          <ScrollFade delay={300}>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-white" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Additional Networks
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Nibiru Chain */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Cosmos SDK</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Nibiru Chain Validator
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Operated PoS validator node on Nibiru testnet for 7 months. Deployed test website for smart contract staking simulations and user onboarding.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs text-zinc-500">Nibiru</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">Validator</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">Staking</span>
                  </div>
                </CardContent>
              </Card>
              

              {/* 30+ Networks */}
              <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-xl hover:shadow-blue-950/30 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-900/30 text-blue-300 border border-blue-700">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">Multi-Network</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    30+ Network Infrastructure
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Successfully completed infrastructure operations across 30+ blockchain networks including Namada, Initia, 0gLabs, Taiko, Sui, Elixir, and more. Roles included validator, indexer, oracle, and prover. Currently active: Aztec network.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="text-xs text-zinc-500">Docker</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">Monitoring</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">DevOps</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          </ScrollFade>

          {/* CTA */}
          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/30 pt-12 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-zinc-400 mb-6">
              Check out my GitHub for additional projects and open-source contributions
            </p>
            <Link href="https://github.com/deranalabs" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="h-4 w-4" />
                Visit GitHub Profile
              </Button>
            </Link>
          </div>
          </ScrollFade>
        </div>
      </div>
    </div>
  );
}
