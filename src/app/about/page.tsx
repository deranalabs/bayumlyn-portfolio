import { IdentityCard } from '@/components/identity/identity-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Blocks, Zap, Shield, Globe, Code, Sparkles, Wallet, Download, Calendar } from 'lucide-react';
import { SkillBar } from '@/components/skills/skill-bar';
import { Timeline } from '@/components/experience/timeline';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Image from 'next/image';

const skills = [
  { name: 'Docker & CLI Scripting', level: 95, category: 'Infrastructure' },
  { name: 'Validator Operations', level: 93, category: 'Blockchain' },
  { name: 'React / Vite / Next.js', level: 90, category: 'Frontend' },
  { name: 'Node.js & PostgreSQL', level: 85, category: 'Backend' },
  { name: 'Grafana & Prometheus', level: 90, category: 'Monitoring' },
  { name: 'Blockchain Testnet Participation', level: 95, category: 'Web3' },
];

const experience = [
  {
    year: '2024-Now',
    title: 'Founder & Fullstack Developer',
    company: 'Proofboard',
    description: 'Building Web3 application on Irys Datachain focused on verifiable storage and permanent proofs. Developing full-stack architecture with React, Vite, and Irys SDK.',
    tags: ['React', 'Vite', 'Irys SDK', 'Web3'],
  },
  {
    year: '2021-Now',
    title: 'Independent Validator & Node Operator',
    company: 'Self-Employed (Derana)',
    description: 'Operating infrastructure for 30+ blockchain networks including Drosera, Nibiru, Subsquid, BonusBlock, Namada, Over Protocol. Expertise in Docker, monitoring, and testnet participation.',
    tags: ['Validator', 'Docker', 'Monitoring', 'DevOps'],
  },
  {
    year: '2021-2025',
    title: 'KYC Analyst',
    company: 'CoinList (Freelance)',
    description: 'Provided global KYC support for token sales and crypto exchange. Processed thousands of orders with international team collaboration.',
    tags: ['KYC', 'Compliance', 'AML', 'Remote'],
  },
];

export default function AboutPage() {
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
        <div className="space-y-24">
          {/* Header with Profile Photo */}
          <ScrollFade>
          <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 lg:w-full lg:h-auto lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl shadow-blue-950/50">
                  <Image
                    src="/images/bayuprofile.png"
                    alt="Bayu Mulyana - Derana"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                About me
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                Independent Validator & Web3 Developer from Bogor, Indonesia. Operating as <span className="font-semibold text-white">Derana</span>, I&apos;ve contributed to 30+ blockchain networks and built Web3 applications focused on permanence and verification.
              </p>
            </div>
          </div>
          </ScrollFade>

          {/* Identity Card */}
          <ScrollFade delay={100}>
          <IdentityCard />
          </ScrollFade>

          {/* Tech Stack */}
          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/30 pt-20 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech stack
            </h2>
            <div className="grid md:grid-cols-3 gap-x-12 gap-y-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Infrastructure</h3>
                <div className="space-y-2 text-zinc-400">
                  <div>Docker</div>
                  <div>Ansible</div>
                  <div>Ubuntu Server</div>
                  <div>CLI Scripting</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Frontend & Backend</h3>
                <div className="space-y-2 text-zinc-400">
                  <div>React / Vite / Next.js</div>
                  <div>Node.js / Express</div>
                  <div>PostgreSQL / Supabase</div>
                  <div>Tailwind CSS</div>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-white">Monitoring & Web3</h3>
                <div className="space-y-2 text-zinc-400">
                  <div>Grafana / Prometheus</div>
                  <div>wagmi / Irys SDK</div>
                  <div>Cosmos SDK / EVM</div>
                  <div>Railway / Vercel</div>
                </div>
              </div>
            </div>
          </div>
          </ScrollFade>

          {/* Skills */}
          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/30 pt-20 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  category={skill.category}
                />
              ))}
            </div>
          </div>
          </ScrollFade>

          {/* Experience Timeline */}
          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/30 pt-20 space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Experience
            </h2>
            <Timeline items={experience} />
          </div>
          </ScrollFade>
        </div>
      </div>
    </div>
  );
}
