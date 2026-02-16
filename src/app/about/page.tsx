import { IdentityCard } from '@/components/identity/identity-card';
import { Timeline } from '@/components/experience/timeline';
import { ScrollFade } from '@/components/ui/scroll-fade';
import Image from 'next/image';

const skillTags = [
  'Product Development',
  'Smart Contracts',
  'Web3 Integration',
  'Backend Systems',
  'API Design',
  'PostgreSQL',
  'Node.js',
  'Next.js',
  'Practical Problem Solving',
  'Rapid Prototyping',
  'Move (Sui)',
  'Solidity (Base/EVM)',
  'JWT Authentication',
  'Database Design',
  'Wallet Integration',
];

const techStacks = [
  {
    title: 'Web3 & Smart Contracts',
    items: ['Solidity', 'Move', 'Wagmi', 'RainbowKit', 'WalletConnect'],
  },
  {
    title: 'Backend & Systems',
    items: ['Node.js', 'PostgreSQL', 'APIs', 'JWT Auth', 'Linux Operations'],
  },
  {
    title: 'Frontend & Tools',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
];

const selectedProjects = [
  {
    name: 'Catalyst (Sui Network)',
    description: '2nd Place Winner at Sui Indonesia Hackathon 2025. Built a fully functional NFT Launchpad protocol on MoveVM.',
  },
  {
    name: 'Irys Proofboard',
    description: 'Decentralized Proof-of-Existence platform using Irys SDK & SHA-256 hashing with gamified user achievements.',
  },
  {
    name: 'Sukatani (Base Sepolia)',
    description: 'Web3 Farming RPG featuring tradable Land NFTs, on-chain inventory, and a "Play, Harvest, Own" economic loop.',
  },
  {
    name: 'Kept (Base Ecosystem)',
    description: 'Accountability protocol where users stake tokens to back daily commitments, introducing financial incentives for habit building.',
  },
  {
    name: 'ReplayCaster',
    description: 'Cinematic Year-in-Review experience for Farcaster users, visualizing social graph activity and engagement metrics.',
  },
];

const experience = [
  {
    year: '2024-Present',
    title: 'Web3 Product Developer',
    company: 'Freelance / Derana Labs',
    description: 'Building complete Web3 products with practical development approach. Focus on delivering working solutions from smart contracts to user interfaces across multiple ecosystems.',
    tags: ['Product Development', 'Web3', 'Smart Contracts'],
  },
  {
    year: '2024-Present',
    title: 'Node Validator Operator',
    company: 'Independent',
    description: 'Active operator running validator nodes on high-throughput testnets, including Gonka, with focus on reliability and practical monitoring solutions.',
    tags: ['Validator Ops', 'Infrastructure', 'Linux'],
  },
  {
    year: '2025-Present',
    title: 'Move Ecosystem Contributor',
    company: 'Cedra Labs',
    description: 'Contributing to Move-based event indexing architecture and tooling through cedra-cli research and practical development.',
    tags: ['MoveVM', 'Indexing', 'Tooling'],
  },
];

export default function AboutPage() {
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
          <ScrollFade>
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 lg:w-full lg:h-auto lg:aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                <div className="relative rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl shadow-cyan-950/40">
                  <Image
                    src="/images/bayuprofile.png"
                    alt="Bayu Mulyana"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">About</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Hi, I{'&apos;'}m Bayu Mulyana
              </h1>
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
              Web3 Product Developer who builds end-to-end solutions with intuitive problem-solving approach. I focus on delivering working products from concept to deployment across Web2 and Web3 ecosystems, using practical development methods rather than theoretical perfection.
            </p>
              <p className="text-zinc-400 leading-relaxed max-w-3xl">
                🏆 <span className="text-white font-medium">2nd Place Winner at Sui Indonesia Hackathon 2025</span> – Built {"\"Catalyst,\""} a fully functional NFT Launchpad on MoveVM.
              </p>
            </div>
          </div>
          </ScrollFade>

          <ScrollFade delay={100}>
          <IdentityCard />
          </ScrollFade>

          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/40 pt-12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Tech stack
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techStacks.map((stack) => (
                <div key={stack.title} className="space-y-3">
                  <h3 className="font-semibold text-white">{stack.title}</h3>
                  <div className="space-y-2 text-zinc-400">
                    {stack.items.map((item) => (
                      <div key={item}>{item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollFade>

          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/40 pt-12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {skillTags.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700/80 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          </ScrollFade>

          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/40 pt-12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Selected projects
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {selectedProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 space-y-2"
                >
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="text-zinc-400 leading-relaxed">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
          </ScrollFade>

          <ScrollFade delay={100}>
          <div className="border-t border-zinc-800/40 pt-12 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
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
