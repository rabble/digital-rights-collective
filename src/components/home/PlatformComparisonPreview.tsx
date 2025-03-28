
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PlatformComparisonPreview = () => {
  const platforms = [
    { name: "Facebook/Meta", type: "Corporate" },
    { name: "Twitter/X", type: "Corporate" },
    { name: "TikTok", type: "Corporate" },
    { name: "Mastodon", type: "Open Protocol" },
    { name: "BlueSky", type: "Open Protocol" },
    { name: "Nostr", type: "Open Protocol" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-digital-gray-dark">
            How Do Platforms Measure Up?
          </h2>
          <p className="text-lg text-digital-gray-medium max-w-2xl mx-auto">
            We've evaluated major platforms and protocols against our five fundamental rights. 
            See how your favorite platforms perform and discover alternatives that respect your rights.
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-digital-gray-light rounded-xl p-8 mb-8">
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-digital-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-24 -bottom-24 w-48 h-48 bg-digital-coral/10 rounded-full blur-3xl"></div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg ${
                  platform.type === "Corporate" ? "bg-white" : "bg-digital-purple/10"
                } relative`}
              >
                <div className="mb-1">
                  <span 
                    className={`text-xs px-2 py-1 rounded-full ${
                      platform.type === "Corporate" 
                        ? "bg-red-100 text-red-800" 
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {platform.type}
                  </span>
                </div>
                <h3 className="font-semibold text-digital-gray-dark">{platform.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              className="bg-digital-purple hover:bg-digital-purple-dark text-white" 
              asChild
            >
              <Link to="/platform-comparison">
                See the Full Comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-lg text-digital-gray-medium">
            <p className="mb-4">
              The good news is that the technical foundations for a better future already exist through 
              open protocols that work like the web itself – interconnected and controlled by no single entity.
            </p>
            <p>
              Unlike the walled gardens of Meta, TikTok, and Twitter (now X), these open protocols allow 
              communities to connect across platforms while maintaining control of their spaces. When you use 
              email or browse the web, you don't worry about which email provider or browser your friends 
              use – it just works. Our social spaces should function the same way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparisonPreview;
