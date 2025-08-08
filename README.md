# 📖 Citát Dne - Daily Quotes App

Moderní webová aplikace pro denní inspirativní citáty postavená na Next.js 15 s pokročilými funkcemi pro produkční nasazení.

## ✨ Funkce

- 🎨 **Moderní design** s gradientním pozadím a glassmorphism efekty
- 🔄 **ISR (Incremental Static Regeneration)** pro optimální výkon
- 📱 **PWA podpora** s offline funkcionalitou
- 🌐 **Open Graph obrázky** dynamicky generované
- 🔍 **SEO optimalizované** s strukturovanými daty
- 📊 **Health monitoring** s API status kontrolou
- ⏰ **Cron job podpora** pro automatické aktualizace
- 🚀 **Multi-API fallback** pro maximální spolehlivost
- 📤 **Sociální sdílení** (Twitter, Facebook, WhatsApp)
- 💰 **Monetizace ready** (AdSense, affiliate odkazy)

## 🛠️ Technologie

- **Framework:** Next.js 15 s App Router
- **Styling:** Tailwind CSS v4
- **TypeScript:** Plná type safety
- **OG Images:** @vercel/og
- **Deployment:** Vercel ready

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

## 📊 API Endpointy

### Health Check
```bash
GET /api/health
```
Vrací status aplikace a dostupnost externích API.

### Revalidace
```bash
GET /api/revalidate?secret=YOUR_TOKEN&tag=quote
POST /api/revalidate
```
Umožňuje manuální revalidaci cache.

### Cron Jobs
```bash
GET /api/cron?secret=YOUR_CRON_SECRET
POST /api/cron
```
Automatické úkoly pro údržbu aplikace.

### Open Graph obrázky
```bash
GET /api/og?quote=TEXT&author=AUTHOR
```
Dynamicky generuje OG obrázky pro social media.

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
