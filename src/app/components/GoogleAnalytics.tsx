import { useEffect } from 'react';

export function GoogleAnalytics() {
  useEffect(() => {
    // Check if scripts are already added
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      return;
    }

    // Add gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5NGJKX6Z6V';
    document.head.appendChild(script);

    // Add gtag configuration script
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-5NGJKX6Z6V');
    `;
    document.head.appendChild(configScript);
  }, []);

  return null;
}
