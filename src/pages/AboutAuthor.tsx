
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutAuthor = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              About the Author
            </h1>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="md:flex gap-12 items-start">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <div className="bg-digital-gray-light rounded-xl overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/c608de28-d3d1-49d7-81b1-2bd57ca71047.png" 
                    alt="Rabble (Evan Henshaw-Plath)" 
                    className="w-full h-auto aspect-square object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-bold text-xl">Evan Henshaw-Plath</h3>
                  <p className="text-digital-gray-medium">
                    Technologist and community advocate
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-digital-purple/10 px-3 py-1 rounded-full text-sm text-digital-purple">
                      Open Protocols
                    </div>
                    <div className="bg-digital-purple/10 px-3 py-1 rounded-full text-sm text-digital-purple">
                      Digital Rights
                    </div>
                    <div className="bg-digital-purple/10 px-3 py-1 rounded-full text-sm text-digital-purple">
                      Community Technology
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none [&>p]:mb-6">
                  <div className="bg-digital-purple/10 p-4 mb-6 rounded-md">
                    <p className="text-digital-purple-dark font-medium">
                      This site is produced by <a href="https://www.verse-pbc.org/rabble" target="_blank" rel="noopener noreferrer" className="text-digital-purple hover:underline">@rabble</a> and the <a href="https://www.verse-pbc.org" target="_blank" rel="noopener noreferrer" className="text-digital-purple hover:underline">Verse Public Benefit Corporation</a>
                    </p>
                  </div>
                  
                  <p>
                    <a href="https://evan.henshaw-plath.com" target="_blank" rel="noopener noreferrer" className="text-digital-purple hover:underline">Rabble aka Evan Henshaw-Plath</a> is a technologist and community advocate who has been building social 
                    technologies for over two decades, including early work on Twitter and decentralized 
                    communication platforms.
                  </p>
                  
                  <p>
                    As the first employee and de facto CTO at Odeo (which later pivoted to become Twitter) 
                    until late 2006, Rabble has unique insights into the evolution of social media from its 
                    early, community-oriented days to the corporate platforms we know today.
                  </p>
                  
                  <p>
                    Throughout his career, Rabble has been dedicated to building technologies that empower 
                    communities rather than exploit them. He has worked with activist groups, open-source 
                    projects, and community organizers around the world to develop digital tools that respect 
                    user rights and enable collective governance.
                  </p>
                  
                  <p>
                    The Social Media Bill of Rights initiative draws on Rabble's extensive experience at the 
                    intersection of technology and community organizing. It represents his vision for 
                    reclaiming our digital commons from corporate control and building a more equitable, 
                    community-governed internet.
                  </p>
                  
                  <p>
                    Beyond advocacy, Rabble is actively working with a network of developers, designers, and 
                    community leaders to build the next generation of social platforms based on open protocols 
                    and community governance. He believes that the technical foundations for a better social 
                    media landscape already exist – what's needed now is the social movement to make it a reality.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white" asChild>
                    <Link to="/bill-of-rights">
                      Read the Social Media Bill of Rights <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-digital-gray-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-digital-gray-dark text-center">
              Contact Information
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">
                    For Media Inquiries
                  </h3>
                  <p className="text-digital-gray-medium mb-4">
                    If you're a journalist or content creator interested in covering the Social Media 
                    Bill of Rights initiative, please get in touch.
                  </p>
                  <p className="text-digital-purple font-semibold">
                    Email: alice@flockmktg.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">
                    For Speaking Engagements
                  </h3>
                  <p className="text-digital-gray-medium mb-4">
                    Interested in having Rabble speak at your event about digital rights, 
                    community technology, or the future of social media?
                  </p>
                  <p className="text-digital-purple font-semibold">
                    Email: alice@flockmktg.com
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">
                  General Contact
                </h3>
                <p className="text-digital-gray-medium">
                  For general inquiries about the Social Media Bill of Rights initiative, 
                  collaboration opportunities, or other questions, please email:
                </p>
                <p className="text-digital-purple font-semibold mt-2">
                  contact@socialmediabillofrights.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutAuthor;
