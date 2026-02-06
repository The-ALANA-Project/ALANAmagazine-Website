/**
 * Storage Setup Script
 * Run this once to set up the Supabase Storage bucket for magazine PDFs
 */

import { createClient } from "npm:@supabase/supabase-js@2";

const BUCKET_NAME = 'make-2e3ce182-magazine-pdfs';

export async function setupStorageBucket() {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('[Storage Setup] Missing Supabase credentials');
    return false;
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    // Check if bucket already exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();
    
    if (listError) {
      console.error('[Storage Setup] Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.name === BUCKET_NAME);

    if (bucketExists) {
      console.log('[Storage Setup] Bucket already exists:', BUCKET_NAME);
      return true;
    }

    // Create the bucket (private - requires signed URLs)
    const { data, error } = await supabase.storage.createBucket(BUCKET_NAME, {
      public: false,
      fileSizeLimit: 104857600, // 100MB limit
      allowedMimeTypes: ['application/pdf']
    });

    if (error) {
      console.error('[Storage Setup] Error creating bucket:', error);
      return false;
    }

    console.log('[Storage Setup] Successfully created bucket:', BUCKET_NAME);
    return true;

  } catch (error) {
    console.error('[Storage Setup] Unexpected error:', error);
    return false;
  }
}

// Upload PDF from IPFS URL to Supabase Storage
export async function uploadPDFFromIPFS() {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('[PDF Upload] Missing Supabase credentials');
    return false;
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  try {
    console.log('[PDF Upload] Fetching PDF from IPFS...');
    
    // Fetch the PDF from IPFS
    const ipfsUrl = 'https://pink-quick-lizard-297.mypinata.cloud/ipfs/bafybeibzbr6ob7q7ymhsdivf66hrsgdy4kzghhzq6kht2gkyj2jd7o72iu';
    const response = await fetch(ipfsUrl);
    
    if (!response.ok) {
      console.error('[PDF Upload] Failed to fetch PDF from IPFS');
      return false;
    }

    const pdfBlob = await response.blob();
    console.log('[PDF Upload] PDF fetched, size:', pdfBlob.size, 'bytes');

    // Upload to Supabase Storage
    console.log('[PDF Upload] Uploading to Supabase Storage...');
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload('earth-edition-full.pdf', pdfBlob, {
        contentType: 'application/pdf',
        upsert: true // Replace if exists
      });

    if (error) {
      console.error('[PDF Upload] Error uploading PDF:', error);
      return false;
    }

    console.log('[PDF Upload] Successfully uploaded PDF:', data);
    return true;

  } catch (error) {
    console.error('[PDF Upload] Unexpected error:', error);
    return false;
  }
}
