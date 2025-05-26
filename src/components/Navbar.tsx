'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // This is the height of our navbar (h-16 = 64px)
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
      setActiveSection(href.replace('#', ''));
    }
  };

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl font-bold text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Sushant
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                  after:bg-blue-600 dark:after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 
                  after:transition-transform after:duration-300 after:origin-center
                  ${activeSection === item.href.replace('#', '') ? 'text-blue-600 dark:text-blue-400 after:scale-x-100' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 