
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RightsCTA = () => {
  return (
    <div className="text-center" role="region" aria-label="Call to action">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          size="lg" 
          className="bg-digital-purple hover:bg-digital-purple-dark" 
          asChild
        >
          <Link to="/take-action" aria-label="Join the Movement for Digital Rights">
            Take Action <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
        
        <Button 
          size="lg" 
          className="bg-digital-coral hover:bg-digital-coral-dark" 
          asChild
        >
          <Link to="/endorse" aria-label="Endorse the Social Media Bill of Rights">
            Endorse <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RightsCTA;
