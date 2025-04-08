
import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Gradient blob top right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-invett-primary/20 to-invett-secondary/20 rounded-full filter blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
      
      {/* Gradient blob bottom left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-invett-primary/10 to-invett-secondary/10 rounded-full filter blur-3xl opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
      
      {/* Moving shapes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border-2 border-invett-primary/20 rounded-xl animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-12 h-12 border-2 border-invett-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-invett-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmMWYxZjEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwem0wIDMwVjMwSDB2MzBoMzB6IiBmaWxsPSIjZjlmOWY5Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
    </div>
  );
};

export default BackgroundElements;
