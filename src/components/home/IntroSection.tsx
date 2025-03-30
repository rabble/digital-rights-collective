
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-digital-gray-dark">
            Reclaiming Our Digital Communities
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              In the last few weeks alone we've witnessed an unprecedented wave of disruption across social media platforms. 
              Emergency responders found critical updates buried by algorithms that prioritize engagement over urgency. 
              Countless online communities faced arbitrary deplatforming, surveillance, and loss of their digital spaces without recourse or explanation.
            </p>
            
            <p>
              These aren't isolated incidents: they're symptoms of a fundamental crisis in how we've allowed our digital communities to be governed. 
              We've unwittingly accepted a system where massive corporations control the public sphere; algorithms optimize for advertising revenue 
              rather than human connection, and we the people have no real agency over our digital existence.
            </p>
            
            <div className="bg-digital-purple/5 p-6 rounded-lg border-l-4 border-digital-purple my-8">
              <h3 className="text-xl font-bold mb-2 text-digital-purple-dark">The Social Media Bill of Rights</h3>
              <p className="mb-0">
                Just as the original Bill of Rights protected individual freedoms from government overreach, 
                we need fundamental protections for our digital communities from corporate control and surveillance capitalism.
              </p>
            </div>
            
            <p>
              <Link 
                to="/bill-of-rights" 
                className="text-digital-blue font-semibold hover:text-digital-purple transition-colors flex items-center"
              >
                Read the full Social Media Bill of Rights <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
