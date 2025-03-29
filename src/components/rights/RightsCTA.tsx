
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const RightsCTA = () => {
  return (
    <div className="text-center" role="region" aria-label="Call to action">
      <Button 
        size="lg" 
        className="bg-digital-purple hover:bg-digital-purple-dark" 
        asChild
      >
        <Link to="/take-action" aria-label="Join the Movement for Digital Rights">
          Join the Movement <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </Link>
      </Button>
    </div>
  );
};

export default RightsCTA;
