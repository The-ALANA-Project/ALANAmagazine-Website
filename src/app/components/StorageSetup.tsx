import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, XCircle, Loader2, AlertCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function StorageSetup() {
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [details, setDetails] = useState<string[]>([]);

  const runSetup = async () => {
    setStatus('running');
    setMessage('Initializing storage setup...');
    setDetails([]);

    try {
      setDetails(prev => [...prev, '🔄 Connecting to server...']);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2e3ce182/setup-storage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setMessage(data.message || 'Storage setup completed successfully!');
        setDetails(prev => [
          ...prev,
          '✅ Storage bucket created/verified',
          '✅ PDF downloaded from IPFS',
          '✅ PDF uploaded to Supabase Storage',
          '✅ Ready for NFT-gated downloads'
        ]);
      } else {
        setStatus('error');
        setMessage(data.error || 'Setup failed');
        setDetails(prev => [
          ...prev,
          `❌ Error: ${data.error}`,
          ...(data.message ? [`ℹ️ ${data.message}`] : []),
          ...(data.details ? [`📋 ${data.details}`] : [])
        ]);
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to connect to setup endpoint');
      setDetails(prev => [
        ...prev,
        `❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'ℹ️ Make sure the Supabase Edge Function is deployed and running'
      ]);
      console.error('Setup error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Storage Setup</h1>
          <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
            Initialize the Supabase Storage bucket and upload the EARTH Edition PDF for NFT-gated downloads.
          </p>
        </div>

        {/* Setup Card */}
        <div className="border border-foreground rounded-none rounded-br-[25px] p-8 mb-8">
          <h2 className="text-[24px] font-medium mb-4">Setup Process</h2>
          <p className="text-[16px] text-muted-foreground mb-6">
            This is a one-time setup that:
          </p>
          <ul className="space-y-2 mb-8 text-[16px]">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Creates a private storage bucket: <code className="text-sm bg-foreground/5 px-2 py-1 rounded">make-2e3ce182-magazine-pdfs</code></span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Fetches the EARTH Edition PDF from IPFS</span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Uploads the PDF to Supabase Storage as <code className="text-sm bg-foreground/5 px-2 py-1 rounded">earth-edition-full.pdf</code></span>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              <span>Enables secure NFT-gated downloads with temporary signed URLs</span>
            </li>
          </ul>

          {/* Run Setup Button */}
          <Button
            onClick={runSetup}
            disabled={status === 'running'}
            className="bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-12 rounded-none rounded-br-[25px] transition-colors"
          >
            {status === 'running' && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {status === 'running' ? 'Running Setup...' : status === 'success' ? 'Run Setup Again' : 'Run Setup'}
          </Button>

          {/* Note */}
          <p className="text-sm text-muted-foreground mt-4">
            💡 Safe to run multiple times - it will skip steps that are already complete.
          </p>
        </div>

        {/* Status Display */}
        {status !== 'idle' && (
          <div className={`border rounded-none rounded-br-[25px] p-8 ${
            status === 'success' ? 'border-green-500/50 bg-green-500/5' :
            status === 'error' ? 'border-red-500/50 bg-red-500/5' :
            'border-accent/50 bg-accent/5'
          }`}>
            {/* Status Header */}
            <div className="flex items-center gap-3 mb-4">
              {status === 'running' && <Loader2 className="w-6 h-6 text-accent animate-spin" />}
              {status === 'success' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              {status === 'error' && <XCircle className="w-6 h-6 text-red-500" />}
              <h3 className="text-[20px] font-medium">
                {status === 'running' && 'Setup in Progress'}
                {status === 'success' && 'Setup Complete'}
                {status === 'error' && 'Setup Failed'}
              </h3>
            </div>

            {/* Message */}
            {message && (
              <p className="text-[16px] mb-4">{message}</p>
            )}

            {/* Details */}
            {details.length > 0 && (
              <div className="bg-background/50 rounded-none rounded-br-[15px] p-4 space-y-2">
                {details.map((detail, index) => (
                  <p key={index} className="text-sm font-mono">
                    {detail}
                  </p>
                ))}
              </div>
            )}

            {/* Next Steps (Success) */}
            {status === 'success' && (
              <div className="mt-6 p-4 bg-accent/10 rounded-none rounded-br-[15px]">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-2">Next Steps:</p>
                    <ol className="text-sm space-y-1 list-decimal list-inside">
                      <li>Go to the Shop & Archive page</li>
                      <li>Connect a wallet that owns an EARTH Edition NFT</li>
                      <li>Click "Download PDF" on the EARTH Edition card</li>
                      <li>The NFT verification should work and download the PDF!</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technical Details */}
        <details className="mt-8">
          <summary className="text-[16px] font-medium cursor-pointer hover:text-accent transition-colors">
            📋 Technical Details
          </summary>
          <div className="mt-4 p-6 bg-foreground/5 rounded-none rounded-br-[15px] text-sm space-y-2 font-mono">
            <p><strong>Storage Bucket:</strong> make-2e3ce182-magazine-pdfs</p>
            <p><strong>Bucket Type:</strong> Private (requires signed URLs)</p>
            <p><strong>File Name:</strong> earth-edition-full.pdf</p>
            <p><strong>Source:</strong> IPFS (bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu)</p>
            <p><strong>NFT Contract:</strong> 0x1efbaF705Ac7e8588148F06a369eB43935F1bEb9 (Optimism)</p>
            <p><strong>Signed URL Expiry:</strong> 1 hour</p>
            <p><strong>Endpoint:</strong> /make-server-2e3ce182/setup-storage</p>
          </div>
        </details>
      </div>
    </div>
  );
}
