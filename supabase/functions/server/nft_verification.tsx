/**
 * NFT Verification Helper
 * Verifies if a wallet address owns an NFT from a specific contract on Optimism
 */

const OPTIMISM_RPC_URL = 'https://mainnet.optimism.io';
const NFT_CONTRACT_ADDRESS = '0x1efbaF705Ac7e8588148F06a369eB43935F1bEb9';

// ERC-721 balanceOf function signature
const BALANCE_OF_SIGNATURE = '0x70a08231';

/**
 * Check if a wallet owns at least one NFT from the EARTH Edition contract
 * @param walletAddress - The wallet address to check
 * @returns Promise<boolean> - True if wallet owns at least one NFT
 */
export async function verifyNFTOwnership(walletAddress: string): Promise<boolean> {
  try {
    // Validate wallet address format
    if (!walletAddress || !walletAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      console.error('[NFT Verify] Invalid wallet address format:', walletAddress);
      return false;
    }

    // Prepare the call data for balanceOf(address)
    // Remove '0x' from address and pad to 32 bytes (64 hex chars)
    const paddedAddress = walletAddress.slice(2).padStart(64, '0');
    const callData = BALANCE_OF_SIGNATURE + paddedAddress;

    console.log('[NFT Verify] Checking balance for wallet:', walletAddress);
    console.log('[NFT Verify] Contract:', NFT_CONTRACT_ADDRESS);

    // Make RPC call to Optimism
    const response = await fetch(OPTIMISM_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_call',
        params: [
          {
            to: NFT_CONTRACT_ADDRESS.toLowerCase(),
            data: callData,
          },
          'latest',
        ],
        id: 1,
      }),
    });

    if (!response.ok) {
      console.error('[NFT Verify] RPC request failed:', response.status);
      return false;
    }

    const result = await response.json();
    
    if (result.error) {
      console.error('[NFT Verify] RPC error:', result.error);
      return false;
    }

    // Parse the balance from hex result
    const balanceHex = result.result;
    const balance = parseInt(balanceHex, 16);

    console.log('[NFT Verify] NFT balance:', balance);

    // Return true if balance > 0
    return balance > 0;
  } catch (error) {
    console.error('[NFT Verify] Unexpected error:', error);
    return false;
  }
}

/**
 * Get detailed NFT ownership information
 * @param walletAddress - The wallet address to check
 * @returns Promise<{ owns: boolean; balance: number }> - Ownership details
 */
export async function getNFTBalance(walletAddress: string): Promise<{ owns: boolean; balance: number }> {
  try {
    if (!walletAddress || !walletAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      return { owns: false, balance: 0 };
    }

    const paddedAddress = walletAddress.slice(2).padStart(64, '0');
    const callData = BALANCE_OF_SIGNATURE + paddedAddress;

    const response = await fetch(OPTIMISM_RPC_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_call',
        params: [
          {
            to: NFT_CONTRACT_ADDRESS.toLowerCase(),
            data: callData,
          },
          'latest',
        ],
        id: 1,
      }),
    });

    const result = await response.json();
    
    if (result.error) {
      return { owns: false, balance: 0 };
    }

    const balance = parseInt(result.result, 16);
    
    return {
      owns: balance > 0,
      balance,
    };
  } catch (error) {
    console.error('[NFT Balance] Error:', error);
    return { owns: false, balance: 0 };
  }
}
