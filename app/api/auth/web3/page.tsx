// app/auth/signin/page.tsx

import { ethers } from 'ethers';

const handleWeb3SignIn = async () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    // Call your Web3 login API
    const response = await fetch('/api/auth/web3', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address }),
    });

    if (response.ok) {
      // Handle successful login
      console.log('Logged in with Web3:', address);
    } else {
      console.error('Web3 login failed');
    }
  } else {
    console.error('No Ethereum provider found');
  }
};

// Add this button in the return statement of SignIn component
<button
  type="button"
  onClick={handleWeb3SignIn}
  className="p-2 bg-green-500 text-white rounded"
>
  Sign in with Web3
</button>
