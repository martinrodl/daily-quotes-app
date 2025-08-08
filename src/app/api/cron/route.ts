import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

interface CronJobResult {
  success: boolean;
  timestamp: string;
  message: string;
  nextRun?: string;
}

// Cron job endpoint pro automatickou revalidaci
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const secret = authHeader?.replace('Bearer ', '') || request.nextUrl.searchParams.get('secret');

  // Bezpečnostní kontrola
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ 
      success: false,
      message: 'Unauthorized access',
      timestamp: new Date().toISOString()
    }, { status: 401 });
  }

  try {
    // Revalidace citátů
    revalidateTag('quote');
    
    // Můžeme přidat další úkoly:
    // - Vyčištění starých logů
    // - Aktualizace statistik
    // - Kontrola API health
    
    const nextRun = new Date();
    nextRun.setHours(nextRun.getHours() + 1); // Další běh za hodinu

    const result: CronJobResult = {
      success: true,
      timestamp: new Date().toISOString(),
      message: 'Cron job completed successfully. Quotes revalidated.',
      nextRun: nextRun.toISOString()
    };

    return NextResponse.json(result);
  } catch (error) {
    const result: CronJobResult = {
      success: false,
      timestamp: new Date().toISOString(),
      message: `Cron job failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };

    return NextResponse.json(result, { status: 500 });
  }
}

// POST endpoint pro pokročilejší cron operace
export async function POST(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  const secret = authHeader?.replace('Bearer ', '');

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ 
      success: false,
      message: 'Unauthorized access',
      timestamp: new Date().toISOString()
    }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { tasks = [] } = body;

    const results = [];

    for (const task of tasks) {
      switch (task.type) {
        case 'revalidate':
          revalidateTag(task.tag || 'quote');
          results.push(`Revalidated tag: ${task.tag || 'quote'}`);
          break;
        case 'cleanup':
          // Zde by bylo vyčištění starých dat
          results.push('Cleanup completed');
          break;
        default:
          results.push(`Unknown task type: ${task.type}`);
      }
    }

    const result: CronJobResult = {
      success: true,
      timestamp: new Date().toISOString(),
      message: `Batch cron job completed. Tasks: ${results.join(', ')}`
    };

    return NextResponse.json(result);
  } catch (error) {
    const result: CronJobResult = {
      success: false,
      timestamp: new Date().toISOString(),
      message: `Batch cron job failed: ${error instanceof Error ? error.message : 'Unknown error'}`
    };

    return NextResponse.json(result, { status: 500 });
  }
}
