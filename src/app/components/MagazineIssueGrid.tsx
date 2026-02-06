import { Calendar, Download, Lock, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useAppKit } from '@reown/appkit/react';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

interface MagazineIssue {
  id: string;
  title: string;
  issueNumber: string;
  series?: string;
  date: string;
  coverImage: string;
  description: string;
}

interface MagazineIssueGridProps {
  issues: MagazineIssue[];
  onNavigateToSubscribe?: () => void;
  onNavigateToSampleReads?: () => void;
}

export function MagazineIssueGrid({ issues, onNavigateToSubscribe, onNavigateToSampleReads }: MagazineIssueGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {issues.map((issue) => (
        <MagazineIssueCard 
          key={issue.id} 
          issue={issue} 
          onNavigateToSubscribe={onNavigateToSubscribe} 
          onNavigateToSampleReads={onNavigateToSampleReads} 
        />
      ))}
    </div>
  );
}

function MagazineIssueCard({ issue, onNavigateToSubscribe, onNavigateToSampleReads }: { 
  issue: MagazineIssue; 
  onNavigateToSubscribe?: () => void; 
  onNavigateToSampleReads?: () => void 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ownsNFT, setOwnsNFT] = useState<boolean | null>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { address, isConnected } = useAccount();
  const { open: openWalletModal } = useAppKit();

  // Check NFT ownership when wallet connects (only for EARTH Edition)
  useEffect(() => {
    if (isConnected && address && issue.title === 'EARTH Edition') {
      checkNFTOwnership();
    } else if (!isConnected) {
      setOwnsNFT(null);
    }
  }, [address, isConnected, issue.title]);

  const checkNFTOwnership = async () => {
    if (!address) return;

    setIsVerifying(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2e3ce182/check-nft-balance`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ walletAddress: address }),
        }
      );

      const data = await response.json();
      
      if (data.success && data.owns) {
        setOwnsNFT(true);
      } else {
        setOwnsNFT(false);
      }
    } catch (error) {
      console.error('Error checking NFT ownership:', error);
      setOwnsNFT(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const handleSampleReadsClick = () => {
    if (onNavigateToSampleReads) {
      onNavigateToSampleReads();
    } else {
      const sampleReadsSection = document.getElementById('sample-reads');
      if (sampleReadsSection) {
        sampleReadsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleDownloadClick = async () => {
    if (!isConnected || !address) {
      // Open wallet connection modal instead of showing error
      if (openWalletModal) {
        try {
          await openWalletModal();
        } catch (error) {
          console.error('Error opening wallet modal:', error);
        }
      } else {
        // Fallback if appKit is not ready
        toast.error('Please connect your wallet first', {
          description: 'You need to connect your wallet to verify NFT ownership and download the magazine.'
        });
      }
      return;
    }

    if (ownsNFT === false) {
      toast.error('NFT Required', {
        description: 'You need to own an EARTH Edition NFT to download this magazine. Visit the Shop & Archive page to purchase.'
      });
      return;
    }

    setIsDownloading(true);
    
    try {
      toast.loading('Verifying NFT ownership...', { id: 'nft-verify' });

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2e3ce182/verify-nft-download`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ walletAddress: address }),
        }
      );

      const data = await response.json();

      if (data.success && data.verified && data.downloadUrl) {
        toast.success('Access granted!', { 
          id: 'nft-verify',
          description: data.message 
        });

        // Trigger download
        const link = document.createElement('a');
        link.href = data.downloadUrl;
        link.download = 'EARTH-Edition-Full.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success('Download started!', {
          description: 'Your EARTH Edition magazine is downloading.'
        });

        setOwnsNFT(true);
      } else {
        toast.error('Verification failed', { 
          id: 'nft-verify',
          description: data.message || 'You do not own an EARTH Edition NFT.' 
        });
        setOwnsNFT(false);
      }
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Download failed', { 
        id: 'nft-verify',
        description: 'An error occurred while processing your request. Please try again.' 
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Determine button text and action for different scenarios
  const getButtonConfig = () => {
    if (issue.title === 'AIR Edition') {
      return {
        text: 'Coming Soon',
        onClick: onNavigateToSubscribe,
        disabled: false,
        icon: null,
      };
    }

    if (issue.title === 'EARTH Edition') {
      if (!isConnected) {
        return {
          text: 'Connect Wallet to Download',
          onClick: handleDownloadClick,
          disabled: false,
          icon: null,
        };
      }

      if (isVerifying) {
        return {
          text: 'Checking NFT...',
          onClick: () => {},
          disabled: true,
          icon: <Loader2 className="w-4 h-4 mr-2 animate-spin" />,
        };
      }

      if (ownsNFT === true) {
        return {
          text: isDownloading ? 'Downloading...' : 'Download Edition',
          onClick: handleDownloadClick,
          disabled: isDownloading,
          icon: isDownloading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Download className="w-4 h-4 mr-2" />,
        };
      }

      if (ownsNFT === false) {
        return {
          text: 'NFT Required',
          onClick: handleDownloadClick,
          disabled: false,
          icon: null,
        };
      }

      // Checking ownership
      return {
        text: 'Verify & Download',
        onClick: handleDownloadClick,
        disabled: false,
        icon: <Download className="w-4 h-4 mr-2" />,
      };
    }

    // Default for other editions
    return {
      text: 'Go To Sample Reads',
      onClick: handleSampleReadsClick,
      disabled: false,
      icon: null,
    };
  };

  const buttonConfig = getButtonConfig();

  return (
    <article className="article-card overflow-hidden group cursor-pointer">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={issue.coverImage}
          alt={`${issue.title} Cover`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span className="font-mono">{issue.date}</span>
        </div>

        <h3 className="text-xl group-hover:text-accent transition-colors duration-300">
          {issue.title}
        </h3>

        {issue.series && (
          <h4 className="text-[16px] md:text-[18px] font-sans font-medium text-foreground/70">
            {issue.series}
          </h4>
        )}

        <div>
          <p className={`text-sm text-muted-foreground ${isExpanded ? '' : 'line-clamp-2'}`}>
            {issue.description}
          </p>
          {issue.description.length > 100 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-xs text-muted-foreground hover:text-accent mt-2 transition-colors"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        <Button
          onClick={buttonConfig.onClick}
          disabled={buttonConfig.disabled}
          className="w-full bg-accent hover:bg-foreground text-accent-foreground hover:text-background font-sans px-8 rounded-none rounded-br-[25px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {buttonConfig.icon}
          {buttonConfig.text}
        </Button>

        {/* Show verification status for EARTH Edition */}
        {issue.title === 'EARTH Edition' && isConnected && ownsNFT === true && (
          <p className="text-xs text-accent text-center">✓ NFT Verified</p>
        )}
      </div>
    </article>
  );
}