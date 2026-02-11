import { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

interface PrivacyPolicyProps {
  onClose: () => void;
  onShowTerms: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowPressKit?: () => void;
}

export function PrivacyPolicy({ 
  onClose, 
  onShowTerms,
  onShopArchiveClick,
  onTeamClick,
  onAdvertiseClick,
  onShowPressKit
}: PrivacyPolicyProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const handlePageChange = (page: string) => {
    // Close privacy policy and return to home
    onClose();
  };

  return (
    <div className="min-h-screen bg-background" data-page="privacy-policy">
      {/* Header */}
      <header className="sticky top-0 z-[60] w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo - clickable to go back */}
            <button 
              onClick={() => {
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Return to home"
            >
              <img src={assetUrls.alanaLogo} alt="ALANAmagazine" className="h-[33.6px] w-auto" />
            </button>

            {/* Wallet and Menu Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleWalletToggle}
                className={`transition-colors ${
                  isWalletConnected
                    ? 'text-accent hover:text-accent/80'
                    : 'text-foreground hover:text-accent'
                }`}
                aria-label={isWalletConnected ? "Disconnect wallet" : "Connect wallet"}
              >
                <Wallet className="w-6 h-6" />
              </button>
              
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
        </div>
      </header>

      {/* Side Shelf Menu */}
      <SideShelfMenu
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        currentPage="privacy"
        onPageChange={handlePageChange}
        onHomeClick={() => {
          setSheetOpen(false);
          onClose();
        }}
        onShopArchiveClick={() => {
          setSheetOpen(false);
          onShopArchiveClick?.();
        }}
        onTeamClick={() => {
          setSheetOpen(false);
          onTeamClick?.();
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          onAdvertiseClick?.();
        }}
        onFeaturedCreatorsClick={() => {
          setSheetOpen(false);
        }}
        isWalletConnected={isWalletConnected}
        onWalletToggle={handleWalletToggle}
      />

      {/* Main Content */}
      <main className="px-8 md:px-16 py-12 md:py-16 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Privacy Policy</h1>
        </div>

        {/* Body */}
        <div className="space-y-8">
          <div>
            <h3 className="text-[30px] font-mono mb-4">1. Introduction</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              In this Privacy Policy, we will collectively refer to The ALANA Project´s Services as it stated in the Terms of Service. This Privacy Policy, together with the respective "Terms" and any other contractual terms which apply between you and us, set out how Personal Data (defined below) will be used. In this Privacy Policy, "Personal Data" means data, whether true or not, about an individual who can be identified either from that data or from that data when combined with other information to which an entity has access or is likely to have access.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">2. Collection of Personal Data</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              When you use our Services, we do not collect any kind of information from and about you, your devices, and your interaction with the Services. Our Services are not associated with or require mandatory access to your personal data. Furthermore, or Services are built in the use of tools that protect the anonymity of their users. It is part of our philosophy, the strict protection of personal data, The ALANA Project is not built on the use of any kind of private data. Our business is not built on the use, benefit, or transaction of any kind of personal data. Furthermore, our business does not collect personal data, besides the Services functionality requirements itself like payments or deliveries, among others.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-4">2.1 Email Management</h4>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              As stated, we do not use or store private information for the purposes of our Services or any other matter. In the case of emails, this information is stored only for coordination purposes of ongoing projects. This information is not stored or used for purposes other than the scheduling of activities or coordination of projects.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-4">2.2 Third-party Information Requirements</h4>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              When purchasing a product or service provided by The ALANA Project, personal information could be collected by third party providers. For example, for processing payments by using traditional payment methods such as credit cards and for distributing the product or service itself like delivery companies. In those cases, the information would be handled by trusted third parties in compliance with their respective privacy policies and security measures.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-4">2.3 Third-party Payment Information Requests</h4>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              The ALANA Project relies on "Unlock Protocol" (for ALANAmagazine™) which is associated with payment processors (Stripe) to execute payments that happens via traditional methods (e.g. Apple Pay, Google pay or credit card). As the above-mentioned data is entirely handled by third parties, The ALANA Project does not have access to connect wallets addresses with personal information.
            </p>
          </div>

          <div>
            <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-4">2.4 Connect Your Wallet</h4>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              ALANAmagazine™ and other Services are structured to request the connection of your wallet. This connection is through a Web3 system which is based on blockchain technology to protect personal data. By accepting the Terms & Conditions and the Privacy Policy of ALANAmagazine™ or any other service of The ALANA Project your personal data is protected by the aforementioned terms.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">3. Language</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              To the extent permitted by law, where there is a non-English version of this Privacy Policy, then in the event of any inconsistency between the English version and the translation of this Privacy Policy into any other language, the English version shall prevail.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">4. Disclaimer</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              We shall not be liable for any voluntary disclosure of Personal Data by you to other users, devices, or third-party tools or service providers or devices, in connection with the use of the Services.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">5. Contact Us</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              Should you require further information about this Policy, please do not hesitate to contact at:{' '}
              <a 
                href="mailto:contact@the-alana-project.xyz" 
                className="text-[rgb(38,36,36)] hover:underline font-mono"
              >
                contact@the-alana-project.xyz
              </a>
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-8 mt-8">
            <Button
              onClick={() => {
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-accent hover:bg-foreground text-accent-foreground hover:text-accent font-sans px-8 rounded-none rounded-br-[25px] transition-colors"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <button 
                onClick={onShowTerms}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => window.location.reload()}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={onShowPressKit}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Press Kit
              </button>
            </div>
            <p className="text-[14px] text-muted-foreground font-mono pt-[0px] pr-[0px] pb-[8px] pl-[0px]">
              © 2026 The ALANA Project
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}