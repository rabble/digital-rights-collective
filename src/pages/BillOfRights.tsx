
import Layout from "@/components/layout/Layout";
import RightsHero from "@/components/rights/RightsHero";
import { CheckCircle, Shield, Users, Link as LinkIcon, Database, Settings, ArrowRight } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BillOfRights = () => {
  return (
    <Layout>
      <RightsHero />

      {/* Rights Principles Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-digital-gray-light">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-digital-gray-dark">
                Five Core Principles
              </h2>
              <p className="text-lg text-digital-gray-medium max-w-3xl mx-auto">
                These rights are not just aspirational; they are the foundation for building a more equitable, 
                community-controlled digital future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Right 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Shield className="w-10 h-10 text-digital-purple mr-4" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Privacy & Security</h3>
                </div>
                <p className="text-digital-gray-medium mb-6">
                  The ability to communicate and organize without fear of surveillance or exploitation. Your conversations, 
                  connections, and personal data should be protected from corporate and government intrusion.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">End-to-End Encryption</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Data Protection</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Anti-Surveillance</span>
                </div>
              </div>

              {/* Right 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Database className="w-10 h-10 text-digital-purple mr-4" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Ownership</h3>
                </div>
                <p className="text-digital-gray-medium mb-6">
                  People and their communities must own their digital identities, connections and data, including the right to be forgotten.
                  Your online presence should belong to you, not corporations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Data Portability</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Right to Delete</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Identity Control</span>
                </div>
              </div>

              {/* Right 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <LinkIcon className="w-10 h-10 text-digital-purple mr-4" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Interoperability</h3>
                </div>
                <p className="text-digital-gray-medium mb-6">
                  The freedom to port your community in its entirety to another app without losing your connections and content.
                  No walled gardens, no captive communities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Open Standards</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Migration Rights</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Content Portability</span>
                </div>
              </div>

              {/* Right 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <div className="flex items-center mb-4">
                  <Settings className="w-10 h-10 text-digital-purple mr-4" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Algorithmic Control</h3>
                </div>
                <p className="text-digital-gray-medium mb-6">
                  Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Transparency</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">User Control</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Ethical Design</span>
                </div>
              </div>

              {/* Right 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl md:col-span-2">
                <div className="flex items-center mb-4">
                  <Users className="w-10 h-10 text-digital-purple mr-4" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Self-governance</h3>
                </div>
                <p className="text-digital-gray-medium mb-6">
                  Crucially, communities need the right to self-govern, setting their own rules for behavior which are 
                  contextually relevant to their community. No more one-size-fits-all moderation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Community Standards</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Democratic Moderation</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Cultural Context</span>
                  <span className="bg-digital-purple/10 text-digital-purple text-sm px-3 py-1 rounded-full">Collective Ownership</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold mb-8 text-digital-gray-dark">Learn More About Each Right</h3>
            </div>

            {/* Expanded detailed sections for each right */}
            <div className="space-y-12 mb-16">
              {/* Detailed Right 1 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-digital-purple mr-3" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Privacy & Security</h3>
                </div>
                <div className="ml-11">
                  <p className="mb-4 text-digital-gray-medium">The ability to communicate and organize without fear of surveillance or exploitation.</p>
                  <ul className="list-disc pl-5 space-y-3 text-digital-gray-medium">
                    <li>Conversations protected from corporate data mining</li>
                    <li>Protection from government surveillance</li>
                    <li>End-to-end encryption as a standard feature</li>
                    <li>Clear, understandable privacy policies</li>
                  </ul>
                </div>
              </div>
              
              {/* Detailed Right 2 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-digital-purple mr-3" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Ownership</h3>
                </div>
                <div className="ml-11">
                  <p className="mb-4 text-digital-gray-medium">People and their communities must own their digital identities, connections and data, including the right to be forgotten.</p>
                  <ul className="list-disc pl-5 space-y-3 text-digital-gray-medium">
                    <li>Complete access to download your own data</li>
                    <li>Right to permanently delete your information</li>
                    <li>Control over how your content is used</li>
                    <li>Protection from algorithmic exploitation</li>
                  </ul>
                </div>
              </div>
              
              {/* Detailed Right 3 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-digital-purple mr-3" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Interoperability & The Right To Exit</h3>
                </div>
                <div className="ml-11">
                  <p className="mb-4 text-digital-gray-medium">The freedom to port your community in its entirety, to another app without losing your connections and content.</p>
                  <ul className="list-disc pl-5 space-y-3 text-digital-gray-medium">
                    <li>Ability to migrate your entire community to a new platform</li>
                    <li>Data formats that work across different platforms</li>
                    <li>Open standards for social media interactions</li>
                    <li>No artificial barriers to leaving platforms</li>
                  </ul>
                </div>
              </div>
              
              {/* Detailed Right 4 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-digital-purple mr-3" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Algorithmic Transparency & Control</h3>
                </div>
                <div className="ml-11">
                  <p className="mb-4 text-digital-gray-medium">Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being.</p>
                  <ul className="list-disc pl-5 space-y-3 text-digital-gray-medium">
                    <li>Access to understand how algorithms rank content</li>
                    <li>User control over feed preferences</li>
                    <li>Options to view content chronologically</li>
                    <li>Protection from manipulation and addiction-driven design</li>
                  </ul>
                </div>
              </div>
              
              {/* Detailed Right 5 */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="h-8 w-8 text-digital-purple mr-3" />
                  <h3 className="text-2xl font-bold text-digital-gray-dark">Self-governance</h3>
                </div>
                <div className="ml-11">
                  <p className="mb-4 text-digital-gray-medium">Crucially, communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community.</p>
                  <ul className="list-disc pl-5 space-y-3 text-digital-gray-medium">
                    <li>Community-defined moderation standards</li>
                    <li>Democratic processes for rule creation</li>
                    <li>Protection from arbitrary deplatforming</li>
                    <li>Cultural context in content moderation</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-digital-purple hover:bg-digital-purple-dark" asChild>
                <Link to="/take-action">
                  Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <CallToAction />
    </Layout>
  );
};

export default BillOfRights;
