import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dailyquotes.app'
  
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/power-of-daily-inspiration`,
      lastModified: new Date('2024-12-25'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/mindfulness-through-wisdom`,
      lastModified: new Date('2024-12-20'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/building-resilience`,
      lastModified: new Date('2024-12-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  return routes
}
