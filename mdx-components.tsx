import { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-8 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-3 mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-300 mb-4 leading-relaxed text-lg">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="text-gray-300 mb-4 pl-6 space-y-2">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="list-disc leading-relaxed">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-400 pl-6 my-6 italic text-purple-200 text-xl leading-relaxed">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-800 text-purple-300 px-2 py-1 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-800 text-gray-300 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-purple-400 hover:text-purple-300 underline transition-colors duration-300"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="text-white font-bold">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="text-purple-200 italic">
        {children}
      </em>
    ),
    hr: () => (
      <hr className="border-gray-600 my-8" />
    ),
    ...components,
  }
}
