
import { Lock, Database, Shuffle, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RightsPreview = () => {
  const rights = [
    {
      id: 1,
      icon: <Lock className="h-14 w-14" />,
      title: "Privacy & Security",
      description: "The ability to communicate and organize without fear of surveillance or exploitation."
    },
    {
      id: 2,
      icon: <Database className="h-14 w-14" />,
      title: "Ownership",
      description: "People and their communities must own their digital identities, connections and data, including the right to be forgotten."
    },
    {
      id: 3,
      icon: <Shuffle className="h-14 w-14" />,
      title: "Interoperability & The Right To Exit",
      description: "The freedom to port your community in its entirety, to another app without losing your connections and content."
    },
    {
      id: 4,
      icon: <LineChart className="h-14 w-14" />,
      title: "Algorithmic Transparency & Control",
      description: "Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being."
    },
    {
      id: 5,
      icon: <Users className="h-14 w-14" />,
      title: "Self-governance",
      description: "Crucially, communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community."
    }
  ];

  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-digital-gray-light to-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-digital-gray-dark">
            The Five Fundamental Rights
          </h2>
          <p className="text-xl text-digital-gray-medium max-w-2xl mx-auto">
            These five rights form the foundation of our Social Media Bill of Rights.
            They are the minimum standard that all platforms should uphold.
          </p>
        </div>
        
        <div className="space-y-10 max-w-5xl mx-auto">
          {rights.map((right) => (
            <div 
              key={right.id} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-digital-purple"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="bg-digital-purple/10 p-6 rounded-full text-digital-purple flex-shrink-0">
                  {right.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-digital-gray-dark">{right.title}</h3>
                  <p className="text-lg text-digital-gray-medium">{right.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            className="bg-digital-purple hover:bg-digital-purple-dark text-white text-lg px-8 py-6 h-auto"
            size="lg"
            asChild
          >
            <Link to="/bill-of-rights">Explore the Full Bill of Rights</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RightsPreview;
