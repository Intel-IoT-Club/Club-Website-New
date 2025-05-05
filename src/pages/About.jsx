import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Intel IoT Club</h1>
        
        <div className="space-y-6">
          <div className="prose max-w-none">
            <p className="text-lg text-muted-foreground">
              The Intel IoT Club is a student-led technology organization focused on exploring the 
              vast possibilities at the intersection of hardware, software, and connectivity through 
              Intel's IoT technologies.
            </p>
            <p className="text-lg mt-4">
              Through our partnership with Intel, we provide students with hands-on experience 
              with cutting-edge IoT devices, development boards, and software tools that are 
              shaping the future of technology.
            </p>
          </div>
          
          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>What drives us forward</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  To empower students with the skills, knowledge, and resources they need to 
                  create innovative IoT solutions that address real-world challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>What we aspire to achieve</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  To foster a community of tech enthusiasts who collaborate, innovate, and 
                  lead the next generation of IoT development.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Values Accordion */}
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="innovation">
                <AccordionTrigger>Innovation</AccordionTrigger>
                <AccordionContent>
                  We believe in pushing boundaries and exploring new possibilities in the world of IoT. 
                  We encourage creative thinking and novel approaches to solving complex problems with technology.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="collaboration">
                <AccordionTrigger>Collaboration</AccordionTrigger>
                <AccordionContent>
                  Great ideas flourish in collaborative environments. We provide a platform for students to 
                  work together, combining diverse skills and perspectives to create comprehensive solutions.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="learning">
                <AccordionTrigger>Continuous Learning</AccordionTrigger>
                <AccordionContent>
                  Technology evolves rapidly, and so do we. We're committed to staying at the forefront 
                  of IoT trends, constantly learning and adapting to emerging technologies and methodologies.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="impact">
                <AccordionTrigger>Real-world Impact</AccordionTrigger>
                <AccordionContent>
                  We focus on creating solutions that have practical applications and address 
                  meaningful challenges in society, industry, and everyday life.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Intel Partnership */}
          <div className="bg-blue-50 p-8 rounded-lg my-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Partnership with Intel</h2>
            <p className="mb-4">
              As an official Intel-affiliated club, we benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-800">
              <li>Access to the latest Intel IoT development hardware</li>
              <li>Technical resources and educational materials</li>
              <li>Mentorship from Intel engineers and experts</li>
              <li>Opportunities to participate in Intel-sponsored hackathons and competitions</li>
              <li>Pathways to internships and career opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;