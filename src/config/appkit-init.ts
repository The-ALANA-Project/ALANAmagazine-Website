/**
 * AppKit Initialization Module
 * This file MUST be imported before any component that uses useAppKit hook
 */

import { createAppKit } from '@reown/appkit/react';
import { optimism } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { assetUrls } from '@/assets/asset-urls';

// Project ID from Reown Cloud
const projectId = 'bfd72940b679060519658cd93a321a9c';

// Metadata for ALANAmagazine
const metadata = {
  name: 'ALANAmagazine',
  description: 'Where Tech, Culture & Lifestyle Collide',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://alanamagazine.com',
  icons: [typeof window !== 'undefined' ? `${window.location.origin}${assetUrls.alanaLogo}` : assetUrls.alanaLogo]
};

// Networks - Only Optimism
const networks = [optimism];

// Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false
});

// Global singleton to prevent double initialization
declare global {
  interface Window {
    __ALANA_APPKIT_MODAL__?: any;
  }
}

// Initialize AppKit only once using singleton pattern
let modalInstance: any = null;

if (typeof window !== 'undefined') {
  // Check if modal already exists in window
  if (window.__ALANA_APPKIT_MODAL__) {
    modalInstance = window.__ALANA_APPKIT_MODAL__;
  } else {
    // Create new modal instance
    modalInstance = createAppKit({
      adapters: [wagmiAdapter],
      networks,
      projectId,
      metadata,
      features: {
        analytics: false,
        email: false,
        socials: false,
      },
      themeMode: 'dark',
      themeVariables: {
        '--w3m-color-mix': '#262424',
        '--w3m-accent': '#DCC2FE',
      },
      enableAnalytics: false
    });
    
    // Store in window to prevent re-initialization
    window.__ALANA_APPKIT_MODAL__ = modalInstance;
  }
}

export const modal = modalInstance;

// Suppress Lit warnings and WalletConnect duplicate init warnings
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Lit is in dev mode') || 
        message.includes('w3m-router-container') ||
        message.includes('Multiple versions of Lit loaded') ||
        message.includes('WalletConnect Core is already initialized')) {
      return;
    }
    originalWarn.apply(console, args);
  };
  
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Multiple versions of Lit loaded') ||
        message.includes('Proposal expired') ||
        message.includes('WalletConnect Core is already initialized')) {
      return;
    }
    originalError.apply(console, args);
  };
}