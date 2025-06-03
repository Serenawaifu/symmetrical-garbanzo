// app/success/page.tsx

import React from 'react';

const SuccessPage: React.FC = () => {
  return (
    <div className="px-6 py-12">
      <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
      <p>Thank you for your purchase. Your order is being processed.</p>
    </div>
  );
};

export default SuccessPage;
