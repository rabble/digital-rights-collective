
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
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
    </section>
  );
};

export default IntroSection;
