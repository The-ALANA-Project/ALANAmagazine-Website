// Initialize AppKit BEFORE any other imports
import '@/config/appkit-init';

import { WalletConnectProvider } from '@/app/components/WalletConnectProvider';
import { AppContent } from '@/app/components/AppContent';
import { ErrorBoundary } from '@/app/components/ErrorBoundary';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  return (
    <WalletConnectProvider>
      <ErrorBoundary>
        <AppContent />
        <Toaster position="bottom-right" />
      </ErrorBoundary>
    </WalletConnectProvider>
  );
}