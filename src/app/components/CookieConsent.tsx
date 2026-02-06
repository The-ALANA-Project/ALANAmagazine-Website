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
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-foreground text-background border-t-2 border-accent shadow-lg">
      <div className="px-6 md:px-8 py-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Content */}
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-bold mb-2 text-background">We Value Your Privacy</h3>
            <p className="text-sm text-background/90 leading-relaxed">
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
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="bg-transparent border-2 border-background text-background hover:bg-background/10 rounded-none rounded-br-[15px] font-sans px-6 h-10"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-accent hover:bg-accent/90 text-foreground rounded-none rounded-br-[15px] font-sans px-6 h-10 font-bold"
            >
              Accept Cookies
            </Button>
          </div>

          {/* Close button */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:relative md:top-0 md:right-0 text-background/70 hover:text-background transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}