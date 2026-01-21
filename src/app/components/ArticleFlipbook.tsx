import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';
import spread1 from 'figma:asset/851f082b0dae899c98534fd536f0045376ebcaf0.png';
import spread2 from 'figma:asset/f50bd09fb82d61696168157e2788d5a702f196b4.png';
import spread3 from 'figma:asset/e5660243e16c283eb336f683468266935d7d4c6f.png';

interface ArticleFlipbookProps {
  articleId: string;
  articleTitle: string;
  onClose: () => void;
}

export function ArticleFlipbook({ articleId, articleTitle, onClose }: ArticleFlipbookProps) {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const flipbookRef = useRef<HTMLDivElement>(null);

  // Real magazine spreads from ALANAmagazine
  const spreads = [
    { 
      id: 1, 
      spread: spread1 // Don't Know U - pages 10-11
    },
    { 
      id: 2, 
      spread: spread2 // Crypto Philanthropy - pages 22-23
    },
    { 
      id: 3, 
      spread: spread3 // Art Feature: Dan Hoopert - pages 58-59
    },
  ];

  const totalSpreads = spreads.length;

  // Auto-scroll to flipbook on mount
  useEffect(() => {
    if (flipbookRef.current) {
      flipbookRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNextSpread = () => {
    if (currentSpread < totalSpreads - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread + 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  const handlePrevSpread = () => {
    if (currentSpread > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentSpread(currentSpread - 1);
        setIsFlipping(false);
      }, 800);
    }
  };

  return (
    <div ref={flipbookRef} className="w-full bg-secondary/10 py-6 md:py-8 border-y border-foreground">
      <div className="px-8 md:px-16 max-w-6xl mx-auto">
        {/* Close Button - X only */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-foreground hover:text-accent transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Flipbook Container - Full Spread Display */}
        <div className="relative mx-auto max-w-5xl">
          {/* Magazine Spread - Full double-page image */}
          <div className="relative w-full bg-background border border-foreground rounded-br-[25px] overflow-hidden shadow-2xl">
            <img
              src={spreads[currentSpread].spread}
              alt={`Spread ${currentSpread + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-300 ${
                isFlipping ? 'opacity-50' : 'opacity-100'
              }`}
            />
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              onClick={handlePrevSpread}
              disabled={currentSpread === 0 || isFlipping}
              className="bg-foreground hover:bg-foreground/90 text-background disabled:opacity-30 disabled:cursor-not-allowed w-32"
            >
              Previous
            </Button>

            {/* Spread Indicators */}
            <div className="flex gap-2">
              {spreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isFlipping && index !== currentSpread) {
                      setIsFlipping(true);
                      setTimeout(() => {
                        setCurrentSpread(index);
                        setIsFlipping(false);
                      }, 600);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSpread
                      ? 'bg-accent w-8'
                      : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to spread ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={handleNextSpread}
              disabled={currentSpread === totalSpreads - 1 || isFlipping}
              className="bg-foreground hover:bg-foreground/90 text-background disabled:opacity-30 disabled:cursor-not-allowed w-32"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}