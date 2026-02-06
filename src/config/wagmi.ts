import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { optimism, arbitrum, base } from 'viem/chains';
import { QueryClient } from '@tanstack/react-query';

// Reown Cloud Project ID
const projectId = 'bfd72940b679060519658cd93a321a9c';

// Configure metadata for the app
const metadata = {
  name: 'ALANAmagazine',
  description: 'Web3-focused digital magazine',
  url: window.location.origin,
  icons: ['https://alanamagazine.xyz/favicon.ico']
};

// Configure chains - Optimism, Arbitrum, Base only
const chains = [optimism, arbitrum, base] as const;

// Create Wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: chains,
  projectId,
});

// Create query client for TanStack Query
export const queryClient = new QueryClient();

// Create AppKit modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: chains,
  projectId,
  metadata,
  features: {
    analytics: false,
  },
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#DCC2FE',
    '--w3m-color-mix': '#DCC2FE',
    '--w3m-color-mix-strength': 20,
  }
});

export const config = wagmiAdapter.wagmiConfig;
