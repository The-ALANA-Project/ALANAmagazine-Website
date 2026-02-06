import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/app/components/ui/button';

interface ArticleFlipbookProps {
  articleId: string;
  articleTitle: string;
  articleImage: string;
  onClose: () => void;
}

export function ArticleFlipbook({ articleId, articleTitle, articleImage, onClose }: ArticleFlipbookProps) {
  const flipbookRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to flipbook on mount
  useEffect(() => {
    if (flipbookRef.current) {
      flipbookRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div ref={flipbookRef} className="w-full pt-6 md:pt-8 pb-2">
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

        {/* Magazine Spread Display */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative w-full bg-background border border-foreground rounded-br-[25px] overflow-hidden shadow-2xl">
            <img
              src={articleImage}
              alt={articleTitle}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}