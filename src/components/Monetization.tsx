import React from "react";

// A simple component to hold monetization elements
const AdSenseBlock = () => {
  // In a real scenario, you might use next/script to load the AdSense script
  // and then this component would trigger the ad display.
  // For now, it's a placeholder.
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl text-center py-12 my-8 shadow-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>
        <p className="text-gray-600 font-medium">
          Reklamní plocha Google AdSense (300x250)
        </p>
        <p className="text-sm text-gray-500">Podpořte provoz stránky</p>
      </div>
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
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4 shadow-lg">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Doporučené knihy
        </h3>
        <p className="text-gray-600">
          Objevte knihy, které vás inspirují k růstu
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="https://www.amazon.com/your-affiliate-link-1"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Kniha o motivaci #1</h4>
              <p className="text-sm opacity-90">Cesta k úspěchu</p>
            </div>
          </div>
        </a>

        <a
          href="https://www.amazon.com/your-affiliate-link-2"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-green-500 to-blue-600 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-lg p-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold">Kniha o úspěchu #2</h4>
              <p className="text-sm opacity-90">Pozitivní myšlení</p>
            </div>
          </div>
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6 text-center italic">
        💝 Toto jsou affiliate odkazy. Nákupem podpoříte provoz stránky a
        pomůžete nám přinášet více inspirativního obsahu.
      </p>
    </div>
  );
};

const Monetization = () => {
  return (
    <section className="container mx-auto max-w-4xl mt-12 px-4 space-y-8">
      <AdSenseBlock />
      <AffiliateLinks />
    </section>
  );
};

export default Monetization;
