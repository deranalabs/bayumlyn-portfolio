/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    remotePatterns: [
      { hostname: 'ipfs.io' },
      { hostname: '*.ipfs.nftstorage.link' },
    ],
  },
  
  // Dev server optimizations
  experimental: {
    // Faster refresh
    optimizePackageImports: ['lucide-react', '@rainbow-me/rainbowkit'],
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    config.resolve.fallback = {
      ...config.resolve.fallback,
      '@react-native-async-storage/async-storage': false,
    };
    
    // Reduce memory usage in dev
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // Delay before rebuilding
        ignored: /node_modules/,
      };
    }
    
    return config;
  },
};

export default nextConfig;
