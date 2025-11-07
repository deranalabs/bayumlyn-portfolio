import { Github, Linkedin, Instagram, Send, MessageCircle } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bayumlyn/', icon: Linkedin },
    { name: 'GitHub', href: 'https://github.com/deranalabs', icon: Github },
    { name: 'X (Twitter)', href: 'https://x.com/bayumlynn', icon: MessageCircle },
    { name: 'Instagram', href: 'https://instagram.com/bayumlyn', icon: Instagram },
    { name: 'Telegram', href: 'https://t.me/deranaz', icon: Send },
  ];

  return (
    <footer className="border-t border-blue-900/30 bg-gradient-to-b from-[#0a0e1a] to-[#0d1117]">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
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
            
            {/* Additional Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <a 
                href="https://link3.to/bayumlyn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Link3
              </a>
              <a 
                href="https://medium.com/@bayumlyn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Medium
              </a>
              <a 
                href="https://warpcast.com/derana" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Warpcast
              </a>
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
