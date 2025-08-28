import React, { useState } from 'react';

export default function CodeSnippet({ language = "javascript", children }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative mb-6 rounded-lg">
      <div className="flex justify-between items-center bg-gray-800 rounded-t-lg px-4 py-2 text-xs text-gray-200">
        <span>{language}</span>
        <button 
          onClick={copyToClipboard} 
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded text-white transition-colors"
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="bg-gray-900 overflow-x-auto p-4 rounded-b-lg text-white">
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </div>
  );
}
