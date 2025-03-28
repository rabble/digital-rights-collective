
import { Shield, Users, Link as LinkIcon, Database, Settings } from "lucide-react";

const RightsPrinciples = () => {
  return (
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
        </div>
      </div>
    </section>
  );
};

export default RightsPrinciples;
