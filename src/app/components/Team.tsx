import { useState } from 'react';
import { Menu, Wallet, X, ExternalLink } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import alanaLogo from 'figma:asset/811fb296ea4980c4d9de1deb853dd4aea394df50.png';
import heroImage from 'figma:asset/25ae36fe65f17a52ae42df2b0b7a2a9bbb635f20.png';
import stellaPhoto from 'figma:asset/4c75ce84cbb045735f7445e1bbc6c9788202372d.png';
import orbylinePhoto from 'figma:asset/c49b177ac62eddad3993d58f83b957304acbcb87.png';
import javierPhoto from 'figma:asset/7a7a546290bd274a8867e8b4ae7639133d443c2d.png';
import paridhiPhoto from 'figma:asset/ee1a394899544270fb3f64fab933530aa490f4b5.png';
import deliaPhoto from 'figma:asset/0c596642e55515e26676075db609b57b863d0618.png';
import elahnPhoto from 'figma:asset/130722e91f6dca37606bd6d770d3f7c58f3391ae.png';
import alexandraPhoto from 'figma:asset/37e60d7fd2e33688d97a4994a05b58f234f6267b.png';
import unlockLogo from 'figma:asset/6f5d423a18b3f267e243b0d78557a77c5fa8baa5.png';

interface TeamProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onGetInvolvedClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
  onShowPressKit?: () => void;
}

export function Team({ onClose, onShopArchiveClick, onTeamClick, onGetInvolvedClick, onAdvertiseClick, onShowTerms, onShowPrivacy, onShowPressKit }: TeamProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletToggle = () => {
    setIsWalletConnected(!isWalletConnected);
  };

  const teamMembers = [
    {
      name: 'Stella Achenbach',
      role: 'Publisher & Editor-in-Chief',
      bio: 'Stella Achenbach is the founder of The ALANA Project and an accomplished designer and active participant in the Web3 space. She oversees operations and organizes ALANAmagazine, driving innovation and community engagement.',
      image: stellaPhoto,
      linkedin: 'https://www.linkedin.com/in/stella-achenbach/',
    },
    {
      name: 'Javier Guzman',
      role: 'Partnerships & Community',
      bio: 'Javier has been influential in blockchain since 2016 and in Digital Fashion and Web3 since 2021. He co-founded the Digital Fashion Collective and was a long-standing  community manager at DRESSX.  Blending technology with community and style are but a few of his strenghts.',
      image: javierPhoto,
      linkedin: 'https://www.linkedin.com/in/javier-guzm%C3%A1n-74183a248/',
    },
    {
      name: 'Elahn Danee',
      role: 'Podcast Host & Content Curator',
      bio: 'Elahn is a tech and fashion enthusiast who started by sharing her .NET expertise through popular YouTube series and tech conferences. Now, in her two roles for ALANAmagazine, she examines the convergence of Web3 and fashion technology, merging innovation with style.',
      image: elahnPhoto,
      linkedin: 'https://www.linkedin.com/in/elahn-danee/',
    },
    {
      name: 'Delia Mendoza',
      role: 'PR & Marketing',
      bio: 'Delia Mendoza, founder of Delia Mendoza Communications, brings over 15 years of PR expertise across tech, fintech, Web3, and entertainment. Known for securing media in top business, tech and trade outlets, she excels in building impactful communications and branding strategies.',
      image: deliaPhoto,
      linkedin: 'https://www.linkedin.com/in/deliamendoza/',
    },
    {
      name: 'Orbyline Studio',
      role: 'Fashion Editorial & 3D',
      bio: 'ORBYLINE is a Milan-based design studio founded by industry experts Nastaran Hashemi and Sogand Nobahar. As co-founders, they are collaborating with ALANAmagazine to develop an innovative 3D fashion editorial that exemplifies the convergence of creativity and technology.',
      image: orbylinePhoto,
      linkedin: 'https://www.linkedin.com/company/orbyline/',
    },
    {
      name: 'Paridhi Dhariwal',
      role: '3D Development',
      bio: 'Paridhi is an India-based digital fashion designer, who is the force behind onclickcloset. She specializes in crafting 3D digital fashion assets for marketing and e-commerce. She aims to create value by merging technology and fashion, bringing brands to the forefront of the new era of XR.',
      image: paridhiPhoto,
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
      logo: unlockLogo,
      url: 'https://unlock-protocol.com/',
    },
    {
      name: 'Choice',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHTFpRTy5WWpw/company-logo_200_200/company-logo_200_200/0/1661522465667/choice_lgbtqia_logo?e=1770249600&v=beta&t=9cLJ_0AlDF-lhADGTBI98j4Ahu-f2ZLR4N__8FwNh1M',
      url: 'https://www.linkedin.com/company/choice-lgbtqia/posts/?feedView=all',
    },
    {
      name: 'Web3 Fashion Council',
      logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dvJTIwZGVzaWdufGVufDB8fHx8MTczNzQ4NDUwMHww&ixlib=rb-4.1.0&q=80&w=400',
      url: '#',
    },
    {
      name: 'Digital Fashion Collective',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb2dvJTIwZGVzaWdufGVufDB8fHx8MTczNzQ4NDUwMHww&ixlib=rb-4.1.0&q=80&w=400',
      url: '#',
    },
    {
      name: 'DRESSX',
      logo: 'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsb2dvJTIwZGVzaWdufGVufDB8fHx8MTczNzQ4NDUwMHww&ixlib=rb-4.1.0&q=80&w=400',
      url: '#',
    },
  ];

  const formerContributors = [
    {
      name: 'Alexandra Uytenbogaardt',
      role: 'Former Writer & Editorial Champion',
      bio: 'Alexandra was an in-house writer and editorial champion for ALANAmagazine, bringing compelling storytelling and editorial excellence to our Web3 content. Her dedication to craft and keen editorial eye helped shape our early voice.',
      image: alexandraPhoto,
      linkedin: 'https://www.linkedin.com/in/alexandra-uytenbogaardt/',
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
        currentPage="team"
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
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-[77vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Meet Our Team"
              className="w-full h-full object-cover"
            />
            {/* White overlay */}
            <div className="absolute inset-0 bg-background/30" />
          </div>

          {/* Hero Content */}
          <div className="relative min-h-[77vh] flex items-center px-8 md:px-16 max-w-6xl mx-auto">
            <div className="max-w-3xl text-foreground">
              <h1 className="leading-tight">
                Meet the Team
              </h1>
              
              <p className="max-w-2xl text-[20px]">
                A collective of creators, technologists, and visionaries shaping the future of Web3 storytelling.
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
                  onClick={onGetInvolvedClick}
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
            <p className="text-[20px] text-muted-foreground max-w-3xl">
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
              <p className="text-[20px] text-foreground/80 max-w-3xl mx-auto">
                We're proud to collaborate with these organizations and communities that share our vision for the future of digital culture.
              </p>
            </div>

            {/* Logo Carousel/Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
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

        {/* Former Contributors Section */}
        <section className="px-8 md:px-16 py-16 max-w-6xl mx-auto" id="former-contributors">
          <div className="mb-12">
            <h2 className="mb-4">Former Contributors</h2>
            <p className="text-[20px] text-muted-foreground max-w-3xl">
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
              className="inline-block bg-foreground text-background font-sans text-[16px] px-8 py-3 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground"
            >
              Reach Out
            </a>
          </div>
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