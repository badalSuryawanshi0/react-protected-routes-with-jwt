import React from 'react';
import { Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { SkillBadge } from './SkillBadge';
import { SocialLink } from './SocialLink';

const skills = [
  'MongoDB', 'Express.js', 'React', 'Node.js',
, 'JavaScript', 'Tailwind CSS', 'Git',
  'REST APIs'
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/badalSuryawanshi0' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/badalsurya52812?t=slBCwMrbWXaoezG0cBIdEw&s=08' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/badal-suryawanshi-a60176237/' },
  { icon: Mail, label: 'Email', href: 'Badalsuryawanshi0@gmail.com' },

];

const learningTechnologies = [
  {
    name: 'Next.js',
    description: 'The React framework for production-grade applications with server-side rendering and static site generation.'
  },
  {
    name: 'PostgreSQL',
    description: 'Advanced open-source relational database with powerful features for complex queries and data integrity.'
  }
];

export default function About() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8 animate-slideUp">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 bg-white text-2xl font-bold text-indigo-600">
                  About Me
                </span>
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '200ms' }}>
              Full-stack developer specializing in the MERN stack. Passionate about creating beautiful, 
              scalable web applications with clean code and exceptional user experiences.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <SkillBadge 
                  key={skill} 
                  name={skill} 
                  delay={300 + index * 100}
                />
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Let's Connect</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {socials.map((social) => (
                <SocialLink
                  key={social.label}
                  icon={social.icon}
                  label={social.label}
                  href={social.href}
                />
              ))}
            </div>
          </div>

          {/* Currently Learning Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Currently Learning
            </h2>
            <div className="space-y-4">
              {learningTechnologies.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="bg-white/80 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-lg font-semibold text-indigo-600 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}