'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Portfolio',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '2f3e9a1b4c5d6e7f8a9b0c1d2e3f4a5b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
