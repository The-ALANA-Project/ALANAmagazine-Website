import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { verifyNFTOwnership, getNFTBalance } from "./nft_verification.tsx";
import { createClient } from "npm:@supabase/supabase-js@2";
import { setupStorageBucket, uploadPDFFromIPFS } from "./setup_storage.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2e3ce182/health", (c) => {
  return c.json({ status: "ok" });
});

// ============ PARAGRAPH SUBSCRIBE ENDPOINT ============
app.post('/make-server-2e3ce182/subscribe', async (c) => {
  try {
    const { email } = await c.req.json();
    
    // Validate email
    if (!email || !email.includes('@')) {
      return c.json(
        { success: false, error: 'Valid email address required' },
        400
      );
    }

    // Get API key from environment
    const paragraphApiKey = Deno.env.get('PARAGRAPH_API_KEY');
    
    if (!paragraphApiKey) {
      console.error('[Subscribe Error] PARAGRAPH_API_KEY not configured');
      return c.json(
        { success: false, error: 'Subscription service not configured' },
        500
      );
    }

    console.log(`[Subscribe] Attempting to subscribe email: ${email}`);
    console.log(`[Subscribe] Using API key: ${paragraphApiKey.substring(0, 10)}...`);
    
    // Try multiple possible Paragraph API endpoints
    const endpoints = [
      { url: 'https://api.paragraph.com/blogs/@the-alana-project/subscribe', method: 'POST' },
      { url: 'https://api.paragraph.com/blogs/@the-alana-project/subscribers', method: 'POST' },
      { url: 'https://paragraph.com/api/blogs/@the-alana-project/subscribe', method: 'POST' },
      { url: 'https://paragraph.com/api/@the-alana-project/subscribe', method: 'POST' },
    ];

    let lastError = null;
    
    for (const endpoint of endpoints) {
      try {
        console.log(`[Subscribe] Trying endpoint: ${endpoint.url}`);
        
        const paragraphResponse = await fetch(endpoint.url, {
          method: endpoint.method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${paragraphApiKey}`,
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email,
            publication: '@the-alana-project',
            publicationId: 'the-alana-project',
            blogId: '@the-alana-project'
          })
        });

        console.log(`[Subscribe] Response status from ${endpoint.url}: ${paragraphResponse.status}`);
        
        const responseText = await paragraphResponse.text();
        console.log(`[Subscribe] Response body: ${responseText.substring(0, 500)}`);
        
        if (paragraphResponse.ok || paragraphResponse.status === 200 || paragraphResponse.status === 201) {
          console.log('[Subscribe] Successfully subscribed:', email);
          return c.json({ 
            success: true, 
            message: 'Successfully subscribed to ALANAmagazine!'
          });
        }
        
        lastError = { status: paragraphResponse.status, body: responseText, endpoint: endpoint.url };
      } catch (err) {
        console.error(`[Subscribe] Error with endpoint ${endpoint.url}:`, err.message);
        lastError = { error: err.message, endpoint: endpoint.url };
      }
    }
    
    // If we get here, all endpoints failed
    console.error('[Subscribe Error] All endpoints failed. Last error:', lastError);
    return c.json({ 
      success: false, 
      error: 'Failed to subscribe to newsletter',
      details: lastError
    }, 500);
  } catch (error) {
    console.error('[Subscribe Error]', error);
    return c.json({ 
      success: false, 
      error: 'Failed to process subscription request',
      details: error.message
    }, 500);
  }
});

// ============ NFT VERIFICATION & DOWNLOAD ENDPOINT ============
app.post('/make-server-2e3ce182/verify-nft-download', async (c) => {
  try {
    const { walletAddress } = await c.req.json();
    
    // Validate wallet address
    if (!walletAddress || !walletAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      console.error('[NFT Download] Invalid wallet address:', walletAddress);
      return c.json(
        { success: false, error: 'Invalid wallet address format' },
        400
      );
    }

    console.log('[NFT Download] Verifying NFT ownership for wallet:', walletAddress);

    // Verify NFT ownership on Optimism
    const ownsNFT = await verifyNFTOwnership(walletAddress);
    
    if (!ownsNFT) {
      console.log('[NFT Download] Wallet does not own EARTH Edition NFT');
      return c.json({
        success: false,
        verified: false,
        message: 'Wallet does not own an EARTH Edition NFT'
      }, 403);
    }

    console.log('[NFT Download] NFT ownership verified! Generating Pinata signed URL...');

    // Get Pinata credentials from environment
    const pinataJWT = Deno.env.get('PINATA_JWT');
    const pinataGateway = 'pink-quick-lizard-297.mypinata.cloud';
    const pdfCID = 'bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu';
    
    if (!pinataJWT) {
      console.error('[NFT Download] PINATA_JWT not configured');
      return c.json({
        success: false,
        error: 'Download service not configured'
      }, 500);
    }

    // Create signed URL using Pinata API
    const expirySeconds = 3600; // 1 hour
    const expiryDate = new Date(Date.now() + expirySeconds * 1000);
    
    try {
      // Call Pinata's signed URL API
      const pinataResponse = await fetch('https://api.pinata.cloud/v3/files/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${pinataJWT}`
        },
        body: JSON.stringify({
          url: `https://${pinataGateway}/ipfs/${pdfCID}`,
          expires: Math.floor(expirySeconds),
          date: Math.floor(Date.now() / 1000),
          method: 'GET'
        })
      });

      if (!pinataResponse.ok) {
        const errorText = await pinataResponse.text();
        console.error('[NFT Download] Pinata API error:', errorText);
        return c.json({
          success: false,
          error: 'Failed to generate download link'
        }, 500);
      }

      const pinataData = await pinataResponse.json();
      console.log('[NFT Download] Pinata signed URL generated successfully');

      return c.json({
        success: true,
        verified: true,
        downloadUrl: pinataData.data,
        expiresIn: expirySeconds,
        message: 'Access granted! Download link expires in 1 hour.'
      });

    } catch (pinataError) {
      console.error('[NFT Download] Pinata API call failed:', pinataError);
      return c.json({
        success: false,
        error: 'Failed to generate download link',
        details: pinataError.message
      }, 500);
    }

  } catch (error) {
    console.error('[NFT Download Error]', error);
    return c.json({
      success: false,
      error: 'Failed to process verification request',
      details: error.message
    }, 500);
  }
});

