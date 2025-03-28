
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RightsFramework = () => {
  return (
    <section className="py-16 bg-digital-gray-dark text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">A New Framework for Digital Communities</h2>
          <p className="text-lg mb-8">
            The Social Media Bill of Rights isn't just a critique—it's a roadmap for building better digital spaces that 
            respect human dignity, strengthen communities, and foster genuine connection rather than extracting value.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/platform-comparison">
                Compare Current Platforms
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightsFramework;
