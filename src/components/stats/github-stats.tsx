'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, GitFork, Code2 } from 'lucide-react';

export function GitHubStats() {
  // In production, you would fetch this from GitHub API
  const stats = {
    stars: 1234,
    forks: 567,
    repos: 89,
    contributions: 2456,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6 text-center space-y-2">
          <Star className="h-6 w-6 text-yellow-500 mx-auto" />
          <div className="text-2xl font-bold">{stats.stars.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">GitHub Stars</div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6 text-center space-y-2">
          <GitFork className="h-6 w-6 text-blue-500 mx-auto" />
          <div className="text-2xl font-bold">{stats.forks.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Forks</div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6 text-center space-y-2">
          <Code2 className="h-6 w-6 text-green-500 mx-auto" />
          <div className="text-2xl font-bold">{stats.repos}</div>
          <div className="text-xs text-muted-foreground">Repositories</div>
        </CardContent>
      </Card>

      <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="pt-6 text-center space-y-2">
          <div className="h-6 w-6 rounded bg-primary/20 mx-auto flex items-center justify-center">
            <span className="text-xs font-bold text-primary">+</span>
          </div>
          <div className="text-2xl font-bold">{stats.contributions.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Contributions</div>
        </CardContent>
      </Card>
    </div>
  );
}
