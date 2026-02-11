// Initialize AppKit BEFORE any other imports
import '@/config/appkit-init';

import { RouterProvider } from 'react-router';
import { router } from '@/app/routes';
import { WalletConnectProvider } from '@/app/components/WalletConnectProvider';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { Toaster } from '@/app/components/ui/sonner';
import { useEffect } from 'react';

export default function App() {
  // Global error handler for WalletConnect proposal expiry
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('Proposal expired')) {
        event.preventDefault();
        // Silently ignore proposal expiry errors
        return;
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <WalletConnectProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" />
      </ErrorBoundary>
    </WalletConnectProvider>
  );
}