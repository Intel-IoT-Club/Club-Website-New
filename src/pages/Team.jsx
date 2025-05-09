import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alex Rivera',
      role: 'Club President',
      image: '/images/team/alex.jpg',
      bio: 'Computer Engineering senior with a focus on embedded systems. Passionate about IoT solutions for environmental sustainability.',
      social: {
        github: 'https://github.com/alexrivera',
        linkedin: 'https://linkedin.com/in/alexrivera',
        twitter: 'https://twitter.com/alexrivera'
      }
    },
    {
      id: 2,
      name: 'Mei Chen',
      role: 'Vice President',
      image: '/images/team/mei.jpg',
      bio: 'Electrical Engineering junior specializing in hardware design. Experienced in PCB design and IoT sensor networks.',
      social: {
        github: 'https://github.com/meichen',
        linkedin: 'https://linkedin.com/in/meichen'
      }
    },
    {
      id: 3,
      name: 'Jamal Wilson',
      role: 'Technical Lead',
      image: '/images/team/jamal.jpg',
      bio: 'Computer Science senior with expertise in cloud infrastructure and IoT backends. AWS certified developer.',
      social: {
        github: 'https://github.com/jamalwilson',
        linkedin: 'https://linkedin.com/in/jamalwilson',
        twitter: 'https://twitter.com/jamalwilson'
      }
    },
    {
      id: 4,
      name: 'Sophia Rodriguez',
      role: 'Workshop Coordinator',
      image: '/images/team/sophia.jpg',
      bio: 'Interactive Media Design junior with a talent for creating engaging learning experiences. Organizes our hands-on workshops.',
      social: {
        github: 'https://github.com/sophiarodriguez',
        linkedin: 'https://linkedin.com/in/sophiarodriguez'
      }
    },
    {
      id: 5,
      name: 'Daniel Kim',
      role: 'Project Manager',
      image: '/images/team/daniel.jpg',
      bio: 'Computer Science senior focused on machine learning applications in IoT. Manages our larger collaborative projects.',
      social: {
        github: 'https://github.com/danielkim',
        linkedin: 'https://linkedin.com/in/danielkim'
      }
    },
    {
      id: 6,
      name: 'Aisha Patel',
      role: 'Outreach Coordinator',
      image: '/images/team/aisha.jpg',
      bio: 'Marketing major with a minor in Computer Science. Handles industry partnerships and club promotion.',
      social: {
        linkedin: 'https://linkedin.com/in/aishapatel',
        twitter: 'https://twitter.com/aishapatel'
      }
    },
    {
      id: 7,
      name: 'Luis Morales',
      role: 'Content Creator',
      image: '/images/team/luis.jpg',
      bio: 'Digital Media major who creates tutorials, documentation, and promotional materials for the club.',
      social: {
        github: 'https://github.com/luismorales',
        linkedin: 'https://linkedin.com/in/luismorales'
      }
    },
    {
      id: 8,
      name: 'Dr. Sarah Wang',
      role: 'Faculty Advisor',
      image: '/images/team/sarah.jpg',
      bio: 'Associate Professor of Electrical Engineering with research focus on embedded systems and IoT security.',
      social: {
        linkedin: 'https://linkedin.com/in/sarahwang'
      }
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Meet the passionate individuals who make the Intel IoT Club possible. Our team brings together diverse skills and expertise to create a vibrant learning community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <div className="pt-6 px-6 flex justify-center">
              <Avatar className="h-32 w-32">
                <AvatarImage src={member.image} />
                <AvatarFallback className="text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardHeader className="text-center pt-5">
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              <div className="flex justify-center space-x-3">
                {member.social.github && (
                  <a 
                    href={member.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                )}
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;