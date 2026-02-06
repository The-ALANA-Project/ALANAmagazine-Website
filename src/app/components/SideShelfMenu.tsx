import { X, Instagram, Linkedin, Youtube, Twitter, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

// TikTok icon as custom SVG since lucide doesn't have it
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface SideShelfMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  isWalletConnected: boolean;
  onWalletToggle: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onHomeClick?: () => void;
  onFeaturedCreatorsClick?: () => void;
}

export function SideShelfMenu({
  isOpen,
  onClose,
  currentPage,
  onPageChange,
  isWalletConnected,
  onWalletToggle,
  onShopArchiveClick,
  onTeamClick,
  onGetInvolvedClick,
  onAdvertiseClick,
  onHomeClick,
  onFeaturedCreatorsClick,
}: SideShelfMenuProps) {
  const handlePageChange = (page: string) => {
    if (page === 'home' && onHomeClick) {
      onHomeClick();
      // Don't call onClose here - it's handled in the parent
    } else if (page === 'shop' && onShopArchiveClick) {
      onShopArchiveClick();
      // Don't call onClose here - it's handled in the parent
    } else if (page === 'team' && onTeamClick) {
      onTeamClick();
      // Don't call onClose here - it's handled in the parent
    } else if (page === 'advertise' && onAdvertiseClick) {
      onAdvertiseClick();
    } else if (page === 'creators' && onFeaturedCreatorsClick) {
      onFeaturedCreatorsClick();
    } else {
      onPageChange(page);
      onClose();
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'creators', label: 'Featured Creators' },
    { id: 'team', label: 'Contributors' },
    { id: 'shop', label: 'Shop & Archive' },
    { id: 'advertise', label: 'Advertise With Us' },
  ];

  return (
    <>
      {/* Overlay - Dark backdrop that closes menu when clicked */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        style={{ top: '80px', zIndex: 40 }}
        aria-hidden="true"
      />

      {/* Side Panel - The actual sliding menu */}
      <div
        className={`fixed right-0 h-[calc(100vh-80px)] w-64 max-w-[85vw] bg-background border-l border-foreground shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px', zIndex: 50 }}
        role="dialog"
        aria-label="Navigation Menu"
      >
        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 px-6 py-8 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`w-full text-left py-3 px-4 rounded-none rounded-br-[25px] transition-all duration-200 font-sans text-base ${
                currentPage === item.id
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-foreground hover:bg-foreground hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Divider and Wallet Button directly under menu items */}
          <div className="pt-4">
            <div className="h-px bg-foreground mb-4" />
            <Button
              onClick={() => {
                onWalletToggle();
                onClose();
              }}
              className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
            >
              {isWalletConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
            </Button>
          </div>
        </nav>

        {/* Social Media Icons at Bottom */}
        <div className="px-6 pb-8 pt-6">
          <div className="h-px bg-foreground mb-6" />
          <div className="flex items-center justify-between">
            <a
              href="https://www.tiktok.com/@the_alana_project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/the-alana-project/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCD15TuEOTarAN9JATOQOd1A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/alana_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/the_alana_project/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/the-alana-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}