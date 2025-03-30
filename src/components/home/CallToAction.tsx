
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-digital-purple text-white" aria-labelledby="cta-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-heading" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            Join the Movement for Digital Rights
          </h2>
          
          <p className="text-lg mb-8 text-white/90">
            This isn't just a prediction. This is a movement already in motion.
            Join us in building a future where digital communities can truly thrive.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <Button
              className="w-full sm:w-auto bg-digital-purple-light hover:bg-digital-purple-light/90 mb-4"
              asChild
            >
              <a href="https://dashboard.mailerlite.com/forms/1225308/150286925399328477/share" target="_blank" rel="noopener noreferrer">
                Join Our Newsletter
              </a>
            </Button>
            
            <Button
              className="w-full sm:w-auto bg-digital-purple-light hover:bg-digital-purple-light/90"
              asChild
            >
              <Link to="/endorse">Endorse the Bill of Rights</Link>
            </Button>
            
            <p className="text-xs text-white/70 mt-4">
              By joining, you'll receive updates on the movement and how you can take action.
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
