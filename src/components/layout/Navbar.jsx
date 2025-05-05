import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-800">
          Intel IoT Club
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
          <Link to="/projects" className="hover:text-black transition-colors">Projects</Link>
          <Link to="/events" className="hover:text-black transition-colors">Events</Link>
          <Link to="/team" className="hover:text-black transition-colors">Team</Link>
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>

        {/* Hamburger Menu Button - Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-3">
            <Link to="/" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/projects" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>Projects</Link>
            <Link to="/events" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>Events</Link>
            <Link to="/team" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>Team</Link>
            <Link to="/contact" className="py-2 hover:text-black transition-colors" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;