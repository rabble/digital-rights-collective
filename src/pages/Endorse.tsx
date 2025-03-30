
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Endorse = () => {
  const handleMailtoClick = () => {
    window.location.href = "mailto:evan@henshaw-plath.com?subject=Endorsing%20the%20Social%20Media%20Bill%20of%20Rights";
  };

  return (
    <Layout>
      <main id="main-content" className="py-16 md:py-24 bg-gradient-to-b from-white to-digital-gray-light">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-digital-gray-dark">
              Endorse the Social Media Bill of Rights
            </h1>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10 mb-12">
              <p className="text-lg mb-6 text-digital-gray-medium">
                We're building a coalition of individuals, organizations, and communities who support the Social Media Bill of Rights and the vision of user-controlled, community-governed social media.
              </p>
              
              <p className="text-lg mb-6 text-digital-gray-medium">
                To endorse the Social Media Bill of Rights, please send an email to Evan Henshaw-Plath with your name, organization (if applicable), and any comments you'd like to share.
              </p>
              
              <div className="bg-digital-purple/5 rounded-lg p-6 mb-8 border border-digital-purple/20">
                <h2 className="text-xl font-semibold mb-4 text-digital-purple">
                  Contact Information
                </h2>
                <p className="flex items-center mb-2 text-digital-gray-dark">
                  <Mail className="w-5 h-5 mr-2 text-digital-purple" />
                  <span className="font-medium">Email:</span> 
                  <a 
                    href="mailto:evan@henshaw-plath.com" 
                    className="ml-2 text-digital-purple hover:underline"
                  >
                    evan@henshaw-plath.com
                  </a>
                </p>
              </div>
              
              <Button 
                onClick={handleMailtoClick} 
                size="lg" 
                className="w-full sm:w-auto bg-digital-coral hover:bg-digital-coral/90"
              >
                <Mail className="w-5 h-5 mr-2" /> 
                Email to Endorse
              </Button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 md:p-10">
              <h2 className="text-2xl font-bold mb-6 text-digital-gray-dark">
                Why Endorsements Matter
              </h2>
              
              <p className="text-lg mb-6 text-digital-gray-medium">
                Every endorsement strengthens our movement to establish these rights as the foundation for the next generation of social media platforms. Your support helps demonstrate that there is broad demand for user-controlled, community-governed social media.
              </p>
              
              <p className="text-lg mb-6 text-digital-gray-medium">
                When you endorse the Bill of Rights, you're joining a growing coalition of users, developers, community leaders, and organizations committed to building a better digital future where our online communities are owned and controlled by the people who use them.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Endorse;
