import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = "ALANAmagazine™ - Where Tech, Culture & Lifestyle Collide",
  description = "At ALANAmagazine™ we explore how Web3 is reshaping technology, creativity, culture, and the way we live. The first onchain-first phygital magazine merging creativity and technology.",
  image = "https://images.unsplash.com/photo-1664966343005-eceb7433b1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdhemluZSUyMGNvdmVyJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njg3NjAxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  url = "https://alanamagazine.com"
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', 'Web3, blockchain, cryptocurrency, digital magazine, culture, technology, lifestyle, NFT, phygital, onchain, ALANA');
    setMetaTag('author', 'The ALANA Project');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('theme-color', '#DCC2FE');

    // Open Graph meta tags for social sharing
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'ALANAmagazine', true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    setMetaTag('twitter:site', '@TheALANAProject');
    setMetaTag('twitter:creator', '@TheALANAProject');

    // Additional SEO tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');
    setMetaTag('format-detection', 'telephone=no');

  }, [title, description, image, url]);

  return null;
}
