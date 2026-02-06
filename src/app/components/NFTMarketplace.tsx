import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface NFTItem {
  id: string;
  title: string;
  artist: string;
  description: string;
  image: string;
  price: string;
}

export function NFTMarketplace() {
  const nftItems: NFTItem[] = [
    {
      id: '1',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Exclusive digital artwork from the AIR Edition collection',
      image: '',
      price: '50 USDC',
    },
    {
      id: '2',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Vibrant abstract composition celebrating Web3 culture',
      image: '',
      price: '50 USDC',
    },
    {
      id: '3',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Futuristic vision of decentralized technology',
      image: '',
      price: '50 USDC',
    },
    {
      id: '4',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Structured patterns representing blockchain architecture',
      image: '',
      price: '50 USDC',
    },
    {
      id: '5',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Dynamic energy of the creator economy',
      image: '',
      price: '50 USDC',
    },
    {
      id: '6',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Contemporary design meets digital innovation',
      image: '',
      price: '50 USDC',
    },
    {
      id: '7',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Urban landscape illuminated by blockchain possibilities',
      image: '',
      price: '50 USDC',
    },
    {
      id: '8',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Illustrative exploration of digital storytelling',
      image: '',
      price: '50 USDC',
    },
    {
      id: '9',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Harmonious blend of form and digital expression',
      image: '',
      price: '50 USDC',
    },
    {
      id: '10',
      title: 'Art Title',
      artist: 'Artist Name',
      description: 'Pure design essence captured in digital format',
      image: '',
      price: '50 USDC',
    },
  ];

  const handleCheckout = (nftId: string) => {
    // Integrate with Unlock Protocol in production
    if (import.meta.env.DEV) {
      console.log(`Initiating checkout for NFT ${nftId} via Unlock Protocol`);
    }
    // TODO: Integrate Unlock Protocol checkout
  };

  return (
    <section id="nft-marketplace" className="px-8 md:px-16 py-12 md:py-16 max-w-6xl mx-auto scroll-mt-24">
      <div className="mb-8">
        <h2 className="mb-2">Art Marketplace - AIR Edition</h2>
        <p className="text-muted-foreground text-[16px] md:text-[18px]">
          Exclusive digital collectibles from the featured artist of the ALANAmagazine AIR Edition. Each NFT is curated and powered by{' '}
          <a 
            href="https://unlock-protocol.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[rgb(38,36,36)] hover:text-foreground no-underline transition-colors"
          >
            Unlock Protocol
          </a>.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {nftItems.map((item) => (
          <NFTCard key={item.id} item={item} onCheckout={handleCheckout} />
        ))}
      </div>
    </section>
  );
}

function NFTCard({ item, onCheckout }: { item: NFTItem; onCheckout: (id: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex flex-col bg-background border border-accent rounded-none rounded-br-[25px] overflow-hidden hover:shadow-lg transition-all">
      {/* Square Placeholder */}
      <div className="aspect-square overflow-hidden bg-muted/30">
        {/* Grey placeholder - no image */}
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="text-[16px] font-medium mb-0.5">{item.title}</h4>
        <p className="text-[12px] text-muted-foreground mb-2">{item.artist}</p>
        
        <div className="flex-1 mb-3">
          <p className={`text-[14px] text-muted-foreground ${isExpanded ? '' : 'line-clamp-2'}`}>
            {item.description}
          </p>
          {item.description.length > 50 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs text-muted-foreground hover:text-accent mt-1 transition-colors"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        <div className="mt-auto space-y-2">
          <div className="text-right">
            <span className="text-[14px] font-['Roboto'] text-foreground">{item.price}</span>
          </div>
          <Button
            onClick={() => onCheckout(item.id)}
            className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans text-[14px] h-8 rounded-none rounded-br-[15px] transition-colors"
          >
            Collect
          </Button>
        </div>
      </div>
    </div>
  );
}