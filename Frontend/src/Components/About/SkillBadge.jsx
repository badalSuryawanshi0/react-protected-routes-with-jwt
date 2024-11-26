import React from 'react';


export function SkillBadge({ name, delay }) {
  return (
    <div
      className="animate-fadeIn opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium hover:bg-indigo-200 transition-colors duration-300">
        {name}
      </div>
    </div>
  );
}