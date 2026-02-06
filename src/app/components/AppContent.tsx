import { useState, useEffect } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { Menu, X, Mail, Wallet } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { ArticleCard } from '@/app/components/ArticleCard';
import { MagazineIssueGrid } from '@/app/components/MagazineIssueGrid';
import { SocialShareButtons } from '@/app/components/SocialShareButtons';
import { SampleReadingSection } from '@/app/components/SampleReadingSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { QuoteSection } from '@/app/components/QuoteSection';
import { TelegramCommunitySection } from '@/app/components/TelegramCommunitySection';
import { TermsOfService } from '@/app/components/TermsOfService';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';
import { ShopArchive } from '@/app/components/ShopArchive';
import { Team } from '@/app/components/Team';
import { AdvertiseWithUs } from '@/app/components/AdvertiseWithUs';
import { PressKit } from '@/app/components/PressKit';
import { FeaturedCreators } from '@/app/components/FeaturedCreators';
import { GoogleAnalytics } from '@/app/components/GoogleAnalytics';
import { SEOHead } from '@/app/components/SEOHead';
import { ArticleFlipbook } from '@/app/components/ArticleFlipbook';
import { SubscribeForm } from '@/app/components/SubscribeForm';
import { toast } from 'sonner';
import { assetUrls } from '@/assets/asset-urls';

export function AppContent() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showShopArchive, setShowShopArchive] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showAdvertise, setShowAdvertise] = useState(false);
  const [showPressKit, setShowPressKit] = useState(false);
  const [showFeaturedCreators, setShowFeaturedCreators] = useState(false);
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  // WalletConnect hooks
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  // Get AppKit modal (with safe fallback)
  let appKitModal: any = null;
  try {
    appKitModal = useAppKit();
  } catch (error) {
    // Silent fail - AppKit not ready yet
  }

  // Open wallet connection modal
  const handleWalletConnect = async () => {
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

  // Disconnect wallet
  const handleWalletDisconnect = async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Disconnect error:', error);
      }
    }
  };

  // Toggle wallet connection
  const handleWalletToggle = async () => {
    if (isConnected) {
      await handleWalletDisconnect();
    } else {
      await handleWalletConnect();
    }
  };

  // Track unique wallet connections (optional)
  useEffect(() => {
    if (isConnected && address) {
      const storedWallets = localStorage.getItem('alana-unique-wallets');
      let walletList: string[] = storedWallets ? JSON.parse(storedWallets) : [];
      
      if (!walletList.includes(address)) {
        walletList.push(address);
        localStorage.setItem('alana-unique-wallets', JSON.stringify(walletList));
        toast.success('Welcome! Your wallet is connected.');
      }
    }
  }, [isConnected, address]);

  const handlePageChange = (page: string) => {
    setActiveMenuItem(page);
    // Reset scroll to top for all page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Smooth scroll to section if it exists
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArticleClick = (articleId: string) => {
    if (openArticleId === articleId) {
      setOpenArticleId(null);
    } else {
      setOpenArticleId(articleId);
    }
  };

  // Sample Reads - only 3 articles for the interactive reading section
  const sampleReads = [
    {
      id: '1',
      title: 'CRYPTO PHILANTHROPY',
      description: 'A new field of research rather than just donations via cryptocurrencies',
      category: 'Founders & Business',
      readTime: 8,
      author: { name: 'Nils Otter', avatar: assetUrls.nilsOtterAvatar, link: 'https://www.linkedin.com/in/nils-otter-a23446131/' },
      date: 'AIR Edition',
      image: assetUrls.cryptoPhilanthropySpread,
    },
    {
      id: '2',
      title: 'Dan Hoopert',
      description: 'Infinite curiosity mixed with an unquenchable thirst for knowledge are a major contributing factors to Dan Hoopert\'s intricately beautiful 3D designs',
      category: 'Artist Feature',
      readTime: 6,
      author: { name: 'astroporcelain', avatar: assetUrls.astroporcelainAvatar, link: 'https://www.linkedin.com/in/alexandra-uytenbogaardt/' },
      date: 'AIR Edition',
      image: assetUrls.danHoopertSpread,
    },
    {
      id: '3',
      title: 'The Silent Boom',
      description: 'Nigeria\'s Crypto Journey: The Good, The Bad, The Ugly.',
      category: 'Crypto Destinations',
      readTime: 10,
      author: { name: 'Shellpen Writes', avatar: assetUrls.shellpenWritesAvatar, link: 'https://www.linkedin.com/in/shellpen-writes-a9a490260/' },
      date: 'AIR Edition',
      image: assetUrls.silentBoomSpread,
    },
  ];

  const magazineIssues = [
    {
      id: '1',
      title: 'Winter 2026 Edition',
      issueNumber: '42',
      date: 'January 2026',
      coverImage: 'https://images.unsplash.com/photo-1664966343005-eceb7433b1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGNvdmVyJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njg3NjAxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Featuring exclusive interviews with leading designers and innovators shaping the future.',
    },
    {
      id: '2',
      title: 'Autumn 2025 Special',
      issueNumber: '41',
      date: 'October 2025',
      coverImage: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg3NjQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'A deep dive into sustainability, ethical design, and the future of creative industries.',
    },
    {
      id: '3',
      title: 'Summer 2025 Issue',
      issueNumber: '40',
      date: 'July 2025',
      coverImage: 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY4Nzc1Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Celebrating bold creativity and the artists pushing boundaries in contemporary culture.',
    },
  ];

  const testimonials = [
    {
      name: 'txbi',
      role: 'Community Member',
      avatar: assetUrls.txbiAvatar,
      content: 'Web3 content is ubiquitous, but ALANAmagazine delivers it with unmatched depth, quality and creativity! Super stoked for the second edition!',
    },
    {
      name: 'digitalmonkey',
      role: 'Community Member',
      avatar: assetUrls.digitalmonkeyAvatar,
      content: 'I got the physical copy of this book - it\'s gorgeous and a visual delight. Nothing else like it around. Fashion, cultural essays, web3 tech. What more can you ask for?',
    },
    {
      name: 'sunnyone',
      role: 'Community Member',
      avatar: assetUrls.sunnyoneAvatar,
      content: 'Love this magazine! Unique perspective, unique design, can\'t wait for the next edition 💚.',
    },
  ];

  // Show Terms of Service page if active
  if (showTerms) {
    // Reset scroll when Terms page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <TermsOfService 
      key="terms-page" 
      onClose={() => setShowTerms(false)}
      onShowPrivacy={() => {
        setShowTerms(false);
        setShowPrivacy(true);
      }}
    />;
  }

  // Show Privacy Policy page if active
  if (showPrivacy) {
    // Reset scroll when Privacy page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <PrivacyPolicy 
      key="privacy-page" 
      onClose={() => setShowPrivacy(false)}
      onShowTerms={() => {
        setShowPrivacy(false);
        setShowTerms(true);
      }}
    />;
  }

  // Show Shop + Archive page if active
  if (showShopArchive) {
    // Reset scroll when Shop + Archive page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <ShopArchive 
      key="shop-page" 
      onClose={() => {
        setShowShopArchive(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onShopArchiveClick={() => setSheetOpen(false)}
      onTeamClick={() => {
        setShowShopArchive(false);
        setShowTeam(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onAdvertiseClick={() => {
        setShowShopArchive(false);
        setShowAdvertise(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onFeaturedCreatorsClick={() => {
        setShowShopArchive(false);
        setShowFeaturedCreators(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowTerms={() => {
        setShowShopArchive(false);
        setShowTerms(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPrivacy={() => {
        setShowShopArchive(false);
        setShowPrivacy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPressKit={() => {
        setShowShopArchive(false);
        setShowPressKit(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
    />;
  }

  // Show Team page if active
  if (showTeam) {
    // Reset scroll when Team page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <Team 
      key="team-page" 
      onClose={() => {
        setShowTeam(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      onShopArchiveClick={() => {
        setShowTeam(false);
        setShowShopArchive(true);
      }}
      onTeamClick={() => setSheetOpen(false)}
      onAdvertiseClick={() => {
        setShowTeam(false);
        setShowAdvertise(true);
      }}
      onFeaturedCreatorsClick={() => {
        setShowTeam(false);
        setShowFeaturedCreators(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowTerms={() => {
        setShowTeam(false);
        setShowTerms(true);
      }}
      onShowPrivacy={() => {
        setShowTeam(false);
        setShowPrivacy(true);
      }}
      onShowPressKit={() => {
        setShowTeam(false);
        setShowPressKit(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      isWalletConnected={isConnected}
      onWalletToggle={handleWalletToggle}
    />;
  }

  // Show Advertise With Us page if active
  if (showAdvertise) {
    // Reset scroll when Advertise page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <AdvertiseWithUs 
      key="advertise-page" 
      onClose={() => {
        setShowAdvertise(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onShopArchiveClick={() => {
        setShowAdvertise(false);
        setShowShopArchive(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onTeamClick={() => {
        setShowAdvertise(false);
        setShowTeam(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onAdvertiseClick={() => setSheetOpen(false)}
      onShowTerms={() => {
        setShowAdvertise(false);
        setShowTerms(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPrivacy={() => {
        setShowAdvertise(false);
        setShowPrivacy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPressKit={() => {
        setShowAdvertise(false);
        setShowPressKit(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      isWalletConnected={isConnected}
      onWalletToggle={handleWalletToggle}
    />;
  }

  // Show Press Kit page if active
  if (showPressKit) {
    // Reset scroll when Press Kit page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <PressKit 
      key="press-kit-page" 
      onClose={() => {
        setShowPressKit(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onShopArchiveClick={() => {
        setShowPressKit(false);
        setShowShopArchive(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onTeamClick={() => {
        setShowPressKit(false);
        setShowTeam(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onAdvertiseClick={() => {
        setShowPressKit(false);
        setShowAdvertise(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowTerms={() => {
        setShowPressKit(false);
        setShowTerms(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPrivacy={() => {
        setShowPressKit(false);
        setShowPrivacy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
    />;
  }

  // Show Featured Creators page if active
  if (showFeaturedCreators) {
    // Reset scroll when Featured Creators page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <FeaturedCreators 
      key="featured-creators-page" 
      onClose={() => {
        setShowFeaturedCreators(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onShopArchiveClick={() => {
        setShowFeaturedCreators(false);
        setShowShopArchive(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onTeamClick={() => {
        setShowFeaturedCreators(false);
        setShowTeam(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onAdvertiseClick={() => {
        setShowFeaturedCreators(false);
        setShowAdvertise(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowTerms={() => {
        setShowFeaturedCreators(false);
        setShowTerms(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPrivacy={() => {
        setShowFeaturedCreators(false);
        setShowPrivacy(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onShowPressKit={() => {
        setShowFeaturedCreators(false);
        setShowPressKit(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      isWalletConnected={isConnected}
      onWalletToggle={handleWalletToggle}
    />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <SEOHead />
      
      {/* Google Analytics */}
      <GoogleAnalytics />
      
      {/* Header */}
      <header className="sticky top-0 z-[60] w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => {
                setActiveMenuItem('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Return to home"
            >
              <img src={assetUrls.alanaLogo} alt="ALANAmagazine" className="h-[33.6px] w-auto transition-transform hover:scale-95 active:scale-90" />
            </button>

            {/* Wallet and Menu Icons */}
            <div className="flex items-center gap-4">
              {/* Wallet icon - Quick access */}
              <button
                onClick={handleWalletToggle}
                className={`transition-colors ${
                  isConnected
                    ? 'text-accent hover:text-accent/80'
                    : 'text-foreground hover:text-accent'
                }`}
                aria-label={isConnected ? "Disconnect wallet" : "Connect wallet"}
                title={isConnected && address ? `Connected: ${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
              >
                <Wallet className="w-6 h-6" />
              </button>
              
              {/* Burger menu button - Always visible */}
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
        currentPage={activeMenuItem}
        onPageChange={handlePageChange}
        onHomeClick={() => {
          setSheetOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onShopArchiveClick={() => {
          setSheetOpen(false);
          setShowShopArchive(true);
        }}
        onTeamClick={() => {
          setSheetOpen(false);
          setShowTeam(true);
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          setShowAdvertise(true);
        }}
        onFeaturedCreatorsClick={() => {
          setSheetOpen(false);
          setShowFeaturedCreators(true);
        }}
      />

      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden" aria-label="Hero section">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={assetUrls.heroImage}
              alt="ALANAmagazine Hero"
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
                Where Tech, Culture & Lifestyle Collide
              </h1>
              
              <p className="max-w-2xl">
                At ALANAmagazine™ we explore how Web3 is reshaping technology, creativity, culture, and the way we live.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const sampleReadsSection = document.getElementById('sample-reads');
                    if (sampleReadsSection) {
                      sampleReadsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors border border-transparent"
                >
                  Read Samples
                </Button>
                <Button 
                  onClick={() => {
                    setShowShopArchive(true);
                    setTimeout(() => {
                      const comingSoonSection = document.getElementById('coming-soon');
                      if (comingSoonSection) {
                        comingSoonSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="bg-background/20 backdrop-blur-md border border-foreground hover:bg-background text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Reading Section */}
        <section className="w-full mt-16 pb-6">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Text */}
                <div className="space-y-6">
                  <h2 className="mb-2">About ALANAmagazine</h2>
                  <p className="text-foreground/90 leading-relaxed text-[16px] md:text-[18px]">
                    ALANAmagazine is a high‑gloss, phygital magazine where technology, culture, and lifestyle naturally overlap. It is made for curious readers, creatives, and tech professionals who want to understand how these different interconnected topics connect with the emergence of Web3.
                  </p>
                  <p className="text-foreground/90 leading-relaxed text-[16px] md:text-[18px]">
                    With clean layouts and just the right amount of playful detail we, at <a href="https://the-alana-project.xyz/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">The ALANA Project</a> community, take great care to curate this collectible magazine once per year.
                  </p>
                  <p className="text-foreground/90 leading-relaxed text-[16px] md:text-[18px]">
                    Each edition is released as a thoughtfully crafted digital and print experience you can read, collect (NFT), and come back to as the world evolves.
                  </p>
                </div>

                {/* Right Column - Visual Element */}
                <div className="relative">
                  <div className="aspect-square rounded-none rounded-br-[25px] border border-accent/20 overflow-hidden bg-secondary/20">
                    <img
                      src={assetUrls.aboutMagazineGif}
                      alt="ALANAmagazine Full Shot"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section id="subscribe" className="w-full mt-16">
          <div className="bg-accent py-12 md:py-16">
            <div className="px-8 md:px-16 max-w-6xl mx-auto">
              <h2 className="mb-2">Stay Updated</h2>
              <p className="text-foreground/70 mb-8 text-lg">
                Be first to know when the new ALANAmagazine Edition drops and get ongoing Web3 insights in your inbox.
              </p>

              <SubscribeForm />
            </div>
          </div>
        </section>

        {/* Sample Reads Section */}
        <section id="sample-reads" className="w-full mt-16 pb-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
              <div>
                <h2 className="mb-2">Sample Reads</h2>
                <p className="text-muted-foreground">
                  Click any article to start reading immediately—no purchase required
                </p>
              </div>

              <SocialShareButtons />
            </div>

            {/* Article Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
              {sampleReads.map((article) => (
                <div 
                  key={article.id} 
                  onClick={() => handleArticleClick(article.id)}
                  role="listitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleArticleClick(article.id);
                    }
                  }}
                >
                  <ArticleCard {...article} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flipbook Section - Full Width */}
        {openArticleId && (
          <ArticleFlipbook
            articleId={openArticleId}
            articleTitle={sampleReads.find(a => a.id === openArticleId)?.title || ''}
            articleImage={sampleReads.find(a => a.id === openArticleId)?.image || ''}
            onClose={() => setOpenArticleId(null)}
          />
        )}

        {/* Quote Section - Full Width */}
        <section className="w-full mt-16 pb-6">
          <QuoteSection />
        </section>

        {/* Testimonials Section */}
        <section className="w-full mt-16 pb-6">
          <div className="max-w-6xl mx-auto px-8 md:px-16">
            <TestimonialsSection testimonials={testimonials} />
          </div>
        </section>

        {/* Telegram Community Section */}
        <section className="w-full mt-16">
          <TelegramCommunitySection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <button 
                onClick={() => setShowTerms(true)}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowPressKit(true)}
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