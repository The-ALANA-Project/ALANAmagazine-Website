# ✅ Pinata Integration Complete!

## What Changed

The backend now uses **Pinata's dedicated gateway** with **signed URLs** instead of Supabase Storage for NFT-gated PDF downloads.

---

## 🔑 Configuration Details

### **Pinata Credentials (Hardcoded)**
- **Gateway:** `pink-quick-lizard-297.mypinata.cloud`
- **PDF CID:** `bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu`
- **JWT:** Stored in environment variable `PINATA_JWT`

---

## ✅ Next Steps to Complete Setup

### **1. Add PINATA_JWT to Supabase Environment**

You need to add the Pinata JWT to your Supabase Edge Function environment:

**Go to Supabase Dashboard:**
1. Open your project at: https://supabase.com/dashboard
2. Click **Edge Functions** in the left sidebar
3. Click the **Settings** or **Configuration** tab
4. Look for **"Secrets"** or **"Environment Variables"** section
5. Click **"New secret"** or **"Add variable"**
6. Enter:
   - **Name:** `PINATA_JWT`
   - **Value:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNDE1MTY4MC1lOWViLTQxMjgtYmZiMC0yOTBkOWIyNjEzNzIiLCJlbWFpbCI6ImNvbnRhY3RAdGhlLWFsYW5hLXByb2plY3QueHl6IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA5NTY4ZmNlNDM4MzYzYWIyM2U4Iiwic2NvcGVkS2V5U2VjcmV0IjoiOGQxNzQyOGE1ZjE3M2MzNWZkY2IxNTUwODZkYmU4YzQ3MjNlZDgxMzk4MjlhNTA2YjAwYWNmMDM4YjMyMTBiOCIsImV4cCI6MTgwMjM4OTQxN30.LO7HmpMin3hKsIx-qlgby9V1njIoQ8tuskx2-0HCR5A`
7. Click **"Save"** or **"Create"**
8. **Restart your Edge Function** (may be automatic)

---

### **2. Make Sure PDF is on Pinata**

You mentioned you uploaded the PDF to IPFS Pinata. Make sure:

✅ **CID matches:** `bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu`

If you uploaded a different file or got a different CID, let me know and I'll update the backend code!

---

### **3. Test the Download Flow**

Once you've added the `PINATA_JWT` environment variable:

1. **Go to:** Shop & Archive page
2. **Connect wallet** that owns EARTH Edition NFT
3. **Click:** "Download PDF" button
4. **Should happen:**
   - NFT verification runs ✅
   - Pinata signed URL is generated ✅
   - PDF downloads from Pinata ✅
   - Link expires after 1 hour ✅

---

## 🔄 How It Works Now

```
User Flow:
1. User connects wallet
2. User clicks "Download PDF"
3. Frontend → Backend: "Verify this wallet"
4. Backend → Optimism: "Does this wallet own the NFT?"
5. Optimism → Backend: "Yes! Balance = 1"
6. Backend → Pinata API: "Generate signed URL for this CID"
7. Pinata → Backend: "Here's a signed URL (expires in 1 hour)"
8. Backend → Frontend: "Download link ready!"
9. Frontend → User: Browser downloads PDF
```

---

## 🔐 Security Features

✅ **Private File:** PDF not publicly accessible  
✅ **NFT Gated:** Only verified NFT holders get access  
✅ **Temporary Links:** Signed URLs expire after 1 hour  
✅ **Fresh Verification:** Each download requires new NFT check  
✅ **No Link Sharing:** Expired links can't be shared effectively

---

## 💰 Cost Optimization

**Before:**
- ❌ Supabase paid tier: ~$25/month (for 500MB file)
- ❌ Pinata paid tier: ~$20/month (planned)
- **Total:** ~$45/month

**After:**
- ✅ Supabase free tier: $0 (no longer storing PDF)
- ✅ Pinata paid tier: ~$20/month (stores PDF + provides signed URLs)
- **Total:** ~$20/month 💰 **Save $25/month!**

---

## 🛠️ What Changed in the Code

### **Backend (`/supabase/functions/server/index.tsx`)**

**Old approach (Supabase Storage):**
```typescript
const { data: signedUrlData } = await supabase
  .storage
  .from('make-2e3ce182-magazine-pdfs')
  .createSignedUrl('earth-edition-full.pdf', 3600);
```

**New approach (Pinata Signed URLs):**
```typescript
const pinataResponse = await fetch('https://api.pinata.cloud/v3/files/sign', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${pinataJWT}`
  },
  body: JSON.stringify({
    url: `https://pink-quick-lizard-297.mypinata.cloud/ipfs/${pdfCID}`,
    expires: 3600
  })
});
```

---

## 📋 Troubleshooting

### **If download fails:**

1. **Check environment variable:**
   - Go to Supabase Dashboard → Edge Functions → Secrets
   - Verify `PINATA_JWT` exists and is correct

2. **Check Pinata file:**
   - Go to Pinata Dashboard → Files
   - Verify CID: `bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu` exists

3. **Check browser console:**
   - Open Developer Tools (F12)
   - Look for error messages
   - Share them with me if you see any

4. **Check Edge Function logs:**
   - Supabase Dashboard → Edge Functions → Logs
   - Look for `[NFT Download]` messages
   - Share error messages if you see any

---

## 🎯 Current Status

- ✅ Backend code updated to use Pinata
- ✅ Gateway and CID hardcoded
- ⏳ **WAITING:** You need to add `PINATA_JWT` to Supabase
- ⏳ **THEN:** Test the download flow!

---

## 📞 Need Help?

If something doesn't work:
1. Check the browser console for errors
2. Check Supabase Edge Function logs
3. Share the error messages with me
4. I'll help debug!

Good luck! 🚀
