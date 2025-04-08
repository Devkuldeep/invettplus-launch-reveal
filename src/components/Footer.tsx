
import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm text-gray-500">
            &copy; {year} InvettPlus. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-invett-primary">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-invett-primary">Terms of Service</a>
            <a href="mailto:info@invettplus.com" className="text-xs text-gray-500 hover:text-invett-primary">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
