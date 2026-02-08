import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEOHead({
  title = "ALANAmagazine™ - Where Tech, Culture & Lifestyle Collide",
  description = "Explore how Web3 is reshaping technology, creativity, and culture. The first onchain-first phygital magazine merging innovation and design.",
  image = "https://pink-quick-lizard-297.mypinata.cloud/ipfs/bafkreictfmoajfiry4wxcx7g7k6gjuotj237drxqaatjlbvuwi2wmsuuo4",
  url = "https://alanamagazine.xyz" 
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Set favicon
    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = 'https://pink-quick-lizard-297.mypinata.cloud/ipfs/bafybeiapuwp5qvwn2bm42vkqzhfij2oegdguy3kzprdxu5g3oazlyuurma/ALANA%20Image%20Mark%20-%20Black%20on%20White.png';
    };
    setFavicon();

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

    // Add canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;

  }, [title, description, image, url]);

  return null;
}