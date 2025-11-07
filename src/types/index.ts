export interface NFT {
  tokenId: string;
  name: string;
  description?: string;
  image: string;
  collection: string;
  contractAddress: string;
}

export interface ENSProfile {
  name: string | null;
  avatar: string | null;
  description: string | null;
  twitter: string | null;
  github: string | null;
  url: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
