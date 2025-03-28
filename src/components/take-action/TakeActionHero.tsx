
import { Shield } from "lucide-react";

const TakeActionHero = () => {
  return (
    <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex bg-white/10 p-2 rounded-full mb-6">
            <Shield className="h-6 w-6 mr-2" />
            <span className="font-semibold">Take Action</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Take Action for Digital Rights
          </h1>
          
          <p className="text-lg text-gray-300 mb-6">
            These rights won't be granted – they must be claimed. Join us in building 
            a movement for a more equitable, community-controlled digital future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TakeActionHero;
