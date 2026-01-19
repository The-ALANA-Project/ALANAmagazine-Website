import { useState } from 'react';
import { Search, Menu, X, Mail, Wallet } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { ArticleCard } from '@/app/components/ArticleCard';
import { CategoryFilters } from '@/app/components/CategoryFilters';
import { MagazineIssueGrid } from '@/app/components/MagazineIssueGrid';
import { SocialShareButtons } from '@/app/components/SocialShareButtons';
import { SampleReadingSection } from '@/app/components/SampleReadingSection';
import { TestimonialsSection } from '@/app/components/TestimonialsSection';
import { QuoteSection } from '@/app/components/QuoteSection';
import { TelegramCommunitySection } from '@/app/components/TelegramCommunitySection';
import { TermsOfService } from '@/app/components/TermsOfService';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/5d7ab7c1b8fac42ab11fd12886703a1b94d4f87f.png';

export default function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeMenuItem, setActiveMenuItem] = useState('home');
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const handlePageChange = (page: string) => {
    setActiveMenuItem(page);
    // Smooth scroll to section if it exists
    const element = document.getElementById(page);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = ['Design', 'Technology', 'Culture', 'Architecture', 'Lifestyle'];

  const featuredArticle = {
    title: 'The Future of Contemporary Design',
    description: 'Exploring the intersection of minimalism, sustainability, and innovation in modern design practices.',
    category: 'Design',
    readTime: 8,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    date: 'Jan 15, 2026',
    image: 'https://images.unsplash.com/photo-1761639935139-ffc5d7ce8e67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBkZXNpZ258ZW58MXx8fHwxNzY4ODA0NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  };

  const articles = [
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
      title: 'Tech Startups Redefining Innovation',
      description: 'Inside the companies building tomorrow\'s breakthrough technologies today.',
      category: 'Technology',
      readTime: 7,
      author: { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?img=4' },
      date: 'Jan 12, 2026',
      image: 'https://images.unsplash.com/photo-1665360786492-ace5845fe817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwc3RhcnR1cHxlbnwxfHx8fDE3Njg4NDE1Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '4',
      title: 'Creative Workspaces of Tomorrow',
      description: 'Designing environments that inspire collaboration and innovation in the modern workplace.',
      category: 'Design',
      readTime: 4,
      author: { name: 'Aisha Patel', avatar: 'https://i.pravatar.cc/150?img=5' },
      date: 'Jan 11, 2026',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3Njg3NjQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '5',
      title: 'Luxury Living in the Modern Age',
      description: 'How luxury brands are adapting to the values and expectations of a new generation.',
      category: 'Lifestyle',
      readTime: 6,
      author: { name: 'Sophie Laurent', avatar: 'https://i.pravatar.cc/150?img=6' },
      date: 'Jan 10, 2026',
      image: 'https://images.unsplash.com/photo-1559385301-0187cb6eff46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaWZlc3R5bGV8ZW58MXx8fHwxNzY4Nzc1Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: '6',
      title: 'Urban Culture and Street Art',
      description: 'The evolution of urban expression and its impact on contemporary culture.',
      category: 'Culture',
      readTime: 5,
      author: { name: 'James Turner', avatar: 'https://i.pravatar.cc/150?img=7' },
      date: 'Jan 9, 2026',
      image: 'https://images.unsplash.com/photo-1768406091147-a13e758393e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGN1bHR1cmV8ZW58MXx8fHwxNzY4ODQ1NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      name: 'Alex Thompson',
      role: 'NFT Artist & Creator',
      avatar: 'https://i.pravatar.cc/150?img=11',
      content: 'ALANA helped me understand Web3 in a way that felt accessible and exciting. The community support is incredible!',
    },
    {
      name: 'Maya Patel',
      role: 'Digital Designer',
      avatar: 'https://i.pravatar.cc/150?img=45',
      content: 'Finally, a platform that bridges creativity and technology. ALANA is empowering creators to take control of their future.',
    },
    {
      name: 'Jordan Lee',
      role: 'Content Creator',
      avatar: 'https://i.pravatar.cc/150?img=33',
      content: 'The educational content and resources from ALANA transformed how I approach my creative work in the Web3 space.',
    },
  ];

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  // Show Terms of Service page if active
  if (showTerms) {
    return <TermsOfService onClose={() => setShowTerms(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-7xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={alanaLogo} alt="ALANAmagazine" className="h-7 w-auto" />
            </div>

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
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="ALANAmagazine Hero"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay gradient - keeping ALANA inverted colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex items-center px-8 md:px-16 max-w-7xl mx-auto">
            <div className="max-w-3xl text-background">
              <h1 className="leading-tight">
                Where Tech, Culture & Lifestyle Collide
              </h1>
              
              <p className="max-w-2xl">
                At ALANAmagazine™ we explore how Web3 is reshaping technology, creativity, culture, and the way we live.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans px-8 py-6">
                  Begin Your Web3 Journey
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Section */}
        <section id="articles" className="px-8 md:px-16 py-12 md:py-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div>
              <h2 className="mb-2">Latest Articles</h2>
              <p className="text-muted-foreground">
                Explore our curated collection of stories, insights, and perspectives
              </p>
            </div>

            <SocialShareButtons />
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <CategoryFilters 
              categories={categories} 
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-mono">
                No articles found in this category.
              </p>
            </div>
          )}
        </section>

        {/* Magazine Issues Section */}
        <section id="issues" className="px-8 md:px-16 py-12 md:py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="mb-2">Magazine Issues</h2>
              <p className="text-muted-foreground">
                Download our past issues and discover timeless stories
              </p>
            </div>

            <MagazineIssueGrid issues={magazineIssues} />
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section id="subscribe" className="px-8 md:px-16 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="bg-accent/40 rounded-none rounded-br-[25px] p-12 md:p-16 max-w-4xl mx-auto border border-accent/30">
            <h2 className="mb-4 text-left">Stay Updated</h2>
            <p className="text-foreground/70 mb-8 text-lg text-left">
              Get Web3 insights & educational content delivered to your inbox
            </p>

            <form className="mb-4">
              <div className="flex items-stretch gap-0 max-w-2xl bg-background rounded-none overflow-hidden border border-border">
                <div className="flex items-center justify-center px-4 bg-background">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-background"
                />
                <Button className="bg-foreground hover:bg-foreground/90 text-background rounded-none font-mono px-8 border-0">
                  Subscribe
                </Button>
              </div>
            </form>

            <p className="text-sm text-foreground/60 text-left">
              Join 500+ creators learning Web3 • Unsubscribe anytime
            </p>
          </div>
        </section>

        {/* Sample Reading Section */}
        <section className="px-8 md:px-16 py-16 md:py-24 max-w-7xl mx-auto">
          <SampleReadingSection />
        </section>

        {/* Quote Section - Full Width */}
        <section>
          <QuoteSection />
        </section>

        {/* Testimonials Section */}
        <section className="px-8 md:px-16 py-16 md:py-24 max-w-7xl mx-auto">
          <TestimonialsSection testimonials={testimonials} />
        </section>

        {/* Telegram Community Section */}
        <TelegramCommunitySection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-8 md:px-16 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <button 
              onClick={() => setShowTerms(true)}
              className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </button>
            <a href="#" className="text-[16px] pb-2 text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
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