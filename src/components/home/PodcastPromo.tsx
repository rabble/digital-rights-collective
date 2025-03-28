
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

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
                  Coming Soon: Podcast Series
                </h2>
                
                <p className="text-digital-gray-medium mb-6">
                  Stay tuned for an upcoming podcast series exploring the Social Media Bill of Rights
                  and the future of community-controlled digital spaces.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-digital-purple/10 flex items-center justify-center text-digital-purple font-bold">
                      !
                    </div>
                    <div>
                      <h3 className="font-semibold">More details to be announced</h3>
                      <p className="text-sm text-digital-gray-medium">Sign up for updates below</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white">
                    Subscribe for Updates
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
