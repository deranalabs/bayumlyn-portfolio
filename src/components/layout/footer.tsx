import { Github, Linkedin, Instagram, Send, MessageCircle, Twitter, Globe, Users, Briefcase } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/deranalabs', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bayumlyn/', icon: Linkedin },
    { name: 'X', href: 'https://x.com/bayumlynn', icon: Twitter },
    { name: 'Telegram', href: 'https://t.me/deranaz', icon: Send },
    { name: 'Link3', href: 'https://link3.to/bayumlyn', icon: Globe },
    { name: 'Upwork', href: 'https://www.upwork.com/freelancers/bayum8', icon: Briefcase },
    { name: 'Farcaster', href: 'https://farcaster.xyz/derana', icon: Users },
  ];

  return (
    <footer className="border-t border-cyan-900/30 bg-gradient-to-b from-[#0a0f1d] to-[#0b1220]">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col gap-8">
          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-zinc-800/50 text-sm text-zinc-500">
            © {new Date().getFullYear()} Bayu Mulyana. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
