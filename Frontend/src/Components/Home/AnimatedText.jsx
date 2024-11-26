import React from 'react';



export function AnimatedText({ text, className = '' }) {
  return (
    <div className="overflow-hidden">
      <div className={`animate-float ${className}`}>
        {text.split('').map((char, i) => (
          <span
            key={i}
            className="inline-block hover:text-blue-400 hover:transform hover:scale-110 transition-all duration-300"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
    </div>
  );
}