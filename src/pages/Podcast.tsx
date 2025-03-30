
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Headphones, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PodcastEpisode = ({
  number,
  title,
  date,
  description,
  duration,
  comingSoon = true
}: {
  number: number;
  title: string;
  date: string;
  description: string;
  duration: string;
  comingSoon?: boolean;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-digital-purple/50 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        <div className="bg-digital-purple/10 text-digital-purple font-bold rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center text-sm text-digital-gray-medium gap-4 mt-1">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-digital-gray-medium mb-4">{description}</p>
      <Button
        variant={comingSoon ? "outline" : "default"}
        className={comingSoon ? "border-digital-purple/50 text-digital-purple" : "bg-digital-purple hover:bg-digital-purple-dark"}
        disabled={comingSoon}
      >
        {comingSoon ? "Coming Soon" : "Listen Now"}
      </Button>
    </div>
  );
};

const Podcast = () => {
  const { toast } = useToast();

  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                The Digital Rights Podcast
              </h1>
              
              <p className="text-lg text-gray-300 mb-6">
                A 5-part series exploring how we can reclaim our digital communities and build 
                a better social media landscape based on open protocols and community governance.
              </p>
              
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                <h2 className="text-xl font-semibold mb-4">Get Notified</h2>
                <p className="text-gray-300 mb-4 text-sm">
                  Subscribe to be notified when new episodes are released, plus receive updates 
                  on the Social Media Bill of Rights movement.
                </p>
                
                <Button className="w-full bg-digital-purple-light hover:bg-digital-purple-light/90" asChild>
                  <a href="https://dashboard.mailerlite.com/forms/1225308/150286925399328477/share" target="_blank" rel="noopener noreferrer">
                    Join Our Newsletter
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-digital-purple rounded-2xl overflow-hidden h-72 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-digital-purple via-digital-purple-dark to-digital-gray-dark opacity-50"></div>
                <Headphones className="h-32 w-32 text-white relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              About the Podcast
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Join host Evan Henshaw-Plath for an in-depth exploration of how we can transform 
                our digital communities from corporate-controlled platforms to community-governed spaces.
              </p>
              <p>
                Each episode will feature conversations with experts, activists, and community leaders 
                working on the frontlines of digital rights advocacy and open protocol development.
              </p>
              <p>
                We'll tackle the technical, social, and policy challenges of building a more 
                equitable digital commons, and highlight practical steps that communities can 
                take to reclaim control of their online spaces.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-digital-gray-dark">
              Episode Guide
            </h2>
            
            <div className="space-y-6">
              <PodcastEpisode
                number={1}
                title="The Crisis of Digital Communities"
                date="June 15, 2023"
                description="How did we get here? We explore the evolution of social media from open communities to corporate-controlled platforms, and the consequences for our digital rights."
                duration="45 minutes"
              />
              
              <PodcastEpisode
                number={2}
                title="The Five Digital Rights"
                date="June 22, 2023"
                description="A deep dive into the five fundamental rights that should underpin all social platforms, with examples of how current platforms violate these rights."
                duration="50 minutes"
              />
              
              <PodcastEpisode
                number={3}
                title="Open Protocols: The Technical Foundation"
                date="June 29, 2023"
                description="An accessible introduction to open protocols like ActivityPub, AT Protocol, and Nostr, and how they enable a more rights-respecting social web."
                duration="55 minutes"
              />
              
              <PodcastEpisode
                number={4}
                title="Community Governance in Practice"
                date="July 6, 2023"
                description="How can communities effectively govern themselves? We look at successful models from both digital and physical spaces."
                duration="45 minutes"
              />
              
              <PodcastEpisode
                number={5}
                title="Building the Movement"
                date="July 13, 2023"
                description="Practical steps for building a movement around digital rights, and how communities can transition to more rights-respecting platforms."
                duration="60 minutes"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-digital-gray-light p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-digital-gray-dark">
                Listen on Your Favorite Platform
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto py-6 border-digital-purple/30 hover:bg-digital-purple/5">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-digital-purple">Spotify</span>
                    <span className="text-xs text-digital-gray-medium mt-1">Coming Soon</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 border-digital-purple/30 hover:bg-digital-purple/5">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-digital-purple">Apple Podcasts</span>
                    <span className="text-xs text-digital-gray-medium mt-1">Coming Soon</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 border-digital-purple/30 hover:bg-digital-purple/5">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-digital-purple">Google Podcasts</span>
                    <span className="text-xs text-digital-gray-medium mt-1">Coming Soon</span>
                  </div>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 border-digital-purple/30 hover:bg-digital-purple/5">
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-digital-purple">RSS Feed</span>
                    <span className="text-xs text-digital-gray-medium mt-1">Coming Soon</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;
