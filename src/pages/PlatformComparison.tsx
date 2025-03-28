
import Layout from "@/components/layout/Layout";
import PlatformComparisonTable from "@/components/comparison/PlatformComparisonTable";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlatformComparison = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Platform Comparison
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              How do today's social platforms measure up against our five fundamental digital rights?
              See which platforms respect your rights and which ones fall short.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Evaluating Social Platforms
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                We've evaluated major platforms and protocols against our five fundamental rights:
                Privacy & Security, Ownership, Interoperability, Algorithmic Transparency & Control, and Self-governance.
              </p>
              <p>
                For each right, platforms receive a rating from Poor to Excellent based on their policies, 
                features, and track record. These evaluations are based on publicly available information 
                and the experiences of users and communities.
              </p>
              <p>
                While no platform is perfect, this comparison highlights the significant differences 
                between corporate platforms and open protocols in respecting digital rights.
              </p>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-gray-200 mb-16">
            <PlatformComparisonTable />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Key Findings
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="bg-digital-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-digital-gray-dark">The Open Protocol Advantage</h3>
                <p className="text-digital-gray-medium">
                  Open protocols consistently outperform corporate platforms across all rights categories, 
                  particularly in areas of ownership, interoperability, and self-governance. This isn't 
                  coincidental – it's by design. Open protocols are built on principles of user control 
                  and community autonomy.
                </p>
              </div>
              
              <div className="bg-digital-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-digital-gray-dark">The Privacy Trade-off</h3>
                <p className="text-digital-gray-medium">
                  Corporate platforms with business models built on advertising consistently perform poorly 
                  on privacy and data ownership. These platforms are incentivized to collect as much data 
                  as possible, which fundamentally conflicts with user privacy and control.
                </p>
              </div>
              
              <div className="bg-digital-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-digital-gray-dark">The Future of Algorithms</h3>
                <p className="text-digital-gray-medium">
                  BlueSky's approach to algorithmic choice represents a promising direction for the industry. 
                  By separating content from curation and giving users control over algorithms, platforms 
                  can maintain personalization while respecting user autonomy.
                </p>
              </div>
            </div>
            
            <div className="text-center space-y-8">
              <h3 className="text-xl font-semibold text-digital-gray-dark">
                Ready to explore alternatives that respect your rights?
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="border-digital-purple text-digital-purple hover:bg-digital-purple/10"
                  asChild
                >
                  <a href="https://joinmastodon.org" target="_blank" rel="noopener noreferrer">
                    Try Mastodon <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-digital-purple text-digital-purple hover:bg-digital-purple/10"
                  asChild
                >
                  <a href="https://bsky.app" target="_blank" rel="noopener noreferrer">
                    Try BlueSky <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-digital-purple text-digital-purple hover:bg-digital-purple/10"
                  asChild
                >
                  <a href="https://nostr.com" target="_blank" rel="noopener noreferrer">
                    Try Nostr <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div>
                <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white" asChild>
                  <Link to="/resources">
                    Learn More About Open Protocols <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlatformComparison;
