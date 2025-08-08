import QuoteCard from '@/components/QuoteCard';
import ShareButtons from '@/components/ShareButtons';
import Monetization from '@/components/Monetization';

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

// Funkce pro načtení citátu
// Používáme Next.js fetch s revalidací (Incremental Static Regeneration)
// Stránka se automaticky přegeneruje na serveru po uplynutí 24 hodin
async function getQuote(): Promise<Quote> {
  const res = await fetch('https://api.quotable.io/random', {
    next: {
      revalidate: 86400, // 24 hodin v sekundách
      tags: ['quote'], // Tag pro on-demand revalidaci
    },
    cache: 'no-store', // Zajistí, že se vždy pokusí načíst nová data, pokud je cache neplatná
  });

  if (!res.ok) {
    // V případě chyby můžeme vrátit záložní citát
    return {
      _id: 'error',
      content: 'Chyba při načítání citátu. Zkuste to prosím později.',
      author: 'Systém',
      tags: [],
      authorSlug: '',
      length: 0,
      dateAdded: '',
      dateModified: '',
    };
  }

  const data = await res.json();
  return data;
}

export default async function HomePage() {
  const quote = await getQuote();

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Citát Dne</h1>
        <p className="text-md text-gray-600 mt-2">Nová inspirace každý den</p>
      </header>

      <main className="w-full max-w-4xl">
        <QuoteCard quote={quote.content} author={quote.author} />
        <ShareButtons quote={quote.content} />
      </main>

      <aside className="w-full max-w-4xl mt-8">
        <Monetization />
      </aside>

      <footer className="text-center mt-12 py-4">
        <p className="text-gray-500 text-sm">
          Vytvořeno s ❤️ pomocí Next.js | &copy; {new Date().getFullYear()} DailyQuoteApp
        </p>
      </footer>
    </div>
  );
}
