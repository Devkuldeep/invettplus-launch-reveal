
import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-md h-64 md:h-80 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main circle */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-invett-primary/20 to-invett-secondary/20 animate-pulse-slow"></div>
        
        {/* Orbital rings */}
        <div className="absolute inset-0 rounded-full border-2 border-invett-primary/10 animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute inset-4 rounded-full border-2 border-invett-secondary/10 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}></div>
        
        {/* Floating elements on orbit */}
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <div className="w-6 h-6 bg-invett-primary/30 rounded-full animate-float"></div>
        </div>
        <div className="absolute bottom-4 right-10">
          <div className="w-8 h-8 bg-invett-secondary/30 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute left-10 top-1/2">
          <div className="w-4 h-4 bg-invett-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Center logo placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-white shadow-lg flex items-center justify-center p-4 animate-float" style={{ animationDelay: '1.5s' }}>
            <span className="text-2xl md:text-3xl font-bold gradient-text">i+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIllustration;
