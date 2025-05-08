
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Youtube, Menu } from 'lucide-react'; // Removed Sun, Moon as they are not used

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Navbar is now always fixed, so isScrolled and isDarkTheme might be simplified or re-evaluated based on new fixed behavior
  // For simplicity, let's assume a consistent theme for the fixed navbar or make it less dependent on scroll position for basic styling.
  // We will make the navbar background slightly transparent when at the top, and solid on scroll, always visible.
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Change background after scrolling 50px
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Base classes for the navbar - always fixed
  const navClasses = `fixed w-full z-50 top-0 start-0 transition-all duration-300 ease-in-out`;
  // Styling for when scrolled vs. at top
  const scrolledNavBg = 'bg-white/90 dark:bg-slate-800/90 backdrop-blur-md shadow-lg';
  const topNavBg = 'bg-transparent'; // Or a very light initial background if preferred
  const navCurrentBg = hasScrolled ? scrolledNavBg : topNavBg;

  // Consistent link colors, improved visibility. Using a slightly bolder font.
  const linkColor = 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold'; // Applied font-semibold
  const mobileLinkColor = 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 font-semibold'; // Applied font-semibold
  const brandColor = 'text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300';
  const socialIconColor = 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400';
  const mobileToggleColor = 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-gray-300 dark:focus:ring-gray-600';
  const mobileMenuBg = 'bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700';

  return (
    <nav className={`${navClasses} ${navCurrentBg}`}>
      <div className="container mx-auto flex flex-wrap justify-between items-center p-4">
        <Link href="/" className={`text-2xl font-bold transition-colors ${brandColor}`}>
          tibetakademi.com
        </Link>

        <button 
          onClick={toggleMobileMenu} 
          type="button" 
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 transition-colors ${mobileToggleColor}`}
          aria-controls="navbar-sticky-content" 
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="w-6 h-6" /> {/* Slightly larger icon */}
        </button>

        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto md:order-1`} id="navbar-sticky-content">
          <ul className={`flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center ${isMobileMenuOpen ? mobileMenuBg : 'bg-transparent'}`}>
            <li>
              <Link href="/" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${linkColor}`}>Ana Sayfa</Link>
            </li>
            <li>
              <Link href="/about" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${linkColor}`}>Hakkımızda</Link>
            </li>
            <li>
              <Link href="/projects" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${linkColor}`}>Projelerimiz</Link>
            </li>
            <li>
              <Link href="/gallery" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${linkColor}`}>Galeri</Link>
            </li>
            <li>
              <Link href="/contact" className={`block py-2 px-3 rounded md:bg-transparent md:p-0 transition-colors ${linkColor}`}>İletişim</Link>
            </li>
          </ul>
          <div className={`flex items-center space-x-4 rtl:space-x-reverse md:ms-6 mt-4 md:mt-0 ${isMobileMenuOpen ? 'pt-4 border-t border-gray-200 dark:border-gray-700' : ''}`}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${socialIconColor} transition-colors`}>
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${socialIconColor} transition-colors`}>
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${socialIconColor} transition-colors`}>
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={`${socialIconColor} transition-colors`}>
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube channel</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

