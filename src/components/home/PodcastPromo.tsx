
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const PodcastPromo = () => {
  return (
    <section className="py-16 md:py-24 bg-digital-gray-light">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-digital-purple to-digital-blue flex items-center justify-center p-8">
                <Headphones className="h-20 w-20 text-white" />
              </div>
              
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-digital-gray-dark">
                  Upcoming Podcast Series
                </h2>
                
                <p className="text-digital-gray-medium mb-6">
                  Join us for an in-depth 5-part podcast series exploring the Social Media Bill of Rights
                  and the future of community-controlled digital spaces. We'll be talking with experts,
                  activists, and community leaders about how we can build a better internet.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-digital-purple/10 flex items-center justify-center text-digital-purple font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold">The Crisis of Digital Communities</h3>
                      <p className="text-sm text-digital-gray-medium">Coming June 15th</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-digital-purple/10 flex items-center justify-center text-digital-purple font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold">The Five Digital Rights</h3>
                      <p className="text-sm text-digital-gray-medium">Coming June 22nd</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-digital-purple/10 flex items-center justify-center text-digital-purple font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold">Open Protocols: The Technical Foundation</h3>
                      <p className="text-sm text-digital-gray-medium">Coming June 29th</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white" asChild>
                    <Link to="/podcast">Learn More About the Podcast</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastPromo;
