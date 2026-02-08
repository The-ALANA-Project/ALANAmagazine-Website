import { useState } from 'react';
import { Menu, Wallet, X, ExternalLink, PenTool, Users, Heart, Megaphone, Instagram, Linkedin, Youtube, Twitter, Github } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

// TikTok icon as custom SVG since lucide doesn't have it
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface TeamProps {
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

export function Team({ 
  onClose, 
  onShopArchiveClick, 
  onTeamClick, 
  onAdvertiseClick, 
  onFeaturedCreatorsClick, 
  onShowTerms, 
  onShowPrivacy, 
  onShowPressKit,
  isWalletConnected = false,
  onWalletToggle 
}: TeamProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const teamMembers = [
    {
      name: 'Stella Achenbach',
      role: 'Publisher & Editor-in-Chief',
      bio: 'Stella Achenbach is the founder of The ALANA Project and an accomplished designer and active participant in the Web3 space. She oversees operations and organizes ALANAmagazine, driving innovation and community engagement.',
      image: assetUrls.stellaPhoto,
      linkedin: 'https://www.linkedin.com/in/stella-achenbach/',
    },
    {
      name: 'Javier Guzman',
      role: 'Partnerships & Community',
      bio: 'Javier has been influential in blockchain since 2016 and in Digital Fashion and Web3 since 2021. He co-founded the Digital Fashion Collective and was a long-standing  community manager at DRESSX.  Blending technology with community and style are but a few of his strenghts.',
      image: assetUrls.javierPhoto,
      linkedin: 'https://www.linkedin.com/in/javier-guzm%C3%A1n-74183a248/',
    },
    {
      name: 'Delia Mendoza',
      role: 'PR & Marketing',
      bio: 'Delia Mendoza, founder of Delia Mendoza Communications, brings over 15 years of PR expertise across tech, fintech, Web3, and entertainment. Known for securing media in top business, tech and trade outlets, she excels in building impactful communications and branding strategies.',
      image: assetUrls.deliaPhoto,
      linkedin: 'https://www.linkedin.com/in/deliamendoza/',
    },
    {
      name: 'Orbyline Studio',
      role: 'Fashion Editorial & 3D',
      bio: 'ORBYLINE is a Milan-based design studio founded by industry experts Nastaran Hashemi and Sogand Nobahar. As co-founders, they are collaborating with ALANAmagazine to develop an innovative 3D fashion editorial that exemplifies the convergence of creativity and technology.',
      image: assetUrls.orbylinePhoto,
      linkedin: 'https://www.linkedin.com/company/orbyline/',
    },
    {
      name: 'Paridhi Dhariwal',
      role: '3D Development',
      bio: 'Paridhi is an India-based digital fashion designer, who is the force behind onclickcloset. She specializes in crafting 3D digital fashion assets for marketing and e-commerce. She aims to create value by merging technology and fashion, bringing brands to the forefront of the new era of XR.',
      image: assetUrls.paridhiPhoto,
      linkedin: 'https://www.linkedin.com/in/paridhi-dhariwal%F0%9F%AA%A9-6263a3187/',
    },
  ];

  const communityPartners = [
    {
      name: 'Paragraph',
      logo: 'https://paragraph.com/icon0.svg?icon0.0d49ecc4.svg',
      url: 'https://paragraph.com/@the-alana-project',
    },
    {
      name: 'Unlock Protocol',
      logo: assetUrls.unlockLogo,
      url: 'https://unlock-protocol.com/',
    },
    {
      name: 'Choice',
      logo: assetUrls.choiceLogo,
      url: 'https://www.linkedin.com/company/choice-lgbtqia/posts/?feedView=all',
    },
    {
      name: 'Announce Digital Fashion',
      logo: assetUrls.announceDigitalFashionLogo,
      url: 'https://www.announcedigitalfashion.com/',
    },
    {
      name: 'Artizen',
      logo: assetUrls.artizenLogo,
      url: 'https://artizen.fund/',
    },
  ];

  const formerContributors = [
    {
      name: 'Elahn Danee',
      role: 'Former Podcast Host & Content Curator',
      bio: 'Elahn is a tech and fashion enthusiast who started by sharing her .NET expertise through popular YouTube series and tech conferences. In her two roles for ALANAmagazine, she examined the convergence of Web3 and fashion technology, merging innovation with style.',
      image: assetUrls.elahnPhoto,
      linkedin: 'https://www.linkedin.com/in/elahn-danee/',
    },
    {
      name: 'Alexandra Uytenbogaardt',
      role: 'Former Writer & Editorial Champion',
      bio: 'Alexandra was an in-house writer and editorial champion for ALANAmagazine, bringing compelling storytelling and editorial excellence to our Web3 content. Her dedication to craft and keen editorial eye helped shape our early voice.',
      image: assetUrls.alexandraPhoto,
      linkedin: 'https://www.linkedin.com/in/alexandra-uytenbogaardt/',
    },
  ];

  const opportunities = [
    {
      icon: PenTool,
      title: 'Contribute Content',
      description: 'Share your expertise and stories with our community. We welcome articles, essays, and creative works exploring Web3, culture, and innovation.',
      action: 'Submit Your Work',
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSerfB0_SUacWAdDGCvJ3pRZd_CxIzG7muJ5n6FmIY4nZrll5A/viewform?usp=publish-editor',
      type: 'link',
    },
    {
      icon: Heart,
      title: 'Align With Our Values',
      description: 'Help us continue creating quality content and building the future of decentralized media. Every contribution makes a difference.',
      action: 'Become a Supporter',
      link: '#community-values',
      type: 'link',
    },
    {
      icon: Users,
      title: 'Join Our Community',
      description: 'Connect with fellow Web3 enthusiasts, creators, and thought leaders. Participate in discussions, events, and collaborative projects.',
      action: 'Join Telegram',
      link: 'https://t.me/+O4rarVgpZxc3ZWFi',
      type: 'link',
    },
    {
      icon: Megaphone,
      title: 'Help Spread The Word',
      description: 'Help us grow by sharing ALANAmagazine with your network.',
      action: 'Share & Follow',
      link: '#',
      type: 'social',
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
        currentPage="team"
        onPageChange={() => {}}
        onHomeClick={onClose}
        onShopArchiveClick={onShopArchiveClick}
        onTeamClick={onTeamClick}
        onAdvertiseClick={onAdvertiseClick}
        onFeaturedCreatorsClick={onFeaturedCreatorsClick}
        onShowTerms={onShowTerms}
        onShowPrivacy={onShowPrivacy}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={assetUrls.heroImageTeam}
              alt="Meet Our Contributors"
              className="w-full h-full object-cover"
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
                Meet the People
              </h1>
              
              <p className="max-w-2xl text-[18px] md:text-[20px]">
                A collective of creators, technologists, and fellow communities shaping the future of creativity and Web3 storytelling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <Button 
                  onClick={() => {
                    const teamSection = document.getElementById('team-members');
                    if (teamSection) {
                      const headerOffset = 140;
                      const elementPosition = teamSection.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors border border-transparent"
                >
                  Meet the Team
                </Button>
                <Button 
                  onClick={() => {
                    const opportunitiesSection = document.getElementById('opportunities');
                    if (opportunitiesSection) {
                      const headerOffset = 140;
                      const elementPosition = opportunitiesSection.getBoundingClientRect().top + window.pageYOffset;
                      const offsetPosition = elementPosition - headerOffset;
                      
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className="bg-background/20 backdrop-blur-md border border-foreground hover:bg-background text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto scroll-mt-20" id="team-members">
          <div className="mb-12">
            <h2 className="mb-4">Our Team</h2>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
              We are a small and agile core team. As a product branch of The ALANA Project community, we're inspired by our entire community who supply us with ideas, requests, and vision for each new Edition.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <article key={index} className="bg-secondary/20 p-8 rounded-none rounded-br-[25px] border border-accent hover:border-accent transition-all duration-300 flex flex-col hover:scale-105 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border border-accent"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 group-hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <h4 className="group-hover:text-accent transition-colors">{member.name}</h4>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-foreground font-mono text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Community Partners Section */}
        <section className="w-full bg-accent py-16">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-foreground">Community Partners</h2>
              <p className="text-[18px] md:text-[20px] text-foreground/80 max-w-3xl mx-auto">
                We're proud to collaborate with these organizations and communities that share our vision for the future of digital culture.
              </p>
            </div>

            {/* Logo Carousel/Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center max-w-5xl mx-auto">
              {communityPartners.map((partner, index) => (
                <a 
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-32 h-32 bg-background/80 flex items-center justify-center overflow-hidden hover:bg-background transition-all duration-300 hover:scale-105"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Ways to Contribute Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto" id="opportunities">
          <div className="mb-12">
            <h2 className="mb-4">Ways to Contribute</h2>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
              Choose the path that resonates with you. Every contribution helps us grow and strengthen the phygitial creator and Web3 community.
            </p>
          </div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              // Special rendering for the social media card
              if (opportunity.type === 'social') {
                return (
                  <article key={index} className="bg-secondary/20 rounded-none rounded-br-[25px] border border-accent hover:border-accent transition-all duration-300 flex flex-col hover:scale-105 group overflow-hidden p-8">
                    <h4 className="text-xl mb-3">{opportunity.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {opportunity.description}
                    </p>
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-4 mt-auto">
                      <a
                        href="https://www.tiktok.com/@the_alana_project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="TikTok"
                      >
                        <TikTokIcon />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/the-alana-project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCD15TuEOTarAN9JATOQOd1A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                      <a
                        href="https://twitter.com/alana_xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="X (Twitter)"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/the_alana_project/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/the-alana-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </article>
                );
              }
              
              // Regular rendering for link cards
              return (
                <article key={index} className="bg-secondary/20 rounded-none rounded-br-[25px] border border-accent hover:border-accent transition-all duration-300 flex flex-col hover:scale-105 group overflow-hidden p-8">
                  <a
                    href={opportunity.link}
                    target={opportunity.link.startsWith('http') ? '_blank' : undefined}
                    rel={opportunity.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (opportunity.link.startsWith('#') && opportunity.link !== '#') {
                        e.preventDefault();
                        const targetId = opportunity.link.substring(1);
                        const targetSection = document.getElementById(targetId);
                        if (targetSection) {
                          const headerOffset = 140;
                          const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
                          const offsetPosition = elementPosition - headerOffset;
                          
                          window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                    className="flex items-center gap-2 mb-3 group-hover:text-accent transition-colors w-fit"
                  >
                    <h4 className="text-xl group-hover:text-accent transition-colors">{opportunity.title}</h4>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <p className="text-muted-foreground leading-relaxed">
                    {opportunity.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Community Values Section */}
        <section className="w-full bg-accent py-16 md:py-24" id="community-values">
          <div className="px-8 md:px-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              {/* Left Column - Manifesto Image */}
              <div className="flex justify-center items-center">
                <img
                  src={assetUrls.manifestoImage}
                  alt="ALANA 10 Principles of a Good Community"
                  className="w-full h-auto object-contain rounded-none rounded-br-[25px] border border-foreground"
                />
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="mb-6 text-foreground">Our Community Values</h2>
                  <p className="text-foreground/80 text-[16px] md:text-[18px] mb-6 leading-relaxed">
                    Our values guide everything we do – from how we build technology to how we support our community members.
                  </p>
                  
                  {/* Values List */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <span className="text-[rgb(38,36,36)] text-2xl leading-none">•</span>
                      <span className="text-foreground text-[16px] md:text-[18px]">Continuous Decentralization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[rgb(38,36,36)] text-2xl leading-none">•</span>
                      <span className="text-foreground text-[16px] md:text-[18px]">Inclusive by Design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[rgb(38,36,36)] text-2xl leading-none">•</span>
                      <span className="text-foreground text-[16px] md:text-[18px]">Build Accessibly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[rgb(38,36,36)] text-2xl leading-none">•</span>
                      <span className="text-foreground text-[16px] md:text-[18px]">Learn & Grow Together</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[rgb(38,36,36)] text-2xl leading-none">•</span>
                      <span className="text-foreground text-[16px] md:text-[18px]">Create with Multi-Purpose</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <a
                    href="https://app.unlock-protocol.com/checkout?id=fc22b412-bd47-49bb-8b5c-7415f277a935"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors border border-foreground"
                    >
                      Mint the ALANA Manifesto NFT
                    </Button>
                  </a>
                  <a
                    href="https://paragraph.com/refresh?redirect=%2F%40the-alana-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      className="w-full bg-background/20 backdrop-blur-md border border-foreground hover:bg-background text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors"
                    >
                      Read About the ALANA Manifesto
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Former Contributors Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto" id="former-contributors">
          <div className="mb-12">
            <h2 className="mb-4">Former Contributors</h2>
            <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
              We're deeply thankful to everyone listed here for helping shape ALANAmagazine and its<br />ongoing evolution.
            </p>
          </div>

          {/* Former Contributors Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {formerContributors.map((member, index) => (
              <article key={index} className="bg-secondary/20 p-8 rounded-none rounded-br-[25px] border border-accent hover:border-accent transition-all duration-300 flex flex-col hover:scale-105 group">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border border-accent"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 group-hover:text-accent transition-colors"
                        aria-label={`${member.name} LinkedIn profile`}
                      >
                        <h4 className="group-hover:text-accent transition-colors">{member.name}</h4>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-foreground font-mono text-sm mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section className="w-full bg-accent py-12">
          <div className="flex flex-col items-center justify-center text-center px-8 max-w-4xl mx-auto">
            <h2 className="text-foreground mb-3">Join Us</h2>
            <p className="text-foreground/80 mb-6 max-w-2xl">
              Ready to add your voice and join the ALANAmagazine team of contributors?
            </p>
            <a
              href="mailto:contact@the-alana-project.xyz"
              className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground"
            >
              Reach Out
            </a>
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