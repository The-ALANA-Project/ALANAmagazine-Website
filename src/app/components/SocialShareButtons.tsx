import { Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SocialShareButtonsProps {
  url?: string;
  title?: string;
  variant?: 'horizontal' | 'vertical';
}

export function SocialShareButtons({ 
  url = window.location.href, 
  title = 'Check out this article',
  variant = 'horizontal' 
}: SocialShareButtonsProps) {
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      '_blank'
    );
  };

  const shareByEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const buttonClasses = "border-border hover:border-accent hover:text-accent transition-all duration-300";

  return null;
}