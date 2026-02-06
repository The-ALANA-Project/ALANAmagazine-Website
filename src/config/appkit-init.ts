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

// Global singleton flags
declare global {
  interface Window {
    __ALANA_APPKIT_INITIALIZED__?: boolean;
    __ALANA_APPKIT_INSTANCE__?: any;
  }
}

// Initialize AppKit immediately (module-level)
if (typeof window !== 'undefined' && !window.__ALANA_APPKIT_INITIALIZED__) {
  window.__ALANA_APPKIT_INITIALIZED__ = true;
  
  try {
    const appKitInstance = createAppKit({
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
    
    window.__ALANA_APPKIT_INSTANCE__ = appKitInstance;
  } catch (error) {
    console.error('Failed to initialize AppKit:', error);
    window.__ALANA_APPKIT_INITIALIZED__ = false;
  }
}

// Suppress Lit warnings
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Lit is in dev mode') || 
        message.includes('w3m-router-container') ||
        message.includes('Multiple versions of Lit loaded')) {
      return;
    }
    originalWarn.apply(console, args);
  };
  
  const originalError = console.error;
  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Multiple versions of Lit loaded')) {
      return;
    }
    originalError.apply(console, args);
  };
}