// ============ NFT BALANCE CHECK ENDPOINT (Optional) ============
app.post('/make-server-2e3ce182/check-nft-balance', async (c) => {
  try {
    const { walletAddress } = await c.req.json();
    
    if (!walletAddress || !walletAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      return c.json(
        { success: false, error: 'Invalid wallet address format' },
        400
      );
    }

    const balanceInfo = await getNFTBalance(walletAddress);
    
    return c.json({
      success: true,
      walletAddress,
      ...balanceInfo
    });

  } catch (error) {
    console.error('[NFT Balance Check Error]', error);
    return c.json({
      success: false,
      error: 'Failed to check NFT balance',
      details: error.message
    }, 500);
  }
});

// ============ STORAGE SETUP ENDPOINT ============
app.post('/make-server-2e3ce182/setup-storage', async (c) => {
  try {
    console.log('[Setup] Setting up storage bucket...');
    
    const bucketSetup = await setupStorageBucket();
    if (!bucketSetup) {
      return c.json({
        success: false,
        error: 'Failed to set up storage bucket'
      }, 500);
    }

    console.log('[Setup] Uploading PDF from IPFS...');
    
    const pdfUpload = await uploadPDFFromIPFS();
    if (!pdfUpload) {
      return c.json({
        success: false,
        error: 'Failed to upload PDF from IPFS',
        message: 'Storage bucket created but PDF upload failed. You may need to retry.'
      }, 500);
    }

    return c.json({
      success: true,
      message: 'Storage setup complete! PDF uploaded successfully.'
    });

  } catch (error) {
    console.error('[Setup Error]', error);
    return c.json({
      success: false,
      error: 'Failed to setup storage',
      details: error.message
    }, 500);
  }
});

// Initialize storage on server start (only once)
if (Deno.env.get('AUTO_SETUP_STORAGE') === 'true') {
  setupStorageBucket()
    .then(() => uploadPDFFromIPFS())
    .then(() => console.log('[Init] Storage auto-setup complete'))
    .catch(err => console.error('[Init] Storage auto-setup failed:', err));
}

Deno.serve(app.fetch);