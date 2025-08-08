import React from "react";

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="group relative">
      {/* Gradient background blur effect */}
      <div 
        className="absolute rounded-2xl opacity-25 transition-opacity duration-1000 group-hover:opacity-40"
        style={{
          top: '-2px',
          right: '-2px', 
          bottom: '-2px',
          left: '-2px',
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
          filter: 'blur(8px)'
        }}
      ></div>

      {/* Main card */}
      <div 
        className="relative rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center border transition-all duration-500 transform hover:-translate-y-1 hover:shadow-2xl"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Quote icon */}
        <div className="flex justify-center mb-6">
          <div 
            className="rounded-full p-3 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
            }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Quote text */}
        <blockquote className="text-xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8 italic">
          <span 
            className="text-4xl md:text-5xl leading-none"
            style={{ color: '#3b82f6' }}
          >
            &ldquo;
          </span>
          <span className="relative z-10">{quote}</span>
          <span 
            className="text-4xl md:text-5xl leading-none"
            style={{ color: '#3b82f6' }}
          >
            &rdquo;
          </span>
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-center space-x-3">
          <div 
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(to right, transparent, #d1d5db, transparent)'
            }}
          ></div>
          <cite 
            className="text-lg md:text-xl font-semibold not-italic"
            style={{
              background: 'linear-gradient(135deg, #1976d2, #7b1fa2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            {author}
          </cite>
          <div 
            className="h-px flex-1"
            style={{
              background: 'linear-gradient(to right, transparent, #d1d5db, transparent)'
            }}
          ></div>
        </div>

        {/* Decorative elements */}
        <div 
          className="absolute top-4 left-4 w-8 h-8 rounded-tl-lg opacity-50"
          style={{ 
            borderTop: '2px solid #93c5fd',
            borderLeft: '2px solid #93c5fd'
          }}
        ></div>
        <div 
          className="absolute top-4 right-4 w-8 h-8 rounded-tr-lg opacity-50"
          style={{ 
            borderTop: '2px solid #c4b5fd',
            borderRight: '2px solid #c4b5fd'
          }}
        ></div>
        <div 
          className="absolute bottom-4 left-4 w-8 h-8 rounded-bl-lg opacity-50"
          style={{ 
            borderBottom: '2px solid #93c5fd',
            borderLeft: '2px solid #93c5fd'
          }}
        ></div>
        <div 
          className="absolute bottom-4 right-4 w-8 h-8 rounded-br-lg opacity-50"
          style={{ 
            borderBottom: '2px solid #c4b5fd',
            borderRight: '2px solid #c4b5fd'
          }}
        ></div>
      </div>
    </div>
  );
};

export default QuoteCard;
