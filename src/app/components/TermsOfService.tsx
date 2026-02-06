import { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

interface TermsOfServiceProps {
  onClose: () => void;
  onShowPrivacy: () => void;
}

export function TermsOfService({ onClose, onShowPrivacy }: TermsOfServiceProps) {
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
    // Close terms and return to home
    onClose();
  };

  return (
    <div className="min-h-screen bg-background" data-page="terms-of-service">
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
        currentPage="terms"
        onPageChange={handlePageChange}
        isWalletConnected={isWalletConnected}
        onWalletToggle={handleWalletToggle}
      />

      {/* Content */}
      <main className="max-w-4xl mx-auto px-8 md:px-16 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last Updated – January 20th, 2026
          </p>
        </div>

        {/* Body */}
        <div className="space-y-8">
          <div>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              These Terms of Service ("Terms", "ToS") govern your access to and use of The ALANA Project's Services and online spaces, including our Website (<a href="https://the-alana-project.xyz" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://the-alana-project.xyz</a>), the ALANAmagazine™, our Discord server, and our social media accounts (collectively, "Services"). By accessing or using any part of the Services, you agree to be bound by these Terms and those of the respective service providers. If you do not agree to all the terms and conditions of this agreement, you may not access the Services or use any Services.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">1. Acceptance of Terms</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              By using the Services, you confirm that you are at least 18 years of age or have been given parental or guardian consent to use the Services. You agree to comply with these Terms and acknowledge that The ALANA Project reserves the right to refuse service to anyone for any reason at any time.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">2. Changes to Terms</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              At its sole discretion, The ALANA Project reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before any new terms take effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">3. Privacy</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              Your privacy is important to us, our Privacy Policy details how your information is used when you use our Services. By using the Services, you agree that we can process your information in the ways set out in the Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">4. Your Accounts and Wallets</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              To access certain features of the Services, you may be required to create an account or connect a Web3 wallet. You are responsible for safeguarding your account details and the private keys or seed phrases associated with your Web3 wallet. It is crucial to understand that losing access to your Web3 wallet may result in the irreversible loss of access to certain Services or assets within The ALANA Project. By connecting a Web3 wallet, you represent and warrant that you are the lawful owner of the wallet and any funds or assets contained within it. You agree to notify us immediately of any unauthorized use of your account or Web3 wallet or any other security breach. The ALANA Project is not liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions, in connection with your account or Web3 wallet. When interacting with the Services through a Web3 wallet, you may be subject to the terms and conditions governing the use of that wallet and any associated blockchain networks. You are responsible for all transactions and interactions initiated through your Web3 wallet and for ensuring that all transactions conform to the laws and regulations of your jurisdiction, including but not limited to those related to financial transactions and the use of digital assets. The ALANA Project does not have access to or store your private keys or seed phrases. You are solely responsible for managing and maintaining the security of your Web3 wallet information. We strongly recommend using reputable wallet providers and taking measures such as enabling two-factor authentication (2FA), using secure and unique passwords, and regularly backing up your wallet information.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">5. Content and Conduct</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-2">5.1</h4>
                <p className="leading-relaxed text-[16px] md:text-[18px]">
                  Content posted on The ALANA Project's Services is the sole responsibility of the person who originated such content. The views and opinions expressed on The ALANA Project's Services are those of the person who expressed it, and do not necessarily reflect the views or positions of The ALANA Project as a whole. You certify that you own all intellectual property rights in your content or have the right to use and allow the use of this content on the Services.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-2">5.2</h4>
                <p className="leading-relaxed text-[16px] md:text-[18px]">
                  You agree not to display, upload, post, transmit, or share content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70 mb-2">5.3</h4>
                <p className="leading-relaxed text-[16px] md:text-[18px]">
                  The ALANA Project reserves the right to remove any content or suspend users found to be in violation of these Terms.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">6. Intellectual Property</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              The Services and original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of The ALANA Project and its licensors.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">7. Third-Party Links and Content</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              The Services may contain links to third-party websites or Services that are not owned or controlled by The ALANA Project. We assume no responsibility for any third-party websites or Services' content, privacy policies, or practices.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">8. Termination</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, a breach of the Terms.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">9. Disclaimer and Limitation of Liability</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              Your use of the Services is at your sole risk. The Services are provided on an "AS IS" and "AS AVAILABLE" basis. The ALANA Project and its suppliers will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">10. Governing Law</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              These Terms shall be governed by and construed in accordance with the laws of Peru, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">11. Changes to Services</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              The ALANA Project reserves the right to withdraw or amend our Services and any service or material we provide via the Services, in our sole discretion without notice.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">12. Taxation</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              For tax purposes, income generated by deliverables, or any element produced collaboratively will be subject to taxation in the country of residence of each user. It is the responsibility of each user or member of The ALANA Project to comply with the tax regulations of their country of origin. The ALANA Project is not liable for withholding taxes, paying them, or filing tax returns on behalf of users. For tax purposes, any profit generated in collaboration will be considered as income of each user obtained as an independent collaborator without any employment relationship with The ALANA Project.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">13. Labor regulation</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              There is no employment relationship between The ALANA Project and its collaborators. There is no mandatory schedule, supervision, or oversight of the projects. The collaborations carried out are performed on the basis of individual freedom. The designated positions and responsibilities are due to the free coordination of the members, having the qualification of freelancers for internal purposes, without any employment liability of The ALANA Project towards them.
            </p>
          </div>

          <div>
            <h3 className="text-[30px] font-mono mb-4">14. Contact Information</h3>
            <p className="leading-relaxed text-[16px] md:text-[18px]">
              For any questions about these Terms, please contact us at:{' '}
              <a 
                href="mailto:contact@the-alana-project.xyz" 
                className="text-[rgb(38,36,36)] hover:underline font-mono"
              >
                contact@the-alana-project.xyz
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <button 
                onClick={() => window.location.reload()}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={onShowPrivacy}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
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