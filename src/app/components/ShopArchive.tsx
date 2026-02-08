import { useState } from 'react';
import { Menu, Wallet, X, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MagazineIssueGrid } from '@/app/components/MagazineIssueGrid';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { HelpSection } from '@/app/components/HelpSection';
import { useAccount } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { assetUrls } from '@/assets/asset-urls';

interface ShopArchiveProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onFeaturedCreatorsClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
}

export function ShopArchive({ onClose, onShopArchiveClick, onTeamClick, onGetInvolvedClick, onAdvertiseClick, onFeaturedCreatorsClick, onShowTerms, onShowPrivacy, onShowPressKit }: ShopArchiveProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const { address, isConnected } = useAccount();
  
  // Get AppKit modal (with safe fallback)
  let appKitModal: any = null;
  try {
    appKitModal = useAppKit();
  } catch (error) {
    // Silent fail - AppKit not ready yet
  }

  const handleWalletToggle = async () => {
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

  const magazineIssues = [
    {
      id: '1',
      title: 'AIR Edition',
      issueNumber: '42',
      series: 'The Elements 2/4',
      date: '2026',
      coverImage: assetUrls.airEditionCover,
      description: 'The AIR Edition explores themes of freedom, innovation, and the boundless possibilities of Web3 technology. Featuring exclusive interviews with leading designers and innovators shaping the future of digital culture.',
    },
    {
      id: '2',
      title: 'EARTH Edition',
      issueNumber: 'The Elements 1/4',
      series: 'The Elements 1/4',
      date: '2025',
      coverImage: assetUrls.earthEditionCover,
      description: 'The EARTH Edition was our inaugural issue and therefore holds a special place in our hearts. We joined forces with future-forward thinking tech start-ups and showcased a diverse array of creators.',
    },
  ];

  const handleNavigateToSubscribe = () => {
    onClose();
    setTimeout(() => {
      const subscribeSection = document.getElementById('subscribe');
      if (subscribeSection) {
        subscribeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleNavigateToSampleReads = () => {
    onClose();
    setTimeout(() => {
      const sampleReadsSection = document.getElementById('sample-reads');
      if (sampleReadsSection) {
        sampleReadsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-[60] w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button
              onClick={onClose}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Return to home"
            >
              <img src={assetUrls.alanaLogo} alt="ALANAmagazine" className="h-[33.6px] w-auto" />
            </button>

            {/* Wallet and Menu Icons */}
            <div className="flex items-center gap-4">
              {/* Wallet icon */}
              <button
                onClick={handleWalletToggle}
                className={`transition-colors ${
                  isConnected
                    ? 'text-accent hover:text-accent/80'
                    : 'text-foreground hover:text-accent'
                }`}
                aria-label={isConnected ? "Disconnect wallet" : "Connect wallet"}
              >
                <Wallet className="w-6 h-6" />
              </button>
              
              {/* Burger menu button */}
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
        currentPage="shop"
        onPageChange={() => {}}
        onHomeClick={onClose}
        onShopArchiveClick={onShopArchiveClick}
        onTeamClick={onTeamClick}
        onGetInvolvedClick={onGetInvolvedClick}
        onAdvertiseClick={onAdvertiseClick}
        onFeaturedCreatorsClick={onFeaturedCreatorsClick}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={assetUrls.heroImageShop}
              alt="Shop + Archive"
              className="w-full h-full object-cover scale-[1.3] object-[65%_center] md:object-center"
              loading="eager"
              fetchpriority="high"
            />
            {/* White overlay */}
            <div className="absolute inset-0 bg-background/30" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[77vh] flex items-center px-8 md:px-16 max-w-6xl mx-auto">
            <div className="max-w-3xl text-foreground">
              <h1 className="leading-tight">
                Shop & Archive
              </h1>
              
              <p className="max-w-2xl text-[18px] md:text-[20px]">
                Discover our collection of former and upcoming ALANAmagazine™ Editions. Download sample reads and subscribe to our newsletter so you don't miss the new release.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const magazineSection = document.getElementById('magazine-issues');
                    if (magazineSection) {
                      magazineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors border border-transparent"
                >
                  Browse Issues
                </Button>
                <Button 
                  onClick={onFeaturedCreatorsClick}
                  className="bg-background/20 backdrop-blur-md border border-foreground hover:bg-background text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                >
                  Browse NFT Collection
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section - AIR Edition */}
        <section id="coming-soon" className="px-8 md:px-16 py-12 md:py-16 max-w-6xl mx-auto scroll-mt-24">
          <div className="mb-8">
            <h2 className="mb-4">Coming Soon</h2>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-2xl">
              ALANAmagazine AIR Edition - Q2/2026
            </p>
          </div>

          {/* Status & Making Of Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Left Column - Making Of */}
            <div className="space-y-4 flex flex-col">
              <p className="text-muted-foreground leading-relaxed">
                The AIR Edition represents a bold exploration of freedom, innovation, and the ethereal nature of Web3. 
                We're collaborating with visionary creators, developers, and thought leaders who are pushing the boundaries 
                of what's possible in digital culture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This edition will feature exclusive interviews with pioneers shaping decentralized technologies, 
                stunning visual essays exploring the concept of digital freedom, and deep dives into projects 
                that embody the limitless potential of blockchain innovation.
              </p>
            </div>

            {/* Right Column - Status */}
            <div className="space-y-6 flex flex-col">
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl mb-2">Production Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Editorial Curation - Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <span className="text-muted-foreground">Creator Submission - Completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[rgba(220,194,254,0.5)]"></div>
                    <span className="text-muted-foreground">Editing Articles - In Progress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[rgba(220,194,254,0.5)]"></div>
                    <span className="text-muted-foreground">Design & Layout - In Progress</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-muted"></div>
                    <span className="text-muted-foreground">Final Production - Upcoming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-start">
            <Button 
              onClick={handleNavigateToSubscribe}
              className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
            >
              Get Notified
            </Button>
          </div>
        </section>

        {/* AIR Edition Pre-Sale Success Section */}
        <section className="bg-accent py-12 md:py-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <h2 className="mb-4 text-[rgb(38,36,36)]">
              AIR Edition Pre-Sale Concluded
            </h2>
            <p className="text-[#262424] text-[18px] md:text-[20px] leading-relaxed mb-6 max-w-3xl">
              We're thrilled to announce that our AIR Edition (the second edition of ALANAmagazine) successfully pre-sold <span className="font-bold text-[rgb(38,36,36)]">148 magazines</span> through our campaign with the Artizen Fund. Thank you to everyone who supported us!
            </p>
            <a 
              href="https://artizen.fund/index/p/alanamagazine---air-edition"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-foreground text-[rgb(220,194,254)] font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:bg-background hover:text-foreground border border-foreground"
            >
              View Campaign Details
            </a>
          </div>
        </section>

        {/* Magazine Issues Section */}
        <section className="px-8 md:px-16 pt-6 md:pt-8 pb-12 md:pb-16 max-w-6xl mx-auto scroll-mt-24" id="magazine-issues">
          <div className="mb-6">
            <h2 className="mb-2">Magazine Issues</h2>
            <p className="text-muted-foreground">
              Download our sample reads from our past issues don't miss out on our next release.
            </p>
          </div>

          <MagazineIssueGrid issues={magazineIssues} onNavigateToSubscribe={handleNavigateToSubscribe} onNavigateToSampleReads={handleNavigateToSampleReads} />
        </section>

        {/* Help Section */}
        <HelpSection onFeaturedCreatorsClick={() => onFeaturedCreatorsClick?.()} />
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Legal Links */}
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={onShowTerms}>
                Terms of Service
              </a>
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={onShowPrivacy}>
                Privacy Policy
              </a>
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={onShowPressKit}>
                Press Kit
              </a>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/alana_xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/the-alana-project" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://t.me/+Z0cAQeeZvfdmNjQy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Join our Telegram community"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.18.943.11.78.89z"/>
                </svg>
              </a>
            </div>

            {/* Right: Copyright */}
            <p className="text-[14px] text-muted-foreground font-mono pt-[0px] pr-[0px] pb-[8px] pl-[0px]">
              © 2026 The ALANA Project
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}