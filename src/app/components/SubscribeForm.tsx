import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2e3ce182/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe. Please try again.');
        console.error('Subscribe error details:', data);
      }
    } catch (error) {
      console.error('Subscribe error:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
      if (import.meta.env.DEV) {
        console.error('Subscribe error:', error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl">
      {status === 'success' ? (
        <div className="flex items-center justify-center gap-3 py-6 px-6 bg-foreground rounded-none rounded-br-[25px] border border-accent">
          <CheckCircle className="w-6 h-6 text-accent" />
          <p className="text-base text-accent font-medium">{message}</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch">
            <div className="flex-1 relative border border-foreground sm:border-r-0 rounded-none bg-background h-9">
              {/* Email Icon with Separator */}
              <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
                <div className="flex items-center h-full px-4">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="w-px h-full bg-foreground"></div>
              </div>
              
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
                className="w-full h-full pl-16 pr-4 bg-transparent border-0 text-foreground placeholder:text-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none text-base font-medium transition-all duration-200"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-foreground hover:bg-accent border border-foreground text-background hover:text-foreground font-sans px-8 rounded-none rounded-br-[25px] transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
          
          {/* Footer Note or Error Message */}
          <p className={`text-xs text-left font-medium mt-2 ${
            status === 'error' ? 'text-red-500' : 'text-foreground/60'
          }`}>
            {status === 'error' ? message : 'Join 500+ creators learning Web3 • Unsubscribe anytime'}
          </p>
        </>
      )}
    </div>
  );
}