import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const quote = searchParams.get('quote') || 'Inspirace pro dnešní den';
    const author = searchParams.get('author') || 'Neznámý autor';
    
    // Zkrácení citátu pokud je příliš dlouhý
    const truncatedQuote = quote.length > 120 ? quote.substring(0, 117) + '...' : quote;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
          }}
        >
          {/* Background decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              left: '50px',
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '150px',
              right: '80px',
              width: '120px',
              height: '120px',
              background: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '50%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '100px',
              left: '100px',
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.12)',
              borderRadius: '50%',
            }}
          />

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              maxWidth: '1000px',
              margin: '0 60px',
            }}
          >
            {/* Quote icon */}
            <div
              style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                &ldquo;
              </div>
            </div>

            {/* Quote text */}
            <div
              style={{
                fontSize: '42px',
                fontWeight: '300',
                color: '#1f2937',
                lineHeight: '1.4',
                marginBottom: '40px',
                fontStyle: 'italic',
              }}
            >
              &ldquo;{truncatedQuote}&rdquo;
            </div>

            {/* Author */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '28px',
                fontWeight: '600',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              — {author}
            </div>
          </div>

          {/* Site branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: '500',
            }}
          >
            Citát Dne
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: unknown) {
    const error = e instanceof Error ? e.message : 'Unknown error';
    console.log(`Failed to generate OG image: ${error}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
