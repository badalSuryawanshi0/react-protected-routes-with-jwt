import React from 'react';


export function ProjectCard({ project, delay }) {
  return (
    <div
      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-semibold text-gray-800">{project.name}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <span className="text-sm font-medium text-indigo-600">{project.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
          style={{ width: `${project.progress}%` }}
        ></div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}