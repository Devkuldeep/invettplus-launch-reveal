
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, animate = false }) => {
  return (
    <div className={cn('flex items-center font-display', animate && 'animate-fade-in', className)}>
      <span className="text-2xl font-bold md:text-3xl">
        <span className="gradient-text">Invett</span>
        <span className="text-invett-dark">Plus</span>
      </span>
    </div>
  );
};

export default Logo;
