import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '../components/ui/card';
import { Button } from '../components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Campus Navigation',
      description: 'An IoT-based indoor navigation system for campus buildings using BLE beacons and Intel Edison boards.',
      image: '/images/projects/smart-campus.jpg',
      github: 'https://github.com/inteliotclub/smart-campus',
      demo: 'https://smart-campus-demo.netlify.app',
      tags: ['BLE', 'Edison', 'React Native']
    },
    {
      id: 2,
      title: 'Automated Greenhouse',
      description: 'Intelligent greenhouse monitoring system with automated climate control using Intel Galileo Gen 2.',
      image: '/images/projects/greenhouse.jpg',
      github: 'https://github.com/inteliotclub/auto-greenhouse',
      demo: null,
      tags: ['Galileo', 'Sensors', 'Node.js']
    },
    {
      id: 3,
      title: 'Campus Energy Monitor',
      description: 'Real-time energy consumption monitoring system for university buildings with predictive analytics.',
      image: '/images/projects/energy-monitor.jpg',
      github: 'https://github.com/inteliotclub/energy-monitor',
      demo: 'https://energy-monitor-demo.vercel.app',
      tags: ['NUC', 'Power Sensing', 'Dashboard']
    },
    {
      id: 4,
      title: 'Smart Waste Management',
      description: 'IoT-based waste bin monitoring system optimizing collection routes and schedules.',
      image: '/images/projects/waste-management.jpg',
      github: 'https://github.com/inteliotclub/smart-waste',
      demo: null,
      tags: ['Arduino', 'LoRaWAN', 'Data Visualization']
    },
    {
      id: 5,
      title: 'Classroom Occupancy System',
      description: 'Real-time classroom occupancy tracking and analytics for optimizing space usage.',
      image: '/images/projects/occupancy.jpg',
      github: 'https://github.com/inteliotclub/classroom-occupancy',
      demo: 'https://occupancy-demo.netlify.app',
      tags: ['Computer Vision', 'Intel NCS', 'Analytics']
    },
    {
      id: 6,
      title: 'Air Quality Monitoring',
      description: 'Campus-wide air quality monitoring network with real-time alerts and historical data analysis.',
      image: '/images/projects/air-quality.jpg',
      github: 'https://github.com/inteliotclub/air-quality',
      demo: 'https://air-quality-monitor.vercel.app',
      tags: ['Sensors', 'Cloud', 'Mobile App']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Explore our innovative IoT projects developed by club members. All projects 
        leverage Intel technologies to solve real-world problems and create impactful solutions.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col h-full">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              <div 
                className="h-full w-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: `url(${project.image || 'https://placehold.co/600x400/e2e8f0/1e293b?text=Intel+IoT+Project'})` 
                }}
              ></div>
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between pt-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              {project.demo ? (
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </Button>
              ) : (
                <Button size="sm" disabled>
                  No Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;