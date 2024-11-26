import React from 'react'



export function SkillBadge({ icon: Icon, label }) {
  return (
    <div className="group flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
      <Icon className="w-5 h-5 text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <span className="text-sm text-gray-300 group-hover:text-white">{label}</span>
    </div>
  );
}