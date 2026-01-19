import { X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SideShelfMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
  isWalletConnected: boolean;
  onWalletToggle: () => void;
}

export function SideShelfMenu({
  isOpen,
  onClose,
  currentPage,
  onPageChange,
  isWalletConnected,
  onWalletToggle,
}: SideShelfMenuProps) {
  const handlePageChange = (page: string) => {
    onPageChange(page);
    onClose();
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'team', label: 'Team' },
    { id: 'shop', label: 'Shop + Archive' },
    { id: 'get-involved', label: 'Get Involved' },
    { id: 'advertise', label: 'Advertise' },
    { id: 'contact', label: 'Contact' },
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
        className={`fixed right-0 h-[calc(100vh-80px)] w-80 max-w-[85vw] bg-background border-l border-accent/20 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '80px', zIndex: 50 }}
        role="dialog"
        aria-label="Navigation Menu"
      >
        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 px-6 py-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handlePageChange(item.id)}
              className={`w-full text-left py-3 px-4 rounded-none rounded-br-[25px] transition-all duration-200 font-sans text-base ${
                currentPage === item.id
                  ? 'bg-accent text-accent-foreground font-medium'
                  : 'text-foreground hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Divider and Wallet Button directly under menu items */}
          <div className="pt-4">
            <div className="h-px bg-accent/20 mb-4" />
            <Button
              onClick={() => {
                onWalletToggle();
                onClose();
              }}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
            >
              {isWalletConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}