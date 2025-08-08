import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Daily Quotes',
  description: 'Inspirational articles about mindfulness, motivation, and wisdom',
  openGraph: {
    title: 'Blog | Daily Quotes',
    description: 'Inspirational articles about mindfulness, motivation, and wisdom',
    type: 'website',
  },
}

const blogPosts = [
  {
    slug: 'power-of-daily-inspiration',
    title: 'The Power of Daily Inspiration',
    excerpt: 'How a simple daily quote can transform your mindset and boost productivity',
    date: '2024-12-25',
    readTime: '5 min read'
  },
  {
    slug: 'mindfulness-through-wisdom',
    title: 'Finding Mindfulness Through Ancient Wisdom',
    excerpt: 'Exploring timeless quotes that bring peace and clarity to modern life',
    date: '2024-12-20',
    readTime: '7 min read'
  },
  {
    slug: 'building-resilience',
    title: 'Building Resilience with Motivational Quotes',
    excerpt: 'How inspirational words can help you overcome challenges and grow stronger',
    date: '2024-12-15',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore articles about mindfulness, motivation, and the wisdom found in daily inspiration
          </p>
        </div>

        <div className="grid gap-8 md:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="glass-card p-6 hover:scale-[1.01] transition-all duration-300 hover:shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>

                <div className="mt-4 text-purple-400 group-hover:text-purple-300 transition-colors duration-300 font-medium">
                  Read more →
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            ← Back to Daily Quotes
          </Link>
        </div>
      </div>
    </div>
  )
}
