import { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { ArticleCard } from '@/app/components/ArticleCard';
import { SocialShareButtons } from '@/app/components/SocialShareButtons';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { QuoteSection } from '@/app/components/QuoteSection';
import { TelegramCommunitySection } from '@/app/components/TelegramCommunitySection';
import { ArticleFlipbook } from '@/app/components/ArticleFlipbook';
import { SubscribeForm } from '@/app/components/SubscribeForm';
import { Twitter, Linkedin } from 'lucide-react';
import { assetUrls } from '@/assets/asset-urls';

type OutletContext = {
  isWalletConnected: boolean;
  onWalletToggle: () => void;
};

export function HomePage() {
  const [openArticleId, setOpenArticleId] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isWalletConnected, onWalletToggle } = useOutletContext<OutletContext>();

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[77vh] overflow-hidden" aria-label="Hero section">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={assetUrls.heroImage}
            alt="Web3 culture and lifestyle creative digital magazine cover spread"
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
                  navigate('/shop-archive');
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
      <section className="w-full mt-16 pb-6" aria-labelledby="about-heading">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Main Text */}
              <div className="space-y-6">
                <h2 id="about-heading" className="mb-2">About ALANAmagazine</h2>
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
                    alt="ALANAmagazine physical magazine showcase - phygital Web3 publication"
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
      <section id="subscribe" className="w-full mt-16" aria-labelledby="newsletter-heading">
        <div className="bg-accent py-12 md:py-16">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <h2 id="newsletter-heading" className="mb-2">Stay Updated</h2>
            <p className="text-foreground/70 mb-8 text-lg">
              Be first to know when the new ALANAmagazine Edition drops and get ongoing Web3 insights in your inbox.
            </p>

            <SubscribeForm />
          </div>
        </div>
      </section>

      {/* Sample Reads Section */}
      <section id="sample-reads" className="w-full mt-16 pb-6 scroll-mt-24" aria-labelledby="sample-reads-heading">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 id="sample-reads-heading" className="mb-2">Sample Reads</h2>
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

      {/* Footer */}
      <footer className="border-t border-foreground">
        <div className="px-8 md:px-16 py-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left: Legal Links */}
            <div className="flex w-full md:w-auto justify-between gap-4 md:gap-6">
              <button 
                onClick={() => navigate('/terms-of-service')}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate('/privacy-policy')}
                className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/press-kit')}
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
    </>
  );
}
