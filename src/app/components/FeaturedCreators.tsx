import { useState, useEffect } from 'react';
import { Menu, X, Wallet } from 'lucide-react';
import { Button } from './ui/button';
import { SideShelfMenu } from './SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

interface FeaturedCreatorsProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onAdvertiseClick?: () => void;
  onFeaturedCreatorsClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
  isWalletConnected?: boolean;
  onWalletToggle?: () => void;
}

export function FeaturedCreators({
  onClose,
  onShopArchiveClick,
  onTeamClick,
  onAdvertiseClick,
  onFeaturedCreatorsClick,
  onShowTerms,
  onShowPrivacy,
  onShowPressKit,
  isWalletConnected = false,
  onWalletToggle,
}: FeaturedCreatorsProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [shuffledCreators, setShuffledCreators] = useState<typeof featuredCreators>([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Password for hidden profiles
  const UNLOCK_PASSWORD = 'alana2026';

  // Hero slideshow images
  const heroImages = [
    {
      src: 'https://images.unsplash.com/photo-1590968802291-f1e1f86cde34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwc3RyZWV0JTIwYXJ0JTIwZ3JhZmZpdGl8ZW58MXx8fHwxNzcwMDQyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Featured Artist Work 1',
    },
    {
      src: 'https://images.unsplash.com/photo-1713188090500-a4fb0d2cf309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwZGlnaXRhbCUyMGFydHxlbnwxfHx8fDE3NzAwMDEyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Featured Artist Work 2',
    },
    {
      src: 'https://images.unsplash.com/photo-1582985043002-751d768ded08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFydCUyMG11cmFsJTIwd2FsbHxlbnwxfHx8fDE3NzAwODAzMzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Featured Artist Work 3',
    },
    {
      src: 'https://images.unsplash.com/photo-1590968802291-f1e1f86cde34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwc3RyZWV0JTIwYXJ0JTIwZ3JhZmZpdGl8ZW58MXx8fHwxNzcwMDQyMjAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'Featured Artist Work 4',
    },
  ];

  // Auto-advance hero slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Featured creators for the AIR Edition
  const featuredCreators = [
    {
      id: '1',
      name: 'JavoG',
      role: 'AI Fashion Creator',
      bio: 'Exploring novel forms of dynamic streetwear fashion to discover how individual ego can dissolve and become a community\'s strength.',
      image: assetUrls.javogImage,
      portfolio: 'https://www.linkedin.com/in/javier-guzm%C3%A1n-74183a248/en/',
      featured: 'MinimAIFashion - MAIF. Gen AI Fashion.',
      buttonText: 'Contact',
      artworks: [
        { src: assetUrls.javogArtwork1, alt: 'JavoG Artwork 1', title: 'Urban Flow #1', price: '50 USDC', available: true, edition: '1/10', description: 'A dynamic exploration of street fashion through AI-generated designs. This piece captures the essence of urban movement and contemporary style.' },
        { src: assetUrls.javogArtwork2, alt: 'JavoG Artwork 2', title: 'Street Vision #2', price: '50 USDC', available: true, edition: '1/10', description: 'Bold patterns merge with minimalist aesthetics in this striking vision of future streetwear. A celebration of individual expression in digital space.' },
        { src: assetUrls.javogArtwork3, alt: 'JavoG Artwork 3', title: 'AI Fashion #3', price: '50 USDC', available: false, edition: 'Sold Out', description: 'Pushing boundaries between technology and textile design. This sold-out piece represents the intersection of artificial intelligence and human creativity.' },
      ],
    },
    {
      id: '2',
      name: 'Sogand Nobahar',
      role: 'Photographer',
      bio: 'Documentary photographer capturing the evolving landscape of digital culture and emerging technologies.',
      image: assetUrls.sogandNobaharImage,
      portfolio: 'https://medium.com/@sogandnobahar',
      featured: 'AIR Edition Photography Series',
      buttonText: 'Contact',
      artworks: [
        { src: 'https://images.unsplash.com/photo-1632679760635-55966a6e3d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDAxNTkxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Photographer Artwork 1', title: 'Portrait Study #1', price: '75 USDC', available: true, edition: '1/5', description: 'An intimate portrait capturing the raw emotion and authenticity of human connection. Shot with natural lighting to emphasize genuine expression.' },
        { src: 'https://images.unsplash.com/photo-1573747786524-3363056521de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRvY3VtZW50YXJ5JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzcwMDc5ODk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Photographer Artwork 2', title: 'Urban Documentary #2', price: '75 USDC', available: true, edition: '1/5', description: 'Documentary photography that reveals the hidden stories within city landscapes. A moment frozen in time, telling tales of urban life.' },
        { src: 'https://images.unsplash.com/photo-1654077366879-f22f18afc7d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMGNhbmRpZHxlbnwxfHx8fDE3NzAwNzk4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', alt: 'Photographer Artwork 3', title: 'Street Moments #3', price: '75 USDC', available: true, edition: '1/5', description: 'Candid street photography capturing unscripted moments of everyday beauty. This piece celebrates the spontaneous poetry found in ordinary scenes.' },
      ],
    },
    {
      id: '3',
      name: 'Sofia Lopez de Romaña',
      role: 'Jewelry Designer & Silversmith',
      bio: 'M4T3RI4 phygital jewelry digital handmade in Peru.',
      image: assetUrls.sofiaImage,
      portfolio: 'https://www.linkedin.com/in/sofia-lopez-de-roma%C3%B1a-8b338028/',
      featured: 'M4T3RI4',
      buttonText: 'Contact',
      artworks: [
        { 
          src: assetUrls.sofiaArtwork1, 
          alt: 'alga-coral earrings', 
          title: 'alga-coral earrings', 
          price: '120 USD', 
          available: true, 
          edition: '950/1000 recycled Peruvian silver', 
          description: 'Earrings designed in VR, inspired by Peruvian marine ecosystems. The digital model is 3dprinted and cast in 950 silver.',
          link: 'https://materia.com.pe/products/4lg4-earrings'
        },
        { 
          src: assetUrls.sofiaArtwork2, 
          alt: 'alga-coral ear cuff', 
          title: 'alga-coral ear cuff', 
          price: '70 USD', 
          available: true, 
          edition: '950/1000 recycled Peruvian silver', 
          description: 'Ear cuff designed in VR, inspired by Peruvian marine ecosystems. The digital model is 3dprinted and cast in 950 silver.',
          link: 'https://materia.com.pe/products/4lg4-ear-cuff'
        },
        { 
          src: assetUrls.sofiaArtwork3, 
          alt: 'alga-coral ring', 
          title: 'alga-coral ring', 
          price: '150 USD', 
          available: true, 
          edition: '950/1000 recycled Peruvian silver', 
          description: 'Ring designed in VR, inspired by Peruvian marine ecosystems. The digital model is 3dprinted and cast in 950 silver.',
          link: 'https://materia.com.pe/products/4lg4-ring'
        },
      ],
    },
  ];

  useEffect(() => {
    const shuffled = [...featuredCreators].sort(() => Math.random() - 0.5);
    setShuffledCreators(shuffled);
  }, []);

  // Handle password submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === UNLOCK_PASSWORD) {
      setIsUnlocked(true);
      setShowPasswordModal(false);
      setPasswordInput('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  // Filter creators based on unlock status
  const visibleCreators = shuffledCreators.filter(creator => {
    // Hide JavoG and Sogand Nobahar unless unlocked
    if ((creator.name === 'JavoG' || creator.name === 'Sogand Nobahar') && !isUnlocked) {
      return false;
    }
    return true;
  });

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
        currentPage="creators"
        onPageChange={() => {}}
        onHomeClick={onClose}
        onShopArchiveClick={() => {
          setSheetOpen(false);
          if (onShopArchiveClick) onShopArchiveClick();
        }}
        onTeamClick={() => {
          setSheetOpen(false);
          if (onTeamClick) onTeamClick();
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          if (onAdvertiseClick) onAdvertiseClick();
        }}
        onFeaturedCreatorsClick={() => {
          setSheetOpen(false);
          if (onFeaturedCreatorsClick) onFeaturedCreatorsClick();
        }}
      />

      {/* Main Content */}
      <main className="">
        {/* Hero Slideshow Section */}
        <section className="w-full relative h-[60vh] min-h-[500px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImages[currentHeroSlide].src}
              alt={heroImages[currentHeroSlide].alt}
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/40" />
          </div>

          {/* Text Overlay */}
          <div className="relative z-10 h-full flex items-center">
            <div className="px-8 md:px-16 max-w-6xl mx-auto w-full">
              <h1 className="mb-4 text-background">Featured Creators</h1>
              <p className="text-xl text-background/90 max-w-3xl mb-8">
                Meet the talented creators that grace ALANAmagazine's pages with their work and submit your work at a chance to get your own work curated.
              </p>
              
              <Button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScuQAI7e75S1vcs2d_8gboW94wlst0AFsmgmuiR_OCLPHYSIw/viewform?usp=publish-editor', '_blank')}
                className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors border border-transparent hover:border-foreground"
              >
                Submit your Work
              </Button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentHeroSlide
                    ? 'bg-accent w-6'
                    : 'bg-accent w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Creators Grid */}
        <section className="w-full pt-16 pb-16">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <div className="flex flex-col gap-16">
              {visibleCreators.map((creator) => (
                <div
                  key={creator.id}
                  className="border border-accent rounded-br-[25px] overflow-hidden bg-background"
                >
                  {/* Creator Header Section */}
                  <div className="flex flex-col md:flex-row gap-8 p-8 border-b border-accent bg-[rgba(220,194,254,0)]">
                    {/* Left Column: Creator Profile Image */}
                    <div className="w-full md:w-[280px] flex-shrink-0">
                      <div className="relative overflow-hidden rounded-br-[25px] aspect-[4/5]">
                        <img
                          src={creator.image}
                          alt={creator.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Right Column: Creator Info with button at bottom */}
                    <div className="flex flex-col gap-4 flex-1 justify-between">
                      <div className="flex flex-col gap-4">
                        <div>
                          <h3 className="text-3xl font-bold text-foreground mb-2">
                            {creator.name}
                          </h3>
                          <p className="text-accent font-medium text-lg">
                            {creator.role}
                          </p>
                        </div>

                        <p className="text-muted-foreground leading-relaxed text-[15px]">
                          {creator.bio}
                        </p>

                        <div className="pt-2 border-t border-foreground/10">
                          <p className="text-xs uppercase tracking-wide text-foreground/60 mb-2">
                            Featured Work
                          </p>
                          <p className="text-foreground font-medium text-sm">
                            {creator.featured}
                          </p>
                        </div>
                      </div>

                      {/* Contact Button - aligned with bottom of profile picture */}
                      <Button
                        onClick={() => window.open(creator.portfolio, '_blank')}
                        className="w-full md:w-auto bg-accent hover:bg-foreground text-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-all"
                      >
                        {creator.buttonText}
                      </Button>
                    </div>
                  </div>

                  {/* Artworks Gallery Section */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="text-2xl font-bold text-foreground mb-2">Available Artworks</h4>
                      <p className="text-sm text-muted-foreground">Hover over any piece to view details and purchase secured by blockchain technology.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {creator.artworks.map((artwork, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-tl-none rounded-tr-none rounded-bl-none rounded-br-[25px] bg-background border border-accent cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col"
                        >
                          {/* Artwork Image */}
                          <div className="relative aspect-square overflow-hidden bg-foreground/5">
                            <img
                              src={artwork.src}
                              alt={artwork.alt}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />

                            {/* Hover Overlay - Dark gradient with description */}
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/95 to-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                              <p className="text-background text-[14px] leading-relaxed text-left">
                                {artwork.description}
                              </p>
                            </div>
                          </div>

                          {/* Title and Price Info Section - Always visible */}
                          <div className="px-6 py-4 bg-background flex flex-col gap-2">
                            <h4 className="text-foreground font-bold text-lg">
                              {artwork.title}
                            </h4>
                            <p className="text-accent font-mono text-base font-bold">
                              {artwork.price}
                            </p>
                          </div>

                          {/* Buy Button - Flush at bottom */}
                          <div className="mt-auto">
                            {artwork.available ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (artwork.link) {
                                    window.open(artwork.link, '_blank');
                                  } else if (import.meta.env.DEV) {
                                    console.log(`Purchase ${artwork.title} for ${artwork.price}`);
                                    // TODO: Integrate with Unlock Protocol
                                  }
                                }}
                                className="w-full bg-accent hover:bg-foreground text-foreground hover:text-background font-sans font-bold text-base px-6 h-10 rounded-none rounded-br-[25px] transition-all border-t border-accent text-left"
                              >
                                Buy Now
                              </button>
                            ) : (
                              <button
                                disabled
                                className="w-full bg-foreground/10 text-foreground/40 font-sans font-bold text-base px-6 h-10 rounded-none rounded-br-[25px] cursor-not-allowed border-t border-foreground/10 text-left"
                              >
                                Sold Out
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full mt-16 pt-8 pb-12 bg-accent">
          <div className="px-8 md:px-16 max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Experience Their Work</h2>
            <p className="text-lg text-foreground/80 mb-8">
              See these creators' contributions come to life in the AIR Edition. 
              Pre-order your copy today.
            </p>
            <Button
              onClick={() => {
                if (onShopArchiveClick) {
                  onShopArchiveClick();
                }
              }}
              className="bg-foreground hover:bg-foreground/90 text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
            >
              Shop AIR Edition
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); if (onShowTerms) onShowTerms(); }}>
                Terms of Service
              </a>
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); if (onShowPrivacy) onShowPrivacy(); }}>
                Privacy Policy
              </a>
              <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors" onClick={(e) => { e.preventDefault(); if (onShowPressKit) onShowPressKit(); }}>
                Press Kit
              </a>
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