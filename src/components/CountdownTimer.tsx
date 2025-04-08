
import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  // Set launch date to 30 days from now
  const calculateTargetDate = () => {
    const now = new Date();
    const target = new Date(now);
    target.setDate(now.getDate() + 30);
    return target;
  };

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-xl font-medium text-invett-dark">Launching In</h3>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {timeUnits.map(({ label, value }, index) => (
          <div 
            key={label} 
            className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md"
            style={{ animationDelay: `${0.5 + index * 0.1}s` }}
          >
            <span className="text-2xl md:text-3xl font-bold gradient-text">{value.toString().padStart(2, '0')}</span>
            <span className="text-sm font-medium text-gray-500">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
