import React from 'react';




export function HobbyCard({ icon: Icon, title, description }) {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl h-24 transform hover:-translate-y-2 transition-all duration-500"
     
      
    >
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent group-hover:from-blue-900/90 transition-all duration-500" />
      
      <div className="relative h-full p-6 flex flex-col justify-end">
        <Icon className="w-8 h-8 text-blue-400 mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
        <h3 className="text-xl font-semibold text-white mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
          {title}
        </h3>
        <p className="text-gray-300 text-sm transform group-hover:translate-x-2 transition-transform duration-500 delay-75">
          {description}
        </p>
      </div>
    </div>
  );
}