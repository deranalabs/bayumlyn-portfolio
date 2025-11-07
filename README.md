# Web3 Identity Portfolio dApp

A modern, full-stack Web3 portfolio application built with Next.js, showcasing on-chain identity, NFT collections, and projects. Features wallet connection via RainbowKit, ENS resolution, and NFT gallery integration with Alchemy.

![Web3 Portfolio](https://img.shields.io/badge/Web3-Portfolio-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- 🔐 **Wallet Connection** - Connect with multiple wallets via RainbowKit
- 🌐 **ENS Resolution** - Automatic ENS name and profile resolution
- 🖼️ **NFT Gallery** - Display NFT collections from Alchemy API
- 📱 **Responsive Design** - Mobile-first, fully responsive UI
- 🎨 **Modern UI** - Built with Tailwind CSS and Shadcn UI
- ⚡ **Fast Performance** - Next.js App Router with edge runtime
- 🌙 **Dark Mode** - Beautiful dark theme by default

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Web3**: wagmi + viem + RainbowKit
- **NFT Data**: Alchemy SDK
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/web3-portfolio.git
cd web3-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Then edit `.env.local` with your API keys:
```env
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_DEFAULT_ADDRESS=your_default_wallet_address
```

## 🔑 Getting API Keys

### Alchemy API Key
1. Visit [Alchemy](https://www.alchemy.com/)
2. Sign up and create a new app
3. Copy the API key from your dashboard

### WalletConnect Project ID
1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Copy the Project ID

## 🛠️ Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── projects/          # Projects showcase
│   ├── gallery/           # NFT gallery
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   ├── ens/          # ENS resolution
│   │   └── nfts/         # NFT data
│   ├── layout.tsx        # Root layout
│   ├── providers.tsx     # Web3 providers
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── wallet/           # Wallet components
│   ├── identity/         # Identity card
│   ├── nft/              # NFT gallery
│   └── layout/           # Layout components
├── lib/
│   ├── wagmi.ts          # wagmi configuration
│   ├── alchemy.ts        # Alchemy SDK setup
│   ├── ens.ts            # ENS utilities
│   └── utils.ts          # Helper functions
└── types/                # TypeScript types
```

## 🎨 Customization

### Update Personal Information

1. **Projects** - Edit `src/app/projects/page.tsx`
2. **About Me** - Edit `src/app/about/page.tsx`
3. **Contact Links** - Edit `src/app/contact/page.tsx`
4. **Social Links** - Edit `src/components/layout/footer.tsx`

### Styling

The app uses Tailwind CSS with a custom color scheme. Modify colors in:
- `src/app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

## 🚀 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables in Vercel

Add these in your Vercel project settings:
- `NEXT_PUBLIC_ALCHEMY_API_KEY`
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- `NEXT_PUBLIC_DEFAULT_ADDRESS`

## 📝 Features Roadmap

- [ ] Sign-In With Ethereum (SIWE)
- [ ] Lens Protocol integration
- [ ] Farcaster profile support
- [ ] Token balance display
- [ ] Transaction history
- [ ] Multi-chain support
- [ ] On-chain achievements/badges

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [RainbowKit](https://www.rainbowkit.com/)
- [wagmi](https://wagmi.sh/)
- [Alchemy](https://www.alchemy.com/)
- [Shadcn UI](https://ui.shadcn.com/)

---

Built with ❤️ for the Web3 community
