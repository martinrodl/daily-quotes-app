import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

interface RevalidationResult {
  revalidated: boolean;
  timestamp: string;
  actions: string[];
}

interface RevalidationRequest {
  tags?: string[];
  paths?: string[];
}

// Vylepšená API route pro manuální revalidaci s více možnostmi
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");

  // Bezpečnostní kontrola
  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const result: RevalidationResult = {
      revalidated: true,
      timestamp: new Date().toISOString(),
      actions: [],
    };

    // Revalidace podle tagu
    if (tag) {
      revalidateTag(tag);
      result.actions.push(`Revalidated tag: ${tag}`);
    } else {
      // Výchozí revalidace všech quote tagů
      revalidateTag("quote");
      result.actions.push("Revalidated tag: quote");
    }

    // Revalidace podle path
    if (path) {
      revalidatePath(path);
      result.actions.push(`Revalidated path: ${path}`);
    } else {
      // Výchozí revalidace domovské stránky
      revalidatePath("/");
      result.actions.push("Revalidated path: /");
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error during revalidation",
        error: err instanceof Error ? err.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

// POST endpoint pro pokročilejší revalidaci
export async function POST(request: NextRequest) {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    const body: RevalidationRequest = await request.json();
    const { tags = [], paths = [] } = body;

    const result: RevalidationResult = {
      revalidated: true,
      timestamp: new Date().toISOString(),
      actions: [],
    };

    // Revalidace více tagů
    for (const tag of tags) {
      revalidateTag(tag);
      result.actions.push(`Revalidated tag: ${tag}`);
    }

    // Revalidace více cest
    for (const path of paths) {
      revalidatePath(path);
      result.actions.push(`Revalidated path: ${path}`);
    }

    return NextResponse.json(result);
  } catch (err) {
    return NextResponse.json(
      {
        message: "Error during batch revalidation",
        error: err instanceof Error ? err.message : "Unknown error",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
