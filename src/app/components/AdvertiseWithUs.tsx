import { useState } from 'react';
import { Menu, Wallet, X, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

interface AdvertiseWithUsProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
  isWalletConnected?: boolean;
  onWalletToggle?: () => void;
}

export function AdvertiseWithUs({ 
  onClose, 
  onShopArchiveClick, 
  onTeamClick, 
  onGetInvolvedClick, 
  onAdvertiseClick, 
  onShowTerms, 
  onShowPrivacy, 
  onShowPressKit,
  isWalletConnected = false,
  onWalletToggle 
}: AdvertiseWithUsProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const packages = [
    {
      name: 'Exposure Tier',
      price: '$150',
      features: [
        'Quarter page advertisement',
        'Placement in digital & physical edition',
        'Logo & brand visibility',
      ],
      contactNote: 'Purchase and contact us at contact@the-alana-project.xyz to coordinate your advertisement.',
      image: assetUrls.exposureTierImage,
    },
    {
      name: 'Key Tier',
      price: '$250',
      features: [
        'Half page advertisement',
        'Placement in digital & physical edition',
        'Enhanced brand presence',
      ],
      contactNote: 'Send proof of purchase to contact@the-alana-project.xyz to coordinate your advertisement.',
      image: assetUrls.keyTierImage,
    },
    {
      name: 'Impact Tier',
      price: '$400',
      features: [
        'Full page advertisement',
        'Placement in digital & physical edition',
        'Maximum visual impact',
      ],
      contactNote: 'Purchase and contact us at contact@the-alana-project.xyz to coordinate your advertisement.',
      image: assetUrls.impactTierImage,
    },
    {
      name: 'Premium Tier',
      price: '$1,000',
      features: [
        'Exclusive article about you/your product',
        'Placement in digital & physical edition',
        'Written by our editorial team',
      ],
      contactNote: 'Contact us at contact@the-alana-project.xyz with proof of purchase to coordinate an interview and final article.',
      image: assetUrls.premiumTierImage,
    },
  ];

  const bigPackages = [];

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
                onClick={onWalletToggle}
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
        onHomeClick={onClose}
        onShopArchiveClick={onShopArchiveClick}
        onTeamClick={onTeamClick}
        onGetInvolvedClick={onGetInvolvedClick}
        onAdvertiseClick={() => setSheetOpen(false)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={assetUrls.heroImageAdvertise}
              alt="Advertise With Us"
              className="w-full h-full object-cover scale-[1.3]"
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
                Advertise <br className="md:hidden" />With Us
              </h1>
              
              <p className="max-w-2xl text-[18px] md:text-[20px]">
                Reach a highly engaged audience of Web3 pioneers, creators, and decision-makers shaping the future of digital culture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const packagesSection = document.getElementById('packages');
                    if (packagesSection) {
                      const yOffset = -100; // Offset to account for sticky header and some padding
                      const y = packagesSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
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
            <h2 className="mb-4">4 Reasons To Advertise With ALANAmagazine</h2>
          </div>

          {/* Why Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/* Card 1: Market Growth */}
            <div className="border border-foreground rounded-br-[25px] p-6 bg-background hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-4">
                <h4 className="text-xl mb-2 group-hover:text-accent transition-colors">Web3 Growth</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                300% blockspace growth on Ethereum, 91.4M+ crypto wallets opened, and $40B+ in total value locked. Tap into the fastest-growing digital space there is with us.
              </p>
            </div>

            {/* Card 2: Audience */}
            <div className="border border-foreground rounded-br-[25px] p-6 bg-background hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-4">
                <h4 className="text-xl mb-2 group-hover:text-accent transition-colors">Premium Audience</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Creatives, industry leaders in the creative & tech industries, educators, and students. A distinct yet diverse community at the intersection of tech and culture you can reach with us.
              </p>
            </div>

            {/* Card 3: Reach */}
            <div className="border border-foreground rounded-br-[25px] p-6 bg-background hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-4">
                <h4 className="text-xl mb-2 group-hover:text-accent transition-colors">Proven Reach</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ~80k+ collective followers across our social media channels. A highly engaged community actively participating in Web3 culture and innovation, which is curious to explore new things by nature.
              </p>
            </div>

            {/* Card 4: USP */}
            <div className="border border-foreground rounded-br-[25px] p-6 bg-background hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105 group">
              <div className="mb-4">
                <h4 className="text-xl mb-2 group-hover:text-accent transition-colors">Innovative Format</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                First onchain-first phygital magazine merging creativity, culture, and technology. As part of The ALANA Project's broader ecosystem we provide multiangle exposure with longevity at its core.
              </p>
            </div>
          </div>
        </section>

        {/* Advertising Packages */}
        <section className="w-full bg-accent py-16 bg-[rgb(220,194,254)]" id="packages">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-4">Advertising Packages</h2>
              <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
                Choose the package that best fits your brand's, project's or community's needs. All tiers are NFTs and secured by blockchain technology. Please ensure you have a crypto wallet ready for purchase.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <article key={index} className="bg-background flex flex-col border border-foreground rounded-br-[25px] overflow-hidden transition-transform duration-300 hover:scale-105">
                  {/* Tier Image */}
                  {pkg.image && (
                    <div className="w-full aspect-square overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="p-8 flex-grow">
                    <div className="mb-6">
                      <h4 className="text-2xl mb-2">{pkg.name}</h4>
                      <p className="text-accent font-mono text-xl font-bold">{pkg.price}</p>
                    </div>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent mt-1">✓</span>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => window.open('https://app.unlock-protocol.com/checkout?id=929a468b-81fd-4241-8ff0-4496f73b90bd', '_blank')}
                    className="w-full bg-foreground text-accent font-sans px-8 h-10 rounded-none transition-all hover:bg-background hover:text-foreground mt-auto border-t border-foreground text-left"
                  >
                    Get Now
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Brands Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Trusted By</h2>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl mx-auto">
              Join innovative brands, projects and communities who've partnered with ALANAmagazine to reach new audiences in Web3 and beyond.
            </p>
          </div>

          <div className="flex justify-center items-center gap-16 flex-wrap">
            <a 
              href="https://tokenengineeringcommunity.github.io/website/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-103"
            >
              <img src={assetUrls.tokenEngineeringLogo} alt="Token Engineering Academy" className="h-24 w-auto" />
            </a>
            <a 
              href="https://giveth.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-103"
            >
              <img src={assetUrls.givethLogo} alt="Giveth" className="h-24 w-auto" />
            </a>
            <a 
              href="https://www.mutani.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-103"
            >
              <img src={assetUrls.mutaniLogo} alt="Mutani" className="h-24 w-auto" />
            </a>
          </div>
        </section>

        {/* Download Media Kit */}
        <section className="w-full bg-accent py-16">
          <div className="max-w-6xl mx-auto text-center px-8 md:px-16">
            <h3 className="text-xl mb-4">Need More Information?</h3>
            <p className="text-foreground/80 mb-6">
              Fill out a short form to receive a tailored offer plus our Media Kit. No strings attached.
            </p>
            <button 
              className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground cursor-pointer"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeetbudMEFYAvHMbmZqKLGBVXe3EmDSjGB8DNj8fLmQQpfSWw/viewform?usp=publish-editor', '_blank')}
            >
              Request Media Kit
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Legal Links */}
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

            {/* Center: Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/alana_xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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