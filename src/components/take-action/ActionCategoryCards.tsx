
import { Users, Shield, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionCategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
          <Users className="w-5 h-5 text-digital-purple" />
          For General Users
        </h3>
        <p className="mb-4 text-digital-gray-medium">
          As an everyday internet user, you have more power than you might think.
        </p>
        <Button 
          variant="outline" 
          className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5"
          asChild
        >
          <a href="#what-you-can-do">
            Learn what you can do
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
          <Shield className="w-5 h-5 text-digital-purple" />
          For Community Leaders
        </h3>
        <ul className="text-left space-y-2 text-digital-gray-medium">
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Plan migration strategies to open protocols</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Educate your community on digital rights</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Develop community governance processes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Connect with other communities</span>
          </li>
        </ul>
        <Button 
          variant="outline" 
          className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5 mt-4"
          asChild
        >
          <a href="#for-community-leaders">
            View detailed guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
          <Code className="w-5 h-5 text-digital-purple" />
          For Developers
        </h3>
        <ul className="text-left space-y-2 text-digital-gray-medium">
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Build on open protocols, not closed platforms</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Contribute to open source projects</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Design with community governance in mind</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-digital-purple font-bold">•</span>
            <span>Prioritize user rights and privacy</span>
          </li>
        </ul>
        <Button 
          variant="outline" 
          className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5 mt-4"
          asChild
        >
          <a href="#for-developers">
            View detailed guide
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ActionCategoryCards;
