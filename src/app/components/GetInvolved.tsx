import { useState } from 'react';
import { Menu, Wallet, X, PenTool, Users, Heart, Megaphone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/5d7ab7c1b8fac42ab11fd12886703a1b94d4f87f.png';

interface GetInvolvedProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
}

export function GetInvolved({ onClose, onShopArchiveClick, onTeamClick, onGetInvolvedClick, onAdvertiseClick, onShowTerms, onShowPrivacy, onShowPressKit }: GetInvolvedProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const opportunities = [
    {
      icon: PenTool,
      title: 'Contribute Content',
      description: 'Share your expertise and stories with our community. We welcome articles, essays, and creative works exploring Web3, culture, and innovation.',
      action: 'Submit Your Work',
      link: 'mailto:contribute@alanamagazine.com',
    },
    {
      icon: Users,
      title: 'Join Our Community',
      description: 'Connect with fellow Web3 enthusiasts, creators, and thought leaders. Participate in discussions, events, and collaborative projects.',
      action: 'Join Telegram',
      link: 'https://t.me/alanamagazine',
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Help us continue creating quality content and building the future of decentralized media. Every contribution makes a difference.',
      action: 'Become a Supporter',
      link: 'mailto:support@alanamagazine.com',
    },
    {
      icon: Megaphone,
      title: 'Spread the Word',
      description: 'Help us grow by sharing ALANAmagazine with your network. Follow us on social media and amplify the voices shaping Web3 culture.',
      action: 'Share & Follow',
      link: '#',
    },
  ];

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
        currentPage="get-involved"
        onPageChange={() => {}}
        isWalletConnected={isWalletConnected}
        onWalletToggle={handleWalletToggle}
        onHomeClick={onClose}
        onShopArchiveClick={onShopArchiveClick}
        onTeamClick={onTeamClick}
        onGetInvolvedClick={onGetInvolvedClick}
        onAdvertiseClick={onAdvertiseClick}
        onShowTerms={onShowTerms}
        onShowPrivacy={onShowPrivacy}
        onShowPressKit={onShowPressKit}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Get Involved"
              className="w-full h-full object-cover scale-[1.3]"
            />
            {/* White overlay */}
            <div className="absolute inset-0 bg-background/30" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[77vh] flex items-center px-8 md:px-16 max-w-6xl mx-auto">
            <div className="max-w-3xl text-foreground">
              <h1 className="leading-tight">
                Get Involved
              </h1>
              
              <p className="max-w-2xl text-[20px]">
                Join us in building the future of Web3 media. Whether you're a creator, supporter, or enthusiast, there's a place for you in our community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const opportunitiesSection = document.getElementById('opportunities');
                    if (opportunitiesSection) {
                      opportunitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                >
                  Explore Opportunities
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto" id="opportunities">
          <div className="mb-12">
            <h2 className="mb-4">Ways to Contribute</h2>
            <p className="text-[20px] text-muted-foreground max-w-3xl">
              Choose the path that resonates with you. Every contribution helps us grow and strengthen the Web3 community.
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <article key={index} className="article-card p-8 group hover:border-accent transition-colors">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl mb-3">{opportunity.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {opportunity.description}
                    </p>
                  </div>
                  <a
                    href={opportunity.link}
                    target={opportunity.link.startsWith('http') ? '_blank' : undefined}
                    rel={opportunity.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-block"
                  >
                    <Button className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 rounded-none rounded-br-[25px] transition-colors">
                      {opportunity.action}
                    </Button>
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        {/* Community Values Section */}
        <section className="w-full bg-accent py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="mb-8 text-center">Our Community Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl mb-3">Innovation</h3>
                <p className="text-foreground/80">
                  We embrace new ideas and push the boundaries of what's possible in Web3.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-3">Inclusivity</h3>
                <p className="text-foreground/80">
                  We welcome diverse perspectives and create space for all voices to be heard.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl mb-3">Quality</h3>
                <p className="text-foreground/80">
                  We're committed to excellence in everything we create and share.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto text-center">
          <h2 className="mb-4">Ready to Make an Impact?</h2>
          <p className="text-[20px] text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a story to tell, skills to share, or simply want to be part of something meaningful, we'd love to hear from you.
          </p>
          <a
            href="mailto:hello@alanamagazine.com"
            className="inline-block bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors flex items-center justify-center"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground px-8 md:px-16 py-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
            <button 
              onClick={onShowTerms}
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
      </footer>
    </div>
  );
}