# 🗄️ Storage Setup Guide

## Quick Start

To initialize the NFT-gated download system for the EARTH Edition:

### 1. Navigate to the Setup Page

Visit: **`https://your-site.com/setup-storage`**

Or manually type `/setup-storage` in your browser's address bar while on your site.

### 2. Click "Run Setup"

Click the big button that says **"Run Setup"**

### 3. Wait for Completion

The setup process will:
- ✅ Create the storage bucket (if it doesn't exist)
- ✅ Download the PDF from IPFS (~50MB, may take a minute)
- ✅ Upload it to Supabase Storage
- ✅ Show you a success message

### 4. Test the Download

After setup completes:
1. Go to **Shop & Archive** page
2. Connect a wallet that owns an EARTH Edition NFT
3. Click **"Download PDF"** on the EARTH Edition card
4. The PDF should download! 🎉

---

## What This Does

### Before Setup:
- ❌ NFT verification works, but PDF download fails
- ❌ No storage bucket exists
- ❌ PDF is only on IPFS

### After Setup:
- ✅ NFT verification works perfectly
- ✅ Private storage bucket created
- ✅ PDF stored securely in Supabase
- ✅ Temporary signed URLs generated for verified users
- ✅ Links expire after 1 hour (security!)

---

## Technical Details

**What gets created:**
- **Bucket Name:** `make-2e3ce182-magazine-pdfs`
- **Bucket Type:** Private (not publicly accessible)
- **File Name:** `earth-edition-full.pdf`
- **File Size:** ~50MB
- **Source:** IPFS (Pinata gateway)

**How it works:**
1. User connects wallet with EARTH Edition NFT
2. Frontend checks NFT balance on Optimism
3. User clicks "Download PDF"
4. Backend re-verifies NFT ownership
5. Backend generates temporary signed URL (1 hour expiry)
6. User downloads the PDF
7. URL expires automatically

---

## Troubleshooting

### "Failed to connect to setup endpoint"
- Make sure your Supabase Edge Function is deployed
- Check that environment variables are set (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

### "Failed to upload PDF from IPFS"
- IPFS gateway might be slow, try again
- Check your internet connection
- The PDF is large (~50MB), be patient

### "Storage bucket created but PDF upload failed"
- You can run the setup again - it will retry the upload
- The bucket already exists, so it will skip that step

### Still having issues?
- Check the browser console for detailed error messages
- Check the Supabase Edge Function logs
- Verify the IPFS URL is still accessible

---

## Security Notes

🔒 **Why private bucket?**
- Prevents unauthorized access
- Only verified NFT holders get access
- Temporary signed URLs can't be shared (they expire)

🔒 **Why signed URLs?**
- They expire after 1 hour
- Each download requires fresh NFT verification
- Prevents link sharing

---

## After Setup is Complete

You can:
- **Hide the setup page** - it's only needed once
- **Remove the route** from `/src/app/routes.tsx` if you want
- **Keep it accessible** - safe to run multiple times (it's idempotent)

The setup page is at `/setup-storage` - it's not linked in the navigation, so users won't find it unless you share the URL.

---

## NFT Contract Details

**Network:** Optimism Mainnet  
**Contract:** `0x1efbaF705Ac7e8588148F06a369eB43935F1bEb9`  
**Type:** ERC-721  
**Verification:** Direct RPC call to Optimism

If this is the wrong contract address, update it in:
`/supabase/functions/server/nft_verification.tsx`

---

## Need Help?

If you encounter any issues:
1. Check the setup page for detailed error messages
2. Check browser console for frontend errors
3. Check Supabase Edge Function logs for backend errors
4. Verify all environment variables are set correctly

Good luck! 🚀
