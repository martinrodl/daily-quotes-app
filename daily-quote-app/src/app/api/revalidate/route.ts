import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

// Tato API route slouží k manuálnímu spuštění revalidace (přegenerování) stránky.
// Bude volána cron jobem na serveru.
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  // Zkontrolujeme, zda se tajný token shoduje s proměnnou prostředí.
  // Toto je ZÁSADNÍ pro bezpečnost, aby kdokoliv nemohl spouštět revalidaci.
  // Na serveru nastavte proměnnou prostředí REVALIDATION_TOKEN na nějakou tajnou hodnotu.
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Spustíme revalidaci pro všechny fetch requesty, které mají tag 'quote'.
    // Tento tag jsme přidali do fetch volání v `page.tsx`.
    revalidateTag('quote');

    // Odpovíme, že vše proběhlo v pořádku.
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    // V případě chyby odpovíme s chybovou hláškou.
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
  }
}
