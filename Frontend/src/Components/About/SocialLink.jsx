import React from 'react';



export function SocialLink({ icon: Icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-indigo-50 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors duration-300">
        <Icon className="h-5 w-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
      </div>
      <span className="text-gray-600 group-hover:text-indigo-600 transition-colors duration-300">{label}</span>
    </a>
  );
}