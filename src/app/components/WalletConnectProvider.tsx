import { createAppKit } from '@reown/appkit/react';
import { WagmiProvider } from 'wagmi';
import { optimism, arbitrum, base } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { ReactNode } from 'react';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';

// 1. SINGLETON QUERY CLIENT (prevents React Query errors)
let queryClientInstance: QueryClient | null = null;
function getQueryClient() {
  if (!queryClientInstance) {
    queryClientInstance = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 1,
        },
      },
    });
  }
  return queryClientInstance;
}

const queryClient = getQueryClient();

// 2. PROJECT ID from Reown Cloud
const projectId = 'bfd72940b679060519658cd93a321a9c';

// 3. METADATA for ALANAmagazine
const metadata = {
  name: 'ALANAmagazine',
  description: 'Where Tech, Culture & Lifestyle Collide',
  url: typeof window !== 'undefined' ? window.location.origin : 'https://alanamagazine.com',
  icons: [typeof window !== 'undefined' ? `${window.location.origin}${alanaLogo}` : alanaLogo]
};

// 4. NETWORKS - Only Optimism, Arbitrum, and Base
const networks = [optimism, arbitrum, base];

// 5. WAGMI ADAPTER
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false // Important for client-side apps
});

// 6. GLOBAL SINGLETON FLAGS (crucial for preventing multiple instances!)
declare global {
  interface Window {
    __ALANA_APPKIT_INITIALIZED__?: boolean;
    __ALANA_APPKIT_INSTANCE__?: any;
  }
}

let appKitInstance: any = null;

// 7. INITIALIZATION FUNCTION with singleton logic
function initializeAppKit() {
  if (typeof window !== 'undefined') {
    // Return existing instance if already initialized
    if (window.__ALANA_APPKIT_INSTANCE__) {
      return window.__ALANA_APPKIT_INSTANCE__;
    }
    
    if (!appKitInstance && !window.__ALANA_APPKIT_INITIALIZED__) {
      try {
        window.__ALANA_APPKIT_INITIALIZED__ = true;
        
        appKitInstance = createAppKit({
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
        
        // Store globally to persist across hot reloads
        window.__ALANA_APPKIT_INSTANCE__ = appKitInstance;
      } catch (error) {
        console.debug('AppKit already initialized');
        appKitInstance = window.__ALANA_APPKIT_INSTANCE__;
      }
    }
  }
  return appKitInstance || window.__ALANA_APPKIT_INSTANCE__;
}

// 8. INITIALIZE SYNCHRONOUSLY before React renders (CRITICAL!)
if (typeof window !== 'undefined' && !window.__ALANA_APPKIT_INITIALIZED__) {
  initializeAppKit();
}

// 9. PROVIDER COMPONENT
export function WalletConnectProvider({ children }: { children: ReactNode }) {
  // Ensure initialization happens before rendering
  if (typeof window !== 'undefined' && !window.__ALANA_APPKIT_INITIALIZED__) {
    initializeAppKit();
  }
  
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// Suppress harmless Lit dev warnings
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (message.includes('Lit is in dev mode') || 
        message.includes('w3m-router-container')) {
      return;
    }
    originalWarn.apply(console, args);
  };
}
