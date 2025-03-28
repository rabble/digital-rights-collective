
import { CheckCircle } from "lucide-react";

const RightsDetailed = () => {
  return (
    <div className="max-w-5xl mx-auto">
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
    </div>
  );
};

export default RightsDetailed;
