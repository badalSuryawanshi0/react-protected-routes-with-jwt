import React from 'react';
import { 
  Code2, BookOpen, Coffee, Brain, 
  Timer, Calendar, Github, BarChart3 
} from 'lucide-react';
import { StatCard } from './StatCard';
import { ActivityCard } from './ActivityCard';
import { ProjectCard } from './ProjectCard';

const stats = [
  { icon: Code2, label: 'Lines of Code', value: '125,431' },
  { icon: Coffee, label: 'Coffee Consumed', value: '842 cups' },
  { icon: BookOpen, label: 'Articles Written', value: '24' },
  { icon: Brain, label: 'Skills Learned', value: '37' },
];

const recentProjects = [
  {
    name: 'E-Commerce Platform',
    description: 'Full-stack MERN application with real-time updates',
    progress: 25,
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
  },
  {
    name: 'Task Management API',
    description: 'RESTful API with TypeScript and Express',
    progress: 65,
    tech: ['TypeScript', 'Express', 'PostgreSQL'],
  },
  {
    name: 'Portfolio Website',
    description: 'Modern portfolio with Next.js and Tailwind',
    progress: 95,
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'AI Chat Application',
    description: 'Real-time chat app with AI integration',
    progress: 45,
    tech: ['React', 'OpenAI API', 'WebSocket'],
  },
  {
    name: 'DevOps Dashboard',
    description: 'Monitoring and analytics platform',
    progress: 30,
    tech: ['Vue.js', 'D3.js', 'AWS'],
  },
  {
    name: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application',
    progress: 75,
    tech: ['React Native', 'Firebase', 'Redux'],
  }
];

const recentActivity = [
  {
    type: 'learning',
    message: 'Completed authentication middleware',
    timestamp: '2 hours ago',
    project: 'E-Commerce Platform',
  },
  {
    type: 'learning',
    message: 'Completed Advanced PostgreSQL course',
    timestamp: '5 hours ago',
    project: 'Self-Development',
  },
  {
    type: 'article',
    message: 'Published "Understanding React Server Components"',
    timestamp: '1 day ago',
    project: 'Tech Blog',
  },
  {
    type: 'commit',
    message: 'Implemented real-time chat features',
    timestamp: '1 day ago',
    project: 'AI Chat Application',
  },
  {
    type: 'learning',
    message: 'Started AWS Solutions Architect course',
    timestamp: '2 days ago',
    project: 'Cloud Computing',
  },
  {
    type: 'commit',
    message: 'Fixed responsive design issues',
    timestamp: '2 days ago',
    project: 'Portfolio Website',
  },
  {
    type: 'article',
    message: 'Drafted "Microservices with Node.js"',
    timestamp: '3 days ago',
    project: 'Tech Blog',
  },
  {
    type: 'learning',
    message: 'Completed React Native Animation workshop',
    timestamp: '4 days ago',
    project: 'Mobile Development',
  }
];

export default function Dashboard() {
  return (
    <div className="min-h-screen  p-4 pt-24">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 animate-slideUp">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, Developer!</h1>
              <p className="text-gray-600">Here's what's happening with your projects</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Schedule</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                <Timer className="w-4 h-4 mr-2" />
                <span>Time Log</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Projects</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentProjects.map((project, index) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {recentActivity.map((activity, index) => (
                  <ActivityCard
                    key={`${activity.type}-${index}`}
                    activity={activity}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            {/* GitHub Activity */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">GitHub Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Github className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Contributions</span>
                  </div>
                  <span className="font-semibold text-gray-800">1,337</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-600">Repositories</span>
                  </div>
                  <span className="font-semibold text-gray-800">42</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}