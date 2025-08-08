# 📖 Citát Dne - Daily Quotes App

Moderní webová aplikace pro denní inspirativní citáty postavená na Next.js 15 s pokročilými funkcemi pro produkční nasazení.

## ✨ Features

- **Daily Quotes**: Fresh inspirational quotes with fallback API system
- **Stunning Design**: Modern glassmorphism UI with smooth animations
- **Smart Caching**: ISR (Incremental Static Regeneration) for optimal performance  
- **Blog System**: Full MDX-powered blog with rich content and styling
- **SEO Optimized**: Dynamic metadata, Open Graph, structured data, sitemap
- **Analytics Ready**: Google Analytics integration with event tracking
- **PWA Support**: Progressive Web App with offline capabilities
- **RSS Feed**: Syndication for blog content
- **Social Sharing**: Native sharing with tracking analytics
- **Responsive**: Perfect on all devices from mobile to desktop
- **API Monitoring**: Health check and cron job endpoints
- **Performance**: Advanced caching and revalidation strategies

## 🛠️ Technologie

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 (App Router + Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom animations
- **Content**: MDX for rich blog articles with remark-gfm
- **Analytics**: Google Analytics with custom event tracking
- **Images**: @vercel/og for dynamic Open Graph generation
- **SEO**: Advanced metadata, sitemap, robots.txt, RSS
- **Performance**: ISR with tag-based revalidation
- **PWA**: Manifest and service worker ready

## 🚀 Rychlý start

1. **Klonování a instalace:**
```bash
git clone https://github.com/martinrodl/daily-quotes-app
cd daily-quotes-app
npm install
```

2. **Konfigurace prostředí:**
```bash
cp .env.example .env.local
# Upravte proměnné prostředí podle potřeby
```

3. **Spuštění vývojového serveru:**
```bash
npm run dev
```

Aplikace bude dostupná na [http://localhost:3000](http://localhost:3000).

## � Pages & Features

### Main Features
- **🏠 Homepage** (`/`) - Daily inspirational quotes with sharing
- **📝 Blog** (`/blog`) - Articles about mindfulness, motivation, and wisdom
- **📊 Analytics** - Comprehensive tracking of user interactions
- **🔗 RSS Feed** (`/feed.xml`) - Subscribe to blog updates
- **🗺️ Sitemap** (`/sitemap.xml`) - SEO-optimized site structure

### API Endpoints
- **🎯 Health Check** (`/api/health`) - Monitor external API status
- **⏰ Cron Jobs** (`/api/cron`) - Scheduled maintenance and updates  
- **🔄 Revalidation** (`/api/revalidate`) - Manual cache invalidation
- **🖼️ OG Images** (`/api/og`) - Dynamic social media images

### Technical Features
- **Fallback API System**: Quotable.io → ZenQuotes failover
- **Advanced ISR**: Tag-based revalidation and dynamic caching
- **MDX Blog**: Rich content with custom styling components
- **Analytics Tracking**: Quote views, shares, and blog interactions
- **PWA Ready**: Installable with offline capabilities

## 🔧 Konfigurace

### Proměnné prostředí
Zkopírujte `.env.example` do `.env.local` a nastavte:

- `REVALIDATION_TOKEN` - Token pro API revalidaci
- `CRON_SECRET` - Token pro cron job endpointy
- `NEXT_PUBLIC_BASE_URL` - Základní URL aplikace
- `GOOGLE_VERIFICATION` - Google Search Console verifikace

### Cron Jobs
Pro automatické aktualizace nastavte cron job:
```bash
# Každou hodinu
0 * * * * curl -H "Authorization: Bearer YOUR_CRON_SECRET" https://your-app.vercel.app/api/cron
```

## 📦 Deployment

### Vercel (doporučeno)
```bash
npm run build
npx vercel --prod
```

### Docker
```bash
docker build -t daily-quotes-app .
docker run -p 3000:3000 daily-quotes-app
```

## 🔍 Monitoring

- **Health Check:** `/api/health` - Status API a systému
- **Performance:** Built-in Next.js analytics
- **Logs:** Console logging s strukturovanými zprávami

## 🎨 Customizace

### Přidání nových API zdrojů
Upravte `apis` array v `src/app/page.tsx`:
```typescript
const apis: ApiConfig[] = [
  {
    url: 'https://your-api.com/quotes',
    transform: (data) => ({
      // transformace do standardního formátu
    })
  }
];
```

### Styling
- Upravte `src/app/globals.css` pro globální styly
- Komponenty v `src/components/` pro specifické části

## 📱 PWA Funkce

Aplikace podporuje:
- Offline cache
- Install prompt
- App shortcuts
- Background sync (připraveno)

## 🔒 Bezpečnost

- CORS ochrana na API endpoints
- Token-based autentifikace pro admin funkce
- Rate limiting ready
- Input sanitization

## 📈 SEO Features

- Dynamické meta tagy
- Open Graph obrázky
- Twitter Cards
- Strukturovaná data (JSON-LD)
- Sitemap generování

## 🤝 Příspěvky

1. Fork projekt
2. Vytvořte feature branch (`git checkout -b feature/amazing-feature`)
3. Commit změny (`git commit -m 'Add amazing feature'`)
4. Push do branch (`git push origin feature/amazing-feature`)
5. Otevřete Pull Request

## 📄 Licence

MIT License - viz [LICENSE](LICENSE) soubor.

## 🆘 Podpora

Pro otázky a support:
- 📧 Email: support@dailyquotes.com
- 🐛 Issues: [GitHub Issues](https://github.com/martinrodl/daily-quotes-app/issues)
- 📖 Dokumentace: [Wiki](https://github.com/martinrodl/daily-quotes-app/wiki)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
