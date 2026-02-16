'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, Wallet } from 'lucide-react';
import { shortenAddress } from '@/lib/utils';
import type { ENSProfile } from '@/types';

export function IdentityCard() {
  const { address, isConnected } = useAccount();
  const [ensProfile, setEnsProfile] = useState<ENSProfile | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (address && isConnected) {
      setLoading(true);
      fetch(`/api/ens?address=${address}`)
        .then((res) => res.json())
        .then((data) => setEnsProfile(data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [address, isConnected]);

  if (!isConnected || !address) {
    return (
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <User className="h-5 w-5" />
            Identity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-zinc-400">
            Connect your wallet to view your on-chain identity
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-zinc-800 bg-zinc-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <User className="h-5 w-5" />
          On-Chain Identity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <div className="text-zinc-400">Loading ENS profile...</div>
        ) : (
          <>
            {ensProfile?.avatar && (
              <div className="flex justify-center">
                <Image
                  src={ensProfile.avatar}
                  alt="ENS Avatar"
                  width={96}
                  height={96}
                  className="rounded-full border-2 border-white"
                />
              </div>
            )}
            
            <div className="space-y-3">
              {ensProfile?.name && (
                <div>
                  <p className="text-sm text-zinc-400">ENS Name</p>
                  <p className="text-lg font-semibold text-white">{ensProfile.name}</p>
                </div>
              )}
              
              <div>
                <p className="text-sm text-zinc-400">Wallet Address</p>
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-zinc-400" />
                  <code className="text-sm text-zinc-300">{shortenAddress(address)}</code>
                </div>
              </div>

              {ensProfile?.description && (
                <div>
                  <p className="text-sm text-zinc-400">Bio</p>
                  <p className="text-sm text-zinc-300">{ensProfile.description}</p>
                </div>
              )}

              {(ensProfile?.twitter || ensProfile?.github || ensProfile?.url) && (
                <div className="flex flex-wrap gap-2">
                  {ensProfile.twitter && (
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">@{ensProfile.twitter}</Badge>
                  )}
                  {ensProfile.github && (
                    <Badge className="bg-zinc-800 text-zinc-300 border border-zinc-700">GitHub: {ensProfile.github}</Badge>
                  )}
                  {ensProfile.url && (
                    <Badge variant="outline" className="bg-zinc-800 text-zinc-300 border-zinc-700">
                      <a href={ensProfile.url} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
