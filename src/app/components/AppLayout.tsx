import { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router';
import { useAccount, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { Menu, X } from 'lucide-react';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { GoogleAnalytics } from '@/app/components/GoogleAnalytics';
import { SEOHead } from '@/app/components/SEOHead';
import { CookieConsent } from '@/app/components/CookieConsent';
import { toast } from 'sonner';
import { assetUrls } from '@/assets/asset-urls';

export function AppLayout() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // WalletConnect hooks
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  // Get AppKit modal (with safe fallback)
  let appKitModal: any = null;
  try {
    appKitModal = useAppKit();
  } catch (error) {
    // Silent fail - AppKit not ready yet
  }

  // Open wallet connection modal
  const handleWalletConnect = async () => {
    try {
      if (appKitModal) {
        await appKitModal.open();
      }
    } catch (error: any) {
      // Only show error if it's not a proposal expiry
      if (!error?.message?.includes('Proposal expired') && import.meta.env.DEV) {
        console.error('Wallet connection error:', error);
      }
    }
  };

  // Disconnect wallet
  const handleWalletDisconnect = async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Disconnect error:', error);
      }
    }
  };

  // Toggle wallet connection
  const handleWalletToggle = async () => {
    if (isConnected) {
      await handleWalletDisconnect();
    } else {
      await handleWalletConnect();
    }
  };

  // Track unique wallet connections (optional)
  useEffect(() => {
    if (isConnected && address) {
      const storedWallets = localStorage.getItem('alana-unique-wallets');
      let walletList: string[] = storedWallets ? JSON.parse(storedWallets) : [];
      
      if (!walletList.includes(address)) {
        walletList.push(address);
        localStorage.setItem('alana-unique-wallets', JSON.stringify(walletList));
        // Defer toast to avoid update cycle conflicts with w3m components
        setTimeout(() => {
          toast.success('Welcome! Your wallet is connected.');
        }, 100);
      }
    }
  }, [isConnected, address]);

  // Listen for Privacy Policy event from cookie banner
  useEffect(() => {
    const handleShowPrivacyEvent = () => {
      navigate('/privacy-policy');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('showPrivacyPolicy', handleShowPrivacyEvent);
    return () => window.removeEventListener('showPrivacyPolicy', handleShowPrivacyEvent);
  }, [navigate]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Get current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname.slice(1); // Remove leading slash
    return path || 'home';
  };

  const handlePageChange = (page: string) => {
    setSheetOpen(false);
    if (page === 'home') {
      navigate('/');
    } else {
      // Scroll to section if on home page
      const element = document.getElementById(page);
      if (element && location.pathname === '/') {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <SEOHead />
      
      {/* Google Analytics */}
      <GoogleAnalytics />
      
      {/* Header */}
      <header className="sticky top-0 z-[60] w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => {
                navigate('/');
                setSheetOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Return to home"
            >
              <img src={assetUrls.alanaLogo} alt="ALANA Magazine logo - Web3 digital culture magazine" className="h-[33.6px] w-auto transition-transform hover:scale-95 active:scale-90" />
            </button>

            {/* Menu Icon */}
            <button
              onClick={() => setSheetOpen(!sheetOpen)}
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {sheetOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Side Shelf Menu */}
      <SideShelfMenu
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        currentPage={getCurrentPage()}
        onPageChange={handlePageChange}
        onHomeClick={() => {
          setSheetOpen(false);
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onShopArchiveClick={() => {
          setSheetOpen(false);
          navigate('/shop-archive');
        }}
        onTeamClick={() => {
          setSheetOpen(false);
          navigate('/contributors');
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          navigate('/advertise');
        }}
        onFeaturedCreatorsClick={() => {
          setSheetOpen(false);
          navigate('/featured-creators');
        }}
      />

      {/* Main Content - render the current page */}
      <main role="main">
        <Outlet context={{ isWalletConnected: isConnected, onWalletToggle: handleWalletToggle }} />
      </main>

      {/* Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}