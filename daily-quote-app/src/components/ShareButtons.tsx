"use client"; // This is a client component because it uses window.location

import React from 'react';

interface ShareButtonsProps {
  quote: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ quote }) => {
  // We need to get the current URL on the client side
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedQuote = encodeURIComponent(`"${quote}"`);
  const encodedUrl = encodeURIComponent(pageUrl);

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodedQuote}&url=${encodedUrl}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedQuote}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodedQuote}%20${encodedUrl}`;

  return (
    <div className="flex justify-center items-center space-x-4 mt-6">
      <span className="text-gray-600">Sdílet:</span>
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
        Twitter
      </a>
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
        Facebook
      </a>
      <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
        WhatsApp
      </a>
    </div>
  );
};

export default ShareButtons;
