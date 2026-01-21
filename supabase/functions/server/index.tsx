import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
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

Deno.serve(app.fetch);