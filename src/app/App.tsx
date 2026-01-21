import { useState } from 'react';
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
import { GetInvolved } from '@/app/components/GetInvolved';
import { AdvertiseWithUs } from '@/app/components/AdvertiseWithUs';
import { PressKit } from '@/app/components/PressKit';
import { GoogleAnalytics } from '@/app/components/GoogleAnalytics';
import { ArticleFlipbook } from '@/app/components/ArticleFlipbook';
import { SubscribeForm } from '@/app/components/SubscribeForm';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/5d7ab7c1b8fac42ab11fd12886703a1b94d4f87f.png';
import txbiAvatar from 'figma:asset/85169175ee8c48188843ae81c0dfe183f3855853.png';
import digitalmonkeyAvatar from 'figma:asset/a84932caa80e35c5445579c6feb03abd1a843d36.png';
import sunnyoneAvatar from 'figma:asset/f3cbb5f4b3e4a1290a0cedba95663e05b5ea5c33.png';

export default function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showShopArchive, setShowShopArchive] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const [showGetInvolved, setShowGetInvolved] = useState(false);
  const [showAdvertise, setShowAdvertise] = useState(false);
  const [showPressKit, setShowPressKit] = useState(false);
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

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
      title: 'Modern Architecture in Urban Spaces',
      description: 'How contemporary architects are reshaping city skylines with bold, sustainable designs.',
      category: 'Architecture',
      readTime: 6,
      author: { name: 'Marcus Johnson', avatar: 'https://i.pravatar.cc/150?img=2' },
      date: 'Jan 14, 2026',
      image: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzY4NzU2MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '2',
      title: 'The Rise of Digital Art Galleries',
      description: 'Virtual exhibitions are transforming how we experience and collect contemporary art.',
      category: 'Culture',
      readTime: 5,
      author: { name: 'Elena Rodriguez', avatar: 'https://i.pravatar.cc/150?img=3' },
      date: 'Jan 13, 2026',
      image: 'https://images.unsplash.com/photo-1719935115623-4857df23f3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3Njg4Mjk0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '3',
      title: 'Web3: The Future of Digital Ownership',
      description: 'Inside the revolution that\'s redefining how we create, own, and share value online.',
      category: 'Technology',
      readTime: 7,
      author: { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=4' },
      date: 'Jan 12, 2026',
      image: 'https://images.unsplash.com/photo-1665360786492-ace5845fe817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cHxlbnwxfHx8fDE3Njg4NDE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      avatar: txbiAvatar,
      content: 'Web3 content is ubiquitous, but ALANAmagazine delivers it with unmatched depth, quality and creativity! Super stoked for the second edition!',
    },
    {
      name: 'digitalmonkey',
      role: 'Community Member',
      avatar: digitalmonkeyAvatar,
      content: 'I got the physical copy of this book - it\'s gorgeous and a visual delight. Nothing else like it around. Fashion, cultural essays, web3 tech. What more can you ask for?',
    },
    {
      name: 'sunnyone',
      role: 'Community Member',
      avatar: sunnyoneAvatar,
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
      onGetInvolvedClick={() => {
        setShowShopArchive(false);
        setShowGetInvolved(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
      onAdvertiseClick={() => {
        setShowShopArchive(false);
        setShowAdvertise(true);
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
      onGetInvolvedClick={() => {
        setShowTeam(false);
        setShowGetInvolved(true);
      }}
      onAdvertiseClick={() => {
        setShowTeam(false);
        setShowAdvertise(true);
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
    />;
  }

  // Show Get Involved page if active
  if (showGetInvolved) {
    // Reset scroll when Get Involved page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    return <GetInvolved 
      key="get-involved-page" 
      onClose={() => {
        setShowGetInvolved(false);
        setSheetOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      onShopArchiveClick={() => {
        setShowGetInvolved(false);
        setShowShopArchive(true);
      }}
      onTeamClick={() => {
        setShowGetInvolved(false);
        setShowTeam(true);
      }}
      onGetInvolvedClick={() => setSheetOpen(false)}
      onAdvertiseClick={() => {
        setShowGetInvolved(false);
        setShowAdvertise(true);
      }}
      onShowTerms={() => {
        setShowGetInvolved(false);
        setShowTerms(true);
      }}
      onShowPrivacy={() => {
        setShowGetInvolved(false);
        setShowPrivacy(true);
      }}
      onShowPressKit={() => {
        setShowGetInvolved(false);
        setShowPressKit(true);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }}
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
      onGetInvolvedClick={() => {
        setShowAdvertise(false);
        setShowGetInvolved(true);
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
      onGetInvolvedClick={() => {
        setShowPressKit(false);
        setShowGetInvolved(true);
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

  return (
    <div className="min-h-screen bg-background">
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
              <img src={alanaLogo} alt="ALANAmagazine" className="h-[33.6px] w-auto" />
            </button>

            {/* Wallet and Menu Icons */}
            <div className="flex items-center gap-4">
              {/* Wallet icon - Quick access */}
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
        isWalletConnected={isWalletConnected}
        onWalletToggle={handleWalletToggle}
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
        onGetInvolvedClick={() => {
          setSheetOpen(false);
          setShowGetInvolved(true);
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          setShowAdvertise(true);
        }}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="ALANAmagazine Hero"
              className="w-full h-full object-cover scale-[1.3]"
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
            <SampleReadingSection />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sampleReads.map((article) => (
                <div key={article.id} onClick={() => handleArticleClick(article.id)}>
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
      <footer className="border-t border-foreground px-8 md:px-16 py-8 max-w-6xl mx-auto">
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
      </footer>
    </div>
  );
}