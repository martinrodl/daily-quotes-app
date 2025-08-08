import QuoteCard from "@/components/QuoteCard";
import ShareButtons from "@/components/ShareButtons";
import Monetization from "@/components/Monetization";
import { Metadata } from "next";

// Dynamická metadata pro lepší SEO
export async function generateMetadata(): Promise<Metadata> {
  const quote = await getQuote();
  
  const title = `"${quote.content}" - ${quote.author} | Citát Dne`;
  const description = `Inspirujte se dnešním citátem od ${quote.author}: "${quote.content}". Nová motivace každý den!`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: quote.dateAdded,
      modifiedTime: quote.dateModified,
      authors: [quote.author],
      tags: quote.tags,
      images: [
        {
          url: `/api/og?quote=${encodeURIComponent(quote.content)}&author=${encodeURIComponent(quote.author)}`,
          width: 1200,
          height: 630,
          alt: `Citát od ${quote.author}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?quote=${encodeURIComponent(quote.content)}&author=${encodeURIComponent(quote.author)}`],
    },
  };
}

// Definice typu pro data z API
interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

// Typy pro různá API
interface QuotableResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

interface ZenQuoteResponse {
  q: string;
  a: string;
  h: string;
}

interface ApiConfig {
  url: string;
  transform: (data: QuotableResponse | ZenQuoteResponse[]) => Quote;
}

// Funkce pro načtení citátu s vylepšeným ISR
// Používáme Next.js fetch s revalidací (Incremental Static Regeneration)
// Stránka se automaticky přegeneruje na serveru po uplynutí času nebo na požádání
async function getQuote(): Promise<Quote> {
  // Pokusíme se načíst z více zdrojů pro lepší spolehlivost
  const apis: ApiConfig[] = [
    {
      url: 'https://api.quotable.io/random',
      transform: (data: QuotableResponse | ZenQuoteResponse[]) => data as QuotableResponse
    },
    {
      url: 'https://zenquotes.io/api/random',
      transform: (data: QuotableResponse | ZenQuoteResponse[]) => {
        const zenData = data as ZenQuoteResponse[];
        return {
          _id: `zen-${Date.now()}`,
          content: zenData[0].q,
          author: zenData[0].a,
          tags: [],
          authorSlug: zenData[0].a.toLowerCase().replace(/\s+/g, '-'),
          length: zenData[0].q.length,
          dateAdded: new Date().toISOString(),
          dateModified: new Date().toISOString(),
        };
      }
    }
  ];

  for (const api of apis) {
    try {
      console.log(`Zkouším API: ${api.url}`);
      const res = await fetch(api.url, {
        next: {
          revalidate: 3600, // Revalidace každou hodinu pro častější obnovení
          tags: ['quote', `quote-${Date.now()}`], // Dynamické tagy
        },
      });

      if (res.ok) {
        const data = await res.json();
        const quote = api.transform(data);
        console.log(`✅ Úspěšně načteno z ${api.url}`);
        return quote;
      } else {
        console.log(`❌ API ${api.url} vrátilo chybu: ${res.status}`);
      }
    } catch (error) {
      console.log(`❌ Chyba při načítání z ${api.url}:`, error);
    }
  }

  // Pokud selžou všechna API, vrátíme záložní citát
  return {
    _id: "fallback",
    content:
      "Úspěch není konečný, neúspěch není fatální: důležitá je odvaha pokračovat.",
    author: "Winston Churchill",
    tags: ["motivace", "úspěch"],
    authorSlug: "winston-churchill",
    length: 78,
    dateAdded: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
}

export default async function HomePage() {
  const quote = await getQuote();

  // JSON-LD strukturovaná data pro SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Citát Dne',
    description: 'Denní motivační citáty a inspirace',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'Quotation',
      text: quote.content,
      author: {
        '@type': 'Person',
        name: quote.author,
      },
      datePublished: quote.dateAdded,
      dateModified: quote.dateModified,
      keywords: quote.tags.join(', '),
    },
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e3f2fd 0%, #e8eaf6 50%, #f3e5f5 100%)'
      }}
    >
      {/* JSON-LD strukturovaná data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
          style={{
            backgroundColor: '#90caf9',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        ></div>
        <div 
          className="absolute top-32 right-16 w-32 h-32 rounded-full opacity-15"
          style={{
            backgroundColor: '#ce93d8',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '0.75s'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-20 w-16 h-16 rounded-full opacity-25"
          style={{
            backgroundColor: '#9fa8da',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '1.5s'
          }}
        ></div>
        <div 
          className="absolute bottom-32 right-10 w-24 h-24 rounded-full opacity-20"
          style={{
            backgroundColor: '#f8bbd9',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            animationDelay: '3s'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <header 
          className="text-center mb-12"
          style={{
            animation: 'fadeInUp 1s ease-out'
          }}
        >
          <div className="mb-4">
            <div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #2196f3 0%, #9c27b0 100%)'
              }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #1976d2 0%, #7b1fa2 50%, #3f51b5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Citát Dne
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Nová inspirace každý den ✨
          </p>
        </header>

        <main 
          className="w-full max-w-4xl"
          style={{
            animation: 'slideUp 0.8s ease-out 0.2s both'
          }}
        >
          <QuoteCard quote={quote.content} author={quote.author} />
          <ShareButtons quote={quote.content} />
        </main>

        <aside className="w-full max-w-4xl mt-12">
          <Monetization />
        </aside>

        <footer className="text-center mt-16 py-6">
          <p className="text-gray-500 text-sm">
            Vytvořeno s ❤️ pomocí Next.js | &copy; {new Date().getFullYear()}{" "}
            DailyQuoteApp
          </p>
        </footer>
      </div>
    </div>
  );
}
