
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ];

  return (
    <header className="w-full py-6 animate-fade-in">
      <div className="container flex justify-between items-center">
        <Logo animate />
        
        <nav className="hidden md:flex space-x-4">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-invett-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
