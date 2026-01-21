import { useState } from 'react';
import { Menu, Wallet, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MagazineIssueGrid } from '@/app/components/MagazineIssueGrid';
import { QuoteSection } from '@/app/components/QuoteSection';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/c0f30c4e2b42998667adf0a99b639637b2aa1961.png';
import earthEditionCover from 'figma:asset/fc56667d1cf1abdc05af55fb9171320a45a9d9b4.png';

interface ShopArchiveProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
}

export function ShopArchive({ onClose, onShopArchiveClick, onTeamClick, onGetInvolvedClick, onAdvertiseClick, onShowTerms, onShowPrivacy, onShowPressKit }: ShopArchiveProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const magazineIssues = [
    {
      id: '1',
      title: 'AIR Edition',
      issueNumber: '42',
      series: 'The Elements 2/4',
      date: '2026',
      coverImage: 'https://images.unsplash.com/photo-1679930348703-f94efd6ad369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2t5JTIwY2xvdWRzfGVufDF8fHx8MTc2ODg2MjA4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'The AIR Edition explores themes of freedom, innovation, and the boundless possibilities of Web3 technology. Featuring exclusive interviews with leading designers and innovators shaping the future of digital culture.',
    },
    {
      id: '2',
      title: 'EARTH Edition',
      issueNumber: 'The Elements 1/4',
      series: 'The Elements 1/4',
      date: '2025',
      coverImage: earthEditionCover,
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
              <img src={alanaLogo} alt="ALANAmagazine" className="h-[33.6px] w-auto" />
            </button>

            {/* Wallet and Menu Icons */}
            <div className="flex items-center gap-4">
              {/* Wallet icon */}
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
        isWalletConnected={isWalletConnected}
        onWalletToggle={handleWalletToggle}
        onHomeClick={onClose}
        onShopArchiveClick={onShopArchiveClick}
        onTeamClick={onTeamClick}
        onGetInvolvedClick={onGetInvolvedClick}
        onAdvertiseClick={onAdvertiseClick}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Shop + Archive"
              className="w-full h-full object-cover scale-[1.3]"
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
              
              <p className="max-w-2xl text-[20px]">
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
                  Browse Editions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section - AIR Edition */}
        <section id="coming-soon" className="px-8 md:px-16 py-12 md:py-16 max-w-6xl mx-auto scroll-mt-24">
          <div className="mb-8">
            <h2 className="mb-4">Coming Soon</h2>
            <p className="text-[20px] text-muted-foreground max-w-2xl">
              ALANAmagazine AIR Edition
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
              <div className="mt-auto pt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/50 text-sm rounded-br-[10px]">Digital Freedom</span>
                  <span className="px-3 py-1 bg-accent/50 text-sm rounded-br-[10px]">Decentralization</span>
                  <span className="px-3 py-1 bg-accent/50 text-sm rounded-br-[10px]">Innovation</span>
                  <span className="px-3 py-1 bg-accent/50 text-sm rounded-br-[10px]">Creator Economy</span>
                </div>
              </div>
            </div>

            {/* Right Column - Status */}
            <div className="space-y-6 flex flex-col">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl mb-2">Production Status</h3>
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

              <div className="bg-accent/10 p-4 rounded-br-[25px] mt-auto bg-[rgba(220,194,254,0.5)]">
                <p className="text-2xl font-light">Estimated Release Q2/2026</p>
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

        {/* Quote Section */}
        <QuoteSection />

        {/* Magazine Issues Section */}
        <section className="px-8 md:px-16 py-12 md:py-16 max-w-6xl mx-auto scroll-mt-24" id="magazine-issues">
          <div className="mb-6">
            <h2 className="mb-2">Magazine Issues</h2>
            <p className="text-muted-foreground">
              Download our sample reads from our past issues don't miss out on our next release.
            </p>
          </div>

          <MagazineIssueGrid issues={magazineIssues} onNavigateToSubscribe={handleNavigateToSubscribe} />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground px-8 md:px-16 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
          <p className="text-[14px] text-muted-foreground font-mono pt-[0px] pr-[0px] pb-[8px] pl-[0px]">
            © 2026 The ALANA Project
          </p>
        </div>
      </footer>
    </div>
  );
}