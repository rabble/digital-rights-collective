
import { Shield, ExternalLink, Lightbulb, Code, Link, Share2, Check, ArrowRight, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link as RouterLink } from "react-router-dom";
import CommunityLeadersSection from "@/components/take-action/CommunityLeadersSection";
import DevelopersSection from "@/components/take-action/DevelopersSection";

const TakeAction = () => {
  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex bg-white/10 p-2 rounded-full mb-6">
              <Shield className="h-6 w-6 mr-2" />
              <span className="font-semibold">Take Action</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Take Action for Digital Rights
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              These rights won't be granted – they must be claimed. Join us in building 
              a movement for a more equitable, community-controlled digital future.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
                  <Users className="w-5 h-5 text-digital-purple" />
                  For General Users
                </h3>
                <p className="mb-4 text-digital-gray-medium">
                  As an everyday internet user, you have more power than you might think.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5"
                  asChild
                >
                  <a href="#what-you-can-do">
                    Learn what you can do
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
                  <Shield className="w-5 h-5 text-digital-purple" />
                  For Community Leaders
                </h3>
                <ul className="text-left space-y-2 text-digital-gray-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Plan migration strategies to open protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Educate your community on digital rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Develop community governance processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Connect with other communities</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5 mt-4"
                  asChild
                >
                  <a href="#for-community-leaders">
                    View detailed guide
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-4 text-digital-gray-dark flex items-center gap-2">
                  <Code className="w-5 h-5 text-digital-purple" />
                  For Developers
                </h3>
                <ul className="text-left space-y-2 text-digital-gray-medium">
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Build on open protocols, not closed platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Contribute to open source projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Design with community governance in mind</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-digital-purple font-bold">•</span>
                    <span>Prioritize user rights and privacy</span>
                  </li>
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full justify-between text-digital-purple border-digital-purple/30 hover:bg-digital-purple/5 mt-4"
                  asChild
                >
                  <a href="#for-developers">
                    View detailed guide
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* "What You Can Do" section */}
            <div id="what-you-can-do" className="bg-white p-8 rounded-lg shadow-md mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
                What You Can Do
              </h2>
              
              <p className="text-lg text-digital-gray-medium mb-8">
                As an everyday internet user, you have more power than you might think. Your choices and 
                actions can help build a better digital world where communities thrive and rights are respected.
              </p>
              
              <div className="space-y-12">
                {/* Explore Open Protocol Alternatives */}
                <div>
                  <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
                    <ExternalLink className="h-5 w-5" />
                    Explore Open Protocol Alternatives
                  </h3>
                  
                  <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark">
                      Why it matters:
                    </p>
                    <p className="text-digital-gray-medium">
                      Every time you join an open protocol platform, you're voting with your digital presence for a more equitable internet.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-digital-gray-dark mb-2">
                      Take action:
                    </p>
                    <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                      <li>
                        <strong>Try Mastodon</strong> (<a href="https://joinmastodon.org" className="text-digital-purple hover:underline" target="_blank" rel="noopener noreferrer">joinmastodon.org</a>) - A Twitter/X alternative where no single company controls your experience
                      </li>
                      <li>
                        <strong>Explore BlueSky</strong> (<a href="https://bsky.app" className="text-digital-purple hover:underline" target="_blank" rel="noopener noreferrer">bsky.app</a>) - Experience algorithm choice and portable identity
                      </li>
                      <li>
                        <strong>Check out Nostr</strong> (<a href="https://nostr.com" className="text-digital-purple hover:underline" target="_blank" rel="noopener noreferrer">nostr.com</a>) - See what truly censorship-resistant communication feels like
                      </li>
                      <li>
                        <strong>Use Signal</strong> (<a href="https://signal.org" className="text-digital-purple hover:underline" target="_blank" rel="noopener noreferrer">signal.org</a>) - Communicate privately without surveillance
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-digital-gray-light/50 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark mb-1">Getting started tip:</p>
                    <p className="text-digital-gray-medium">
                      You don't have to abandon your existing accounts immediately. Start by creating profiles on these alternatives and gradually building your presence there. Many communities are already thriving on these platforms.
                    </p>
                  </div>
                </div>
                
                {/* Share the Bill of Rights */}
                <div>
                  <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
                    <Share2 className="h-5 w-5" />
                    Share the Bill of Rights
                  </h3>
                  
                  <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark">
                      Why it matters:
                    </p>
                    <p className="text-digital-gray-medium">
                      Most people don't realize there's an alternative to corporate-controlled social media. Your share could be someone's first exposure to these ideas.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-digital-gray-dark mb-2">
                      Take action:
                    </p>
                    <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                      <li>Share this Bill of Rights on your existing social networks</li>
                      <li>Use the hashtag #DigitalBillOfRights when posting</li>
                      <li>Have conversations with friends and family about digital rights</li>
                      <li>Ask the question: "Who really controls your online community?"</li>
                    </ul>
                  </div>
                  
                  <div className="bg-digital-gray-light/50 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark mb-1">Conversation starter:</p>
                    <p className="text-digital-gray-medium italic">
                      "Did you know that Facebook can shut down a group with thousands of members without explanation or appeal? I just learned about some alternatives that put communities back in control..."
                    </p>
                  </div>
                </div>
                
                {/* Demand Better from Your Platforms */}
                <div>
                  <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
                    <Lightbulb className="h-5 w-5" />
                    Demand Better from Your Platforms
                  </h3>
                  
                  <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark">
                      Why it matters:
                    </p>
                    <p className="text-digital-gray-medium">
                      Companies respond to user pressure, especially when it's public and persistent.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-digital-gray-dark mb-2">
                      Take action:
                    </p>
                    <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                      <li>
                        Ask your current platforms direct questions about their policies on:
                        <ul className="ml-5 mt-2 space-y-1 list-disc">
                          <li>Data portability and export options</li>
                          <li>Community moderation tools</li>
                          <li>Algorithm transparency</li>
                          <li>Privacy practices</li>
                        </ul>
                      </li>
                      <li>Leave public reviews mentioning digital rights concerns</li>
                      <li>Support and amplify others who are asking tough questions</li>
                      <li>When platforms make changes, acknowledge improvements (positive reinforcement works)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-digital-gray-light/50 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark mb-1">Sample message:</p>
                    <p className="text-digital-gray-medium italic">
                      "I value my community on [Platform], but I'm concerned about our lack of control over how our content is distributed. When will you provide transparency into how your algorithm works and give us options to choose different algorithms?"
                    </p>
                  </div>
                </div>
                
                {/* Support Community-Driven Technology */}
                <div>
                  <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
                    <Link className="h-5 w-5" />
                    Support Community-Driven Technology
                  </h3>
                  
                  <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark">
                      Why it matters:
                    </p>
                    <p className="text-digital-gray-medium">
                      The alternatives need users, developers, and advocates to thrive.
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium text-digital-gray-dark mb-2">
                      Take action:
                    </p>
                    <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                      <li>Contribute to open-source projects if you have technical skills</li>
                      <li>Donate to organizations building open protocols</li>
                      <li>Help community members migrate to better platforms</li>
                      <li>Offer your professional skills (design, writing, legal, etc.) to digital rights projects</li>
                      <li>Join community governance processes on platforms that offer them</li>
                    </ul>
                  </div>
                  
                  <div className="bg-digital-gray-light/50 p-4 rounded-lg">
                    <p className="font-medium text-digital-gray-dark mb-1">Getting involved tip:</p>
                    <p className="text-digital-gray-medium">
                      You don't need to be a programmer to contribute. Translation, documentation, user testing, and simply being an active, constructive community member are all valuable contributions.
                    </p>
                  </div>
                </div>
                
                {/* Remember: This Is About Community */}
                <div className="bg-digital-purple/10 p-6 rounded-lg border-l-4 border-digital-purple">
                  <h3 className="text-xl font-semibold text-digital-purple mb-4">
                    Remember: This Is About Community
                  </h3>
                  
                  <p className="text-digital-gray-medium mb-4">
                    Digital rights aren't abstract technical concepts—they're about ensuring that your communities can:
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-digital-purple flex-shrink-0 mt-0.5" />
                      <span className="text-digital-gray-medium">Communicate safely</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-digital-purple flex-shrink-0 mt-0.5" />
                      <span className="text-digital-gray-medium">Make their own decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-digital-purple flex-shrink-0 mt-0.5" />
                      <span className="text-digital-gray-medium">Move freely between platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-digital-purple flex-shrink-0 mt-0.5" />
                      <span className="text-digital-gray-medium">Understand how their information is being shared</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-digital-purple flex-shrink-0 mt-0.5" />
                      <span className="text-digital-gray-medium">Exist without fear of arbitrary deplatforming</span>
                    </li>
                  </ul>
                  
                  <p className="text-digital-gray-medium">
                    When you take any of these actions, you're not just changing your own experience—you're helping build a better digital ecosystem for everyone.
                  </p>
                </div>
                
                {/* Ready to go deeper */}
                <div className="text-center p-8 bg-digital-coral/10 rounded-lg">
                  <h3 className="text-xl font-semibold text-digital-coral mb-4">
                    Ready to go deeper?
                  </h3>
                  
                  <p className="text-digital-gray-medium mb-6">
                    Join our mailing list for more detailed guides, success stories, and movement updates as we build a better social media landscape together.
                  </p>
                  
                  <Button className="bg-digital-coral hover:bg-digital-coral/90 text-white">
                    Join the Movement
                  </Button>
                </div>
              </div>
            </div>
            
            {/* "For Community Leaders" section */}
            <div id="for-community-leaders" className="bg-white p-8 rounded-lg shadow-md mb-16">
              <CommunityLeadersSection />
            </div>
            
            {/* "For Developers" section */}
            <div id="for-developers" className="bg-white p-8 rounded-lg shadow-md">
              <DevelopersSection />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TakeAction;
