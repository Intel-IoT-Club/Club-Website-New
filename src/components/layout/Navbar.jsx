import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-tight text-gray-800">
          Intel IoT Club
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <Link to="/about" className="hover:text-black transition-colors">About</Link>
          <Link to="/projects" className="hover:text-black transition-colors">Projects</Link>
          <Link to="/events" className="hover:text-black transition-colors">Events</Link>
          <Link to="/team" className="hover:text-black transition-colors">Team</Link>
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
