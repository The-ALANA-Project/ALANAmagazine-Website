import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('alana-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }

    // Listen for privacy policy event
    const handleShowPrivacy = () => {
      // Trigger privacy policy modal/page
      // This event can be caught by parent component
    };

    window.addEventListener('showPrivacyPolicy', handleShowPrivacy);
    return () => window.removeEventListener('showPrivacyPolicy', handleShowPrivacy);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('alana-cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('alana-cookie-consent', 'declined');
    setShowBanner(false);
    // Optionally, disable Google Analytics here if needed
  };

  if (!showBanner) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-[100] bg-foreground text-background border-t border-accent shadow-lg transition-transform duration-500 ease-out ${
      showBanner ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="px-6 md:px-8 py-6 max-w-6xl mx-auto relative">
        {/* Close button - mobile: top-right, desktop: top-right of container */}
        <button
          onClick={handleDecline}
          className="absolute top-6 right-6 md:top-6 md:right-8 text-background hover:text-background/70 transition-colors"
          aria-label="Close cookie banner"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] md:gap-x-6 md:gap-y-2 gap-6 pr-8 md:pr-0">
          {/* Heading */}
          <h3 className="mb-2 md:mb-0 text-background md:col-start-1 md:row-start-1">We Value Your Privacy</h3>
          
          {/* Content */}
          <p className="text-sm text-background/90 leading-relaxed md:col-start-1 md:row-start-2">
            We use cookies and Google Analytics to improve your experience and understand how our site is used. 
            By clicking "Accept", you consent to our use of cookies and analytics tracking. 
            You can learn more in our{' '}
            <a 
              href="#privacy" 
              className="underline hover:text-accent transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // This would need to be wired up to your privacy policy navigation
                window.dispatchEvent(new CustomEvent('showPrivacyPolicy'));
              }}
            >
              Privacy Policy
            </a>.
          </p>

          {/* Buttons - aligned with paragraph text */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:flex-shrink-0 md:col-start-2 md:row-start-2 md:self-start">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="bg-transparent border border-background text-background hover:bg-background hover:text-foreground rounded-none rounded-br-[25px] font-sans px-6 h-10 transition-colors"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-accent border border-accent hover:bg-foreground hover:border-accent hover:text-accent text-foreground rounded-none rounded-br-[25px] font-sans px-6 h-10 font-bold transition-colors font-normal"
            >
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}