import Link from 'next/link'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-4"
          >
            ← Back to Blog
          </Link>
        </nav>

        <article className="glass-card p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            {children}
          </div>
        </article>

        <div className="text-center mt-8 space-x-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            ← More Articles
          </Link>
          <span className="text-gray-500">•</span>
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Daily Quotes →
          </Link>
        </div>
      </div>
    </div>
  )
}
