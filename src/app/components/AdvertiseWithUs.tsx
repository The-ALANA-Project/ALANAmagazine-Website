import { useState } from 'react';
import { Menu, Wallet, X, Users, Target, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/5d7ab7c1b8fac42ab11fd12886703a1b94d4f87f.png';

interface AdvertiseWithUsProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
}

export function AdvertiseWithUs({ onClose, onShopArchiveClick, onTeamClick, onGetInvolvedClick, onAdvertiseClick, onShowTerms, onShowPrivacy, onShowPressKit }: AdvertiseWithUsProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const audienceStats = [
    {
      icon: Users,
      stat: '50K+',
      label: 'Monthly Readers',
      description: 'Engaged Web3 enthusiasts, creators, and innovators',
    },
    {
      icon: Target,
      stat: '85%',
      label: 'Tech-Savvy Audience',
      description: 'Early adopters and decision-makers in blockchain',
    },
    {
      icon: TrendingUp,
      stat: '120%',
      label: 'YoY Growth',
      description: 'Rapidly expanding community and reach',
    },
    {
      icon: Globe,
      stat: 'Global',
      label: 'International Reach',
      description: 'Readers across 40+ countries worldwide',
    },
  ];

  const packages = [
    {
      name: 'Digital Presence',
      price: 'Starting at $2,500',
      features: [
        'Banner ads in digital magazine',
        'Newsletter feature (30K+ subscribers)',
        'Social media promotion',
        'Analytics and performance reporting',
      ],
    },
    {
      name: 'Print Partnership',
      price: 'Starting at $5,000',
      features: [
        'Full-page ad in print edition',
        'Digital magazine placement',
        'Featured brand story opportunity',
        'Limited edition collector\'s copy',
      ],
    },
    {
      name: 'Integrated Campaign',
      price: 'Custom Pricing',
      features: [
        'Multi-platform brand integration',
        'Sponsored content and editorials',
        'Event partnerships and activations',
        'Custom creative collaboration',
      ],
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
        currentPage="advertise"
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
              alt="Advertise With Us"
              className="w-full h-full object-cover scale-[1.3]"
            />
            {/* White overlay */}
            <div className="absolute inset-0 bg-background/30" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[77vh] flex items-center px-8 md:px-16 max-w-6xl mx-auto">
            <div className="max-w-3xl text-foreground">
              <h1 className="leading-tight">
                Advertise With Us
              </h1>
              
              <p className="max-w-2xl text-[20px]">
                Reach a highly engaged audience of Web3 pioneers, creators, and decision-makers shaping the future of digital culture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const packagesSection = document.getElementById('packages');
                    if (packagesSection) {
                      packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                >
                  View Packages
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Advertise Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="mb-4">Why Advertise With ALANAmagazine?</h2>
            <p className="text-[20px] text-muted-foreground max-w-3xl">
              Connect with an exclusive community of innovators, early adopters, and culture shapers who are defining the Web3 landscape.
            </p>
          </div>

          {/* Audience Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <article key={index} className="article-card p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl font-light text-accent mb-2">{stat.stat}</div>
                  <h3 className="text-lg mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Advertising Packages */}
        <section className="w-full bg-accent/10 py-16" id="packages">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-4">Advertising Packages</h2>
              <p className="text-[20px] text-muted-foreground max-w-3xl">
                Flexible options designed to amplify your brand and connect with our community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <article key={index} className="article-card p-8 bg-background">
                  <div className="mb-6">
                    <h3 className="text-2xl mb-2">{pkg.name}</h3>
                    <p className="text-accent font-mono text-lg">{pkg.price}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-accent mt-1">✓</span>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 rounded-none rounded-br-[25px] transition-colors">
                    Learn More
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Brands Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted by Leading Brands</h2>
            <p className="text-[20px] text-muted-foreground max-w-3xl mx-auto">
              Join innovative companies who've partnered with ALANAmagazine to reach the Web3 community.
            </p>
          </div>

          <div className="bg-accent/10 p-12 rounded-br-[25px] text-center">
            <p className="text-muted-foreground mb-4">Partnership showcase coming soon</p>
            <p className="text-sm text-muted-foreground font-mono">
              Be among the first brands featured in our network
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-accent py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center px-8">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-[20px] text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a customized advertising solution that aligns with your brand and goals.
            </p>
            <a
              href="mailto:advertise@alanamagazine.com"
              className="inline-block bg-foreground hover:bg-foreground/90 text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors flex items-center justify-center"
            >
              Contact Our Team
            </a>
          </div>
        </section>

        {/* Download Media Kit */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto text-center">
          <h3 className="text-xl mb-4">Need More Information?</h3>
          <p className="text-muted-foreground mb-6">
            Download our comprehensive media kit for detailed audience insights, rates, and success stories.
          </p>
          <Button 
            className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 rounded-none rounded-br-[25px] transition-colors"
            onClick={() => window.location.href = 'mailto:advertise@alanamagazine.com?subject=Media Kit Request'}
          >
            Request Media Kit
          </Button>
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