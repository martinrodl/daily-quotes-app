'use client'

import { useEffect } from 'react'

// Google Analytics tracking
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

export const Analytics = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

  useEffect(() => {
    if (!GA_TRACKING_ID) return

    // Track page views
    const handleRouteChange = () => {
      window.gtag('config', GA_TRACKING_ID, {
        page_location: window.location.href,
        page_title: document.title,
      })
    }

    // Track initial page load
    handleRouteChange()

    // Track SPA navigation
    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [GA_TRACKING_ID])

  if (!GA_TRACKING_ID) return null

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
    </>
  )
}

// Event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackShare = (platform: string) => {
  trackEvent('share', 'quote', platform, 1)
}

export const trackQuoteView = (author: string) => {
  trackEvent('view', 'quote', author, 1)
}

export const trackBlogView = (article: string) => {
  trackEvent('view', 'blog', article, 1)
}
