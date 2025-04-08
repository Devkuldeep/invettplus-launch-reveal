
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroIllustration from '@/components/HeroIllustration';
import CountdownTimer from '@/components/CountdownTimer';
import SubscribeForm from '@/components/SubscribeForm';
import BackgroundElements from '@/components/BackgroundElements';
import { Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-invett-light font-sans relative">
      <BackgroundElements />
      <Header />
      
      <main className="flex-grow container flex flex-col items-center justify-center py-8 px-4 md:py-16">
        <div className="w-full max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-invett-primary/10 text-invett-primary text-sm font-medium mb-4 animate-fade-in">
              <Clock className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The Future of <span className="gradient-text">Innovation</span> is Almost Here
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're working hard to bring you a revolutionary platform that will transform how you interact with technology. Stay tuned for the big reveal.
            </p>
          </div>
          
          <HeroIllustration />
          
          <CountdownTimer />
          
          <div className="space-y-4">
            <p className="text-gray-600 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Be the first to know when we launch. No spam, just important updates.
            </p>
            <SubscribeForm />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {[
              {
                title: 'Innovative Solutions',
                description: 'Cutting-edge technology to solve complex problems efficiently.'
              },
              {
                title: 'User-Centered Design',
                description: 'Beautiful interfaces designed with the user experience in mind.'
              },
              {
                title: 'Advanced Analytics',
                description: 'Powerful insights to help you make data-driven decisions.'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 gradient-text">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
