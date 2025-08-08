import React from 'react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto text-center">
      <blockquote className="text-xl md:text-2xl font-medium text-gray-800">
        <p>"{quote}"</p>
      </blockquote>
      <cite className="block text-right mt-4 text-md text-gray-600">
        - {author}
      </cite>
    </div>
  );
};

export default QuoteCard;
