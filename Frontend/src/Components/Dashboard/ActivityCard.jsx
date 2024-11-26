import React from 'react';
import { GitBranch, BookOpen, FileText } from 'lucide-react';


export function ActivityCard({ activity, delay }) {
  const getIcon = () => {
    switch (activity.type) {
      case 'commit':
        return <GitBranch className="w-4 h-4 text-green-600" />;
      case 'learning':
        return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'article':
        return <FileText className="w-4 h-4 text-purple-600" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex items-start space-x-3 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-2 bg-gray-50 rounded-lg">
        {getIcon()}
      </div>
      <div>
        <p className="text-sm text-gray-800">{activity.message}</p>
        <div className="flex items-center space-x-2 mt-1">
          <span className="text-xs text-gray-500">{activity.project}</span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-xs text-gray-500">{activity.timestamp}</span>
        </div>
      </div>
    </div>
  );
}