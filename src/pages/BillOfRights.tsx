
import { Shield, Lock, Database, Shuffle, LineChart, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import RightCard from "@/components/rights/RightCard";

const BillOfRights = () => {
  const rights = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Privacy & Security",
      description: "The ability to communicate and organize without fear of surveillance or exploitation. Communities must have control over their own spaces and communications.",
      violations: [
        "Platforms tracking all user interactions to build advertising profiles",
        "Content and communications being sold to third-party data brokers",
        "Government access to user communications without warrant or transparency",
        "Public posts being scraped to train AI systems without consent"
      ],
      implementations: [
        "End-to-end encryption for all community communications",
        "Transparency about what data is collected and how it's used",
        "User control over data collection and sharing",
        "Protection from unauthorized surveillance by corporations or governments"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Ownership",
      description: "People and their communities must own their digital identities, connections and data, including the right to be forgotten. Your identity and content belongs to you, not the platform.",
      violations: [
        "Inability to fully delete your account and data",
        "Platforms claiming ownership of user-generated content",
        "No way to download your complete social graph and connections",
        "Platforms using your content for AI training without compensation"
      ],
      implementations: [
        "Full data portability with complete export options",
        "Clear user ownership of all created content",
        "Ability to fully delete accounts and all associated data",
        "User control over how their content is used by the platform"
      ]
    },
    {
      icon: <Shuffle className="h-6 w-6" />,
      title: "Interoperability & The Right To Exit",
      description: "The freedom to port your community in its entirety to another app without losing your connections and content. Communities shouldn't be locked into a single platform.",
      violations: [
        "Closed platforms that don't allow users to connect across services",
        "No ability to maintain connections when moving to a new platform",
        "API restrictions that prevent community tools from working",
        "Blocking third-party clients that offer better experiences"
      ],
      implementations: [
        "Open APIs that allow connections across platforms",
        "Support for open protocols like ActivityPub",
        "Tools for migrating entire communities to new platforms",
        "No artificial barriers to connecting with users on other services"
      ]
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Algorithmic Transparency & Control",
      description: "Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being.",
      violations: [
        "Hidden algorithms that prioritize engagement over community wellbeing",
        "No user control over content sorting and filtering",
        "Algorithmic amplification of harmful content",
        "No transparency about how content is ranked and displayed"
      ],
      implementations: [
        "User choice in algorithmic ranking and filtering",
        "Transparent documentation of how algorithms work",
        "Community control over what content is amplified",
        "Algorithmic optimization for community wellbeing, not just engagement"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Self-governance",
      description: "Communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community. Digital spaces should mirror how real communities operate.",
      violations: [
        "One-size-fits-all global platform policies",
        "Automated moderation without human oversight",
        "No appeals process for moderation decisions",
        "Inability for communities to set and enforce their own rules"
      ],
      implementations: [
        "Community control over moderation policies",
        "Democratic processes for leadership and rule-setting",
        "Tools for communities to enforce their own standards",
        "Independence from corporate or government interference"
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex bg-white/10 p-2 rounded-full mb-6">
              <Shield className="h-6 w-6 mr-2" />
              <span className="font-semibold">The Digital Bill of Rights</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              The Five Fundamental Digital Rights
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              Just as the original Bill of Rights protected individual freedoms from government overreach, 
              we need fundamental protections for our digital communities from corporate control and surveillance capitalism.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <h2>Why We Need A Digital Bill of Rights</h2>
              <p>
                Our digital spaces have become increasingly hostile to genuine community needs. 
                The promise of social media – to connect and empower communities – has been subverted 
                by business models that treat human connection as a commodity to be monetized.
              </p>
              <p>
                Today, if you run an online community with thousands of members, you have no real authority – 
                your community exists at the whim of corporate policies you cannot influence. This is fundamentally 
                at odds with how real-world communities have always operated.
              </p>
              <p>
                The time has come to establish these five fundamental rights that all digital platforms 
                should uphold. These rights form the foundation of a healthier, more equitable digital commons.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rights.map((right, index) => (
                <RightCard 
                  key={index}
                  icon={right.icon}
                  title={right.title}
                  description={right.description}
                  violations={right.violations}
                  implementations={right.implementations}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-digital-gray-light">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Take Action for Digital Rights
            </h2>
            
            <p className="text-lg text-digital-gray-medium mb-10 max-w-2xl mx-auto">
              These rights won't be granted – they must be claimed. Join us in building 
              a movement for a more equitable, community-controlled digital future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">For General Users</h3>
                <ul className="text-left space-y-2 text-digital-gray-medium">
                  <li>• Explore open protocol alternatives</li>
                  <li>• Share the Bill of Rights with your networks</li>
                  <li>• Demand better from the platforms you use</li>
                  <li>• Support community-driven technology</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">For Community Leaders</h3>
                <ul className="text-left space-y-2 text-digital-gray-medium">
                  <li>• Plan migration strategies to open protocols</li>
                  <li>• Educate your community on digital rights</li>
                  <li>• Develop community governance processes</li>
                  <li>• Connect with other communities</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark">For Developers</h3>
                <ul className="text-left space-y-2 text-digital-gray-medium">
                  <li>• Build on open protocols, not closed platforms</li>
                  <li>• Contribute to open source projects</li>
                  <li>• Design with community governance in mind</li>
                  <li>• Prioritize user rights and privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BillOfRights;
