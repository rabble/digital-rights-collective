
import { Lock, Database, Shuffle, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RightsPreview = () => {
  const rights = [
    {
      id: 1,
      icon: <Lock className="h-10 w-10" />,
      title: "Privacy & Security",
      description: "The ability to communicate and organize without fear of surveillance or exploitation."
    },
    {
      id: 2,
      icon: <Database className="h-10 w-10" />,
      title: "Ownership",
      description: "People and their communities must own their digital identities, connections and data, including the right to be forgotten."
    },
    {
      id: 3,
      icon: <Shuffle className="h-10 w-10" />,
      title: "Interoperability & The Right To Exit",
      description: "The freedom to port your community in its entirety, to another app without losing your connections and content."
    },
    {
      id: 4,
      icon: <LineChart className="h-10 w-10" />,
      title: "Algorithmic Transparency & Control",
      description: "Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being."
    },
    {
      id: 5,
      icon: <Users className="h-10 w-10" />,
      title: "Self-governance",
      description: "Crucially, communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-digital-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-digital-gray-dark">
            The Five Fundamental Rights
          </h2>
          <p className="text-lg text-digital-gray-medium max-w-2xl mx-auto">
            These five rights form the foundation of our Social Media Bill of Rights.
            They are the minimum standard that all platforms should uphold.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {rights.map((right) => (
            <div 
              key={right.id} 
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-digital-purple mb-4">{right.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-digital-gray-dark">{right.title}</h3>
              <p className="text-digital-gray-medium">{right.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="bg-digital-purple hover:bg-digital-purple-dark text-white"
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
