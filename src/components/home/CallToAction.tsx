
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const CallToAction = () => {
  // This useEffect ensures the MailerLite script recognizes the embedded form after component mount
  useEffect(() => {
    // Check if ml function exists (MailerLite script loaded)
    if (typeof window !== 'undefined' && window.ml) {
      // Force MailerLite to look for new forms
      window.ml('show', {
        selector: '.ml-embedded',
        display: 'inline'
      });
    }
  }, []);
  
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
            {/* MailerLite form */}
            <div className="ml-embedded" data-form="OuZTW0"></div>
            
            <div className="mt-6">
              <Button
                className="w-full sm:w-auto bg-digital-purple-light hover:bg-digital-purple-light/90"
                asChild
              >
                <Link to="/endorse">Endorse the Bill of Rights</Link>
              </Button>
            </div>
            
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
