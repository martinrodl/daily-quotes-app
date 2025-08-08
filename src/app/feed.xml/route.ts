import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dailyquotes.app'
  
  const blogPosts = [
    {
      title: 'The Power of Daily Inspiration',
      slug: 'power-of-daily-inspiration',
      description: 'How a simple daily quote can transform your mindset and boost productivity',
      date: '2024-12-25T00:00:00.000Z',
      author: 'Daily Quotes Team'
    },
    {
      title: 'Finding Mindfulness Through Ancient Wisdom',
      slug: 'mindfulness-through-wisdom', 
      description: 'Exploring timeless quotes that bring peace and clarity to modern life',
      date: '2024-12-20T00:00:00.000Z',
      author: 'Daily Quotes Team'
    },
    {
      title: 'Building Resilience with Motivational Quotes',
      slug: 'building-resilience',
      description: 'How inspirational words can help you overcome challenges and grow stronger',
      date: '2024-12-15T00:00:00.000Z',
      author: 'Daily Quotes Team'
    }
  ]

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Daily Quotes Blog</title>
    <description>Inspirational articles about mindfulness, motivation, and wisdom</description>
    <link>${baseUrl}/blog</link>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    ${blogPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="false">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>info@dailyquotes.app (${post.author})</author>
    </item>`).join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
