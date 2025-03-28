
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
    <section className="py-12 md:py-16 bg-gradient-to-b from-digital-gray-light to-white">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-digital-gray-dark">
            The Five Fundamental Rights
          </h2>
          <p className="text-lg text-digital-gray-medium max-w-2xl mx-auto">
            These five rights form the foundation of our Social Media Bill of Rights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {rights.map((right) => (
            <div 
              key={right.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-digital-purple flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                <div className="bg-digital-purple/10 p-3 rounded-full text-digital-purple mr-4">
                  {right.icon}
                </div>
                <h3 className="text-xl font-bold text-digital-gray-dark">{right.title}</h3>
              </div>
              <p className="text-digital-gray-medium flex-grow">{right.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
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
