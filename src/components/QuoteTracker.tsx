'use client'

import { useEffect } from 'react'
import { trackQuoteView } from './Analytics'

interface QuoteTrackerProps {
  author: string
}

export default function QuoteTracker({ author }: QuoteTrackerProps) {
  useEffect(() => {
    trackQuoteView(author)
  }, [author])

  return null
}
