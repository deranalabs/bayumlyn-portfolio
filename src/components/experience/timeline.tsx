'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />
      
      <div className="space-y-8 pl-8">
        {items.map((item, index) => (
          <div key={index} className="relative">
            {/* Dot */}
            <div className="absolute -left-8 top-2 w-3 h-3 rounded-full bg-white border-4 border-[#0d1117]" />
            
            <Card className="border-zinc-800 bg-zinc-900 hover:border-blue-900/50 hover:shadow-2xl hover:shadow-blue-950/50 transition-all duration-300">
              <CardContent className="pt-6 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h3 className="font-semibold text-xl text-white">{item.title}</h3>
                      <span className="hidden sm:inline text-zinc-500">@</span>
                      <span className="text-zinc-300 font-medium">{item.company}</span>
                    </div>
                    <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0 bg-zinc-800 text-zinc-300 border-zinc-700">
                    {item.year}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} className="text-xs bg-zinc-800 text-zinc-300 border border-zinc-700 hover:bg-zinc-700">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
