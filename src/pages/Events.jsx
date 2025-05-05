import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      name: 'IoT Hackathon 2025',
      date: 'May 15-16, 2025',
      location: 'Tech Building, Room 301',
      description: 'A 48-hour hackathon focused on developing innovative IoT solutions using Intel hardware. Prizes include Intel development kits and opportunities for project funding.'
    },
    {
      id: 2,
      name: 'Workshop: Introduction to Intel Edison',
      date: 'May 22, 2025',
      location: 'Innovation Lab',
      description: 'Learn the basics of working with Intel Edison boards for IoT development. This hands-on workshop will cover setup, programming, and connecting to various sensors.'
    },
    {
      id: 3,
      name: 'Guest Speaker: Future of Connected Devices',
      date: 'June 5, 2025',
      location: 'Main Auditorium',
      description: 'Join us for a talk by Dr. Sarah Chen, Lead IoT Architect at Intel, who will discuss the future landscape of connected devices and emerging IoT trends.'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      name: 'Smart City Project Showcase',
      date: 'April 10, 2025',
      location: 'Innovation Hub',
      description: 'Club members presented their smart city project prototypes developed using Intel IoT technologies. Projects included traffic monitoring systems, smart lighting, and waste management solutions.'
    },
    {
      id: 5,
      name: 'Workshop: IoT Security Fundamentals',
      date: 'March 18, 2025',
      location: 'Tech Building, Room 202',
      description: 'Security experts from Intel led a workshop on essential security practices for IoT device development, covering encryption, secure boot, and threat modeling.'
    },
    {
      id: 6,
      name: 'IoT Career Panel',
      date: 'February 25, 2025',
      location: 'Virtual Meeting',
      description: 'Industry professionals shared insights about career opportunities in IoT development, embedded systems, and edge computing.'
    },
    {
      id: 7,
      name: 'Workshop: Cloud Connectivity for IoT',
      date: 'February 12, 2025',
      location: 'Computer Lab 3',
      description: 'Hands-on session exploring different methods to connect Intel IoT devices to cloud platforms for data storage, analysis, and visualization.'
    }
  ];

  const EventCard = ({ event }) => (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{event.name}</CardTitle>
            <CardDescription>{event.date} | {event.location}</CardDescription>
          </div>
          <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
            {new Date(event.date) > new Date() ? 'Upcoming' : 'Past'}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{event.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Events</h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
        Join us for workshops, hackathons, guest speakers, and networking events focused on IoT innovation.
      </p>
      
      <Tabs defaultValue="upcoming" className="max-w-4xl">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="mt-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium">No upcoming events at the moment</h3>
                <p className="text-muted-foreground mt-2">Please check back soon for new events!</p>
              </div>
            )}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="mt-6">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 p-6 bg-muted rounded-lg max-w-4xl">
        <h2 className="text-xl font-bold mb-4">Want to suggest an event?</h2>
        <p className="mb-4">
          Have an idea for a workshop, speaker, or activity that would benefit the Intel IoT Club? 
          We're always open to suggestions from our members!
        </p>
        <a href="mailto:events@inteliotclub.org" className="text-primary hover:underline">
          Email us your ideas →
        </a>
      </div>
    </div>
  );
};

export default Events;