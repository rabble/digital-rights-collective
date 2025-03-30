
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RightsHero = () => {
  return (
    <div className="relative py-16 md:py-24 bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-digital-purple-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-digital-coral/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-digital-purple-light to-digital-coral bg-clip-text text-transparent">
              Social Media Bill of Rights
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-in delay-100">
            Reclaiming our digital spaces from platforms that treat human connection as a commodity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-digital-purple hover:bg-digital-purple-dark text-white"
              asChild
            >
              <Link to="/take-action">
                Take Action <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 bg-digital-purple-dark/40"
              asChild
            >
              <Link to="/platform-comparison">
                Compare Platforms
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightsHero;
