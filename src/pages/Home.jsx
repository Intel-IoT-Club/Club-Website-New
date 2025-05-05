import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Hero3D from "../components/Hero3D";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('/circuit-board-pattern.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-indigo-900/70"></div>
        
        <div className="container relative z-10 mx-auto  px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300 mb-10">
              Empowering Innovation through Intel IoT
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Exploring the intersection of hardware, software, and connectivity
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 mt-12 px-8 py-4 rounded-lg shadow-lg transition duration-300 ease-in-out">
                Join the Club
              </Button>
            </Link>
          </div>
        </div>

      <Hero3D className="w-full h-[10vh]" />
      <div className="container relative z-10 mx-auto px-4">

      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl text-blue-200 font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-blue-300 opacity-1">Explore the future of IoT and technology with us.</p>
      </div>
      </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Workshops</h3>
              <p className="text-muted-foreground">Regular workshops on IoT devices, sensor integration, and cloud connectivity with Intel technology.</p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M17 18h1"></path>
                  <path d="M12 18h1"></path>
                  <path d="M7 18h1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-muted-foreground">Collaborative projects building real-world IoT applications with guidance from experienced mentors.</p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                  <path d="M9 12v6"></path>
                  <path d="M13 12v6"></path>
                  <path d="M14 7.5c-1 0-1.64.4-2 1-.36-.6-1-1-2-1-1.39 0-2 .9-2 2 0 1.5 2 3 4 5 2-2 4-3.5 4-5 0-1.1-.61-2-2-2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Industry Connections</h3>
              <p className="text-muted-foreground">Connect with Intel representatives and industry professionals through networking events and talks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start innovating?</h2>
            <p className="text-xl text-muted-foreground mb-8">Join our community of tech enthusiasts and build the future of IoT!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  See Our Projects
                </Button>
              </Link>
              <Link to="/events">
                <Button size="lg">
                  Upcoming Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;