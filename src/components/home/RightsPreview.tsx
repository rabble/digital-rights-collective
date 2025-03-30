
import { Lock, Database, Shuffle, LineChart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const RightsPreview = () => {
  const rights = [
    {
      id: 1,
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy & Security",
      description: "The ability to communicate and organize without fear of surveillance or exploitation."
    },
    {
      id: 2,
      icon: <Database className="h-8 w-8" />,
      title: "Ownership",
      description: "People and their communities must own their digital identities, connections and data, including the right to be forgotten."
    },
    {
      id: 3,
      icon: <Shuffle className="h-8 w-8" />,
      title: "Interoperability & The Right To Exit",
      description: "The freedom to port your community in its entirety, to another app without losing your connections and content."
    },
    {
      id: 4,
      icon: <LineChart className="h-8 w-8" />,
      title: "Algorithmic Transparency & Control",
      description: "Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being."
    },
    {
      id: 5,
      icon: <Users className="h-8 w-8" />,
      title: "Self-governance",
      description: "Crucially, communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-digital-gray-light to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-digital-gray-dark">
              The Five Fundamental Rights
            </h2>
            <p className="text-lg text-digital-gray-medium max-w-2xl">
              As outlined by Rabble, these five rights form the foundation for digital liberation. In their work, they emphasize that these rights are essential for a just digital future.
            </p>
          </div>
          <div className="md:w-1/3 md:text-right mt-4 md:mt-0">
            <Button 
              className="bg-digital-purple hover:bg-digital-purple-dark text-white"
              size="lg"
              asChild
            >
              <Link to="/bill-of-rights">Full Bill of Rights</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {rights.map((right) => (
            <div 
              key={right.id} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-digital-purple flex flex-col h-full"
            >
              <div className="mb-3">
                <div className="bg-digital-purple/10 p-3 rounded-full text-digital-purple inline-flex">
                  {right.icon}
                </div>
                <h3 className="text-lg font-bold text-digital-gray-dark mt-3">{right.title}</h3>
              </div>
              <p className="text-sm text-digital-gray-medium flex-grow">{right.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center text-digital-gray-medium text-sm max-w-4xl mx-auto">
          <p>Based on Rabble's framework for digital community rights. They have spent decades building social technologies, including their work at Odeo (which became Twitter) where they were the social app's first employee and de facto CTO until late 2006.</p>
        </div>
      </div>
    </section>
  );
};

export default RightsPreview;
