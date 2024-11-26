import React from 'react';
import { Code, Palette, Terminal, Cpu, Coffee, Music, UtensilsCrossed, Database } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { SkillBadge } from './SkillBadge';
import { ProjectCard } from './ProjectCad';
import { HobbyCard } from './HobbyCard';

function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500 p-1 mb-8 animate-bounce-slow">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmx4NGE5ZDNtcWw5dnhqam5vdzV4bmdndnZxdTZrdjdzZTNudWVkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cfuL5gqFDreXxkWQ4o/giphy.gif"
              alt="Profile Cat"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <AnimatedText
            text="Hello, I'm Badal"
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
          />
          
          <div className="animate-fade-in-up">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Creative developer crafting beautiful digital experiences with a passion for clean code and innovative solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
            <SkillBadge icon={Code} label="Web Development" />
            
            <SkillBadge icon={Terminal} label="Backend" />
            <SkillBadge icon={Database} label="Database" />
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            <AnimatedText text="Featured Projects" />
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="AI Image Generator"
              description="A deep learning project that generates artistic images from text descriptions."
              imageUrl="https://images.unsplash.com/photo-1547954575-855750c57bd3?w=800&h=500&fit=crop"
              link="#"
            />
            <ProjectCard
              title="Smart Home Dashboard"
              description="IoT dashboard for monitoring and controlling smart home devices."
              imageUrl="https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop"
              link="#"
            />
          </div>
        </section>

        {/* Fun Facts */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-12">
            <AnimatedText text="When I'm Not Coding..." />
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <HobbyCard
              icon={Music}
              title="Running Enthusiast"
              description="Early morning runs and marathon training keep me energized"
            />
            <HobbyCard
              icon={UtensilsCrossed}
              title="Food Explorer"
              description="Discovering new cuisines and cooking adventures"
            />
            
            <HobbyCard
              icon={Music}
              title="Vinyl Collector"
              description="Building a curated collection of classic albums"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;