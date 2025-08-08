import React from 'react';

// A simple component to hold monetization elements
const AdSenseBlock = () => {
  // In a real scenario, you might use next/script to load the AdSense script
  // and then this component would trigger the ad display.
  // For now, it's a placeholder.
  return (
    <div className="bg-gray-100 border border-gray-200 text-center py-10 my-8">
      <p className="text-gray-500">Zde bude reklamní plocha Google AdSense (300x250)</p>
      {/*
        TODO: Uživatel zde vloží svůj AdSense kód.
        Příklad:
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_CLIENT_ID" crossOrigin="anonymous"></Script>
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-YOUR_CLIENT_ID"
             data-ad-slot="YOUR_SLOT_ID"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <Script id="adsense-init">
          (adsbygoogle = window.adsbygoogle || []).push({});
        </Script>
      */}
    </div>
  );
};

const AffiliateLinks = () => {
  return (
    <div className="text-center my-8">
      <h3 className="text-lg font-semibold mb-2">Doporučené knihy</h3>
      <ul className="space-y-1">
        <li>
          <a href="https://www.amazon.com/your-affiliate-link-1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Kniha o motivaci #1
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/your-affiliate-link-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Kniha o úspěchu #2
          </a>
        </li>
      </ul>
      <p className="text-xs text-gray-500 mt-2">(Toto jsou affiliate odkazy. Nákupem podpoříte provoz stránky.)</p>
    </div>
  );
};


const Monetization = () => {
  return (
    <section className="container mx-auto max-w-4xl mt-8 px-4">
      <AdSenseBlock />
      <AffiliateLinks />
    </section>
  );
};

export default Monetization;
