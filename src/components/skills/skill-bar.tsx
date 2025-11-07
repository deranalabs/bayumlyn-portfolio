'use client';

import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  category?: string;
}

export function SkillBar({ name, level, category }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), 100);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-white">{name}</span>
          {category && (
            <span className="text-xs text-zinc-400">({category})</span>
          )}
        </div>
        <span className="text-xs text-zinc-400">{level}%</span>
      </div>
      <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-white to-zinc-300 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
