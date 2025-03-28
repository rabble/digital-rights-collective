
import { Check, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CommunityLeadersSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-digital-gray-dark">
          For Community Leaders
        </h2>
        <p className="text-lg text-digital-gray-medium">
          As someone who manages or moderates an online community, you have unique influence and responsibility. 
          Your decisions can help shape a better digital future for your members and set an example for other communities.
        </p>
      </div>

      {/* Plan Migration Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-digital-purple flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Plan Migration Strategies to Open Protocols
          </CardTitle>
          <CardDescription>
            Moving your community to platforms that respect digital rights helps protect your members and ensures long-term stability.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Start with a community assessment:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>What are your community's specific needs?</li>
                  <li>Which rights matter most to your particular group?</li>
                  <li>What features are essential versus nice-to-have?</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Research platform options:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>For discussion communities, consider Discourse or platforms on the Fediverse</li>
                  <li>For real-time chat, explore Matrix instances or Signal groups</li>
                  <li>For content creation, look into Ghost, Write.as, or other platforms with data portability</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Develop a phased approach:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Begin with a small pilot group to test the new platform</li>
                  <li>Create comprehensive guides tailored to your community's technical comfort level</li>
                  <li>Set a realistic timeline with clear milestones</li>
                  <li>Consider maintaining presences on both old and new platforms during transition</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Address common concerns proactively:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Prepare answers for questions about accessibility, learning curves, and why the move matters</li>
                  <li>Highlight the long-term benefits of platform independence and data ownership</li>
                  <li>Create support systems for members who need extra help migrating</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Success story:</p>
            <p className="text-digital-gray-medium italic">
              "Our neighborhood mutual aid group moved from Facebook to a combination of Matrix and a self-hosted forum. 
              Though the transition took three months, we now have complete control over our data, better privacy for vulnerable members, 
              and our own governance systems."
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Educate Your Community */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-digital-purple flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Educate Your Community on Digital Rights
          </CardTitle>
          <CardDescription>
            Most people don't understand how current platforms limit their rights until they experience the alternatives.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Make digital literacy part of your community culture:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Host regular discussions about platform policies and their impacts</li>
                  <li>Share accessible resources explaining concepts like algorithms, data ownership, and privacy</li>
                  <li>Connect abstract rights to concrete experiences your community has had</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Use real examples from your community's history:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Times when platform algorithms buried important announcements</li>
                  <li>Instances of arbitrary content removal or account suspension</li>
                  <li>Challenges in organizing community activities due to platform limitations</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Create custom educational materials:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Develop guides specific to your community's context and needs</li>
                  <li>Use analogies and examples that resonate with your particular group</li>
                  <li>Translate complex technical concepts into language that makes sense for your members</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Invite experts for Q&A sessions:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Connect with digital rights advocates who can speak to your community</li>
                  <li>Host workshops on privacy tools and practices</li>
                  <li>Create spaces for members to ask questions they might be embarrassed to ask elsewhere</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Resource tip:</p>
            <p className="text-digital-gray-medium italic">
              "We created a 'Digital Rights Corner' in our weekly newsletter, featuring one concept explained simply each week. 
              After six months, our members were having sophisticated conversations about algorithmic bias and interoperability."
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Develop Community Governance */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-digital-purple flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Develop Community Governance Processes
          </CardTitle>
          <CardDescription>
            Self-governance is at the heart of the Digital Bill of Rights. Building these processes now prepares your community for more autonomous platforms.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Document your current implicit norms:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>What unwritten rules does your community already follow?</li>
                  <li>How are decisions currently made?</li>
                  <li>What values guide your community's interactions?</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Create transparent moderation practices:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Develop clear, accessible community guidelines</li>
                  <li>Establish processes for addressing violations</li>
                  <li>Consider graduated responses rather than binary enforcement</li>
                  <li>Create appeals processes for moderation decisions</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Implement collective decision-making:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Explore models like consensus, democratic voting, or representative councils</li>
                  <li>Develop processes appropriate to your community's size and needs</li>
                  <li>Create transparent systems for proposing and implementing changes</li>
                  <li>Document decisions and their rationales</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Distribute responsibility:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Train multiple moderators to reduce burnout and single points of failure</li>
                  <li>Create clear roles and responsibilities</li>
                  <li>Build systems for moderator accountability</li>
                  <li>Develop mentorship programs for new community leaders</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Governance example:</p>
            <p className="text-digital-gray-medium italic">
              "Our professional community created a rotating council of seven members who serve three-month terms. 
              Major policy decisions require council approval, while day-to-day moderation follows established guidelines. 
              This distributed approach has increased trust and participation."
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Connect with Other Communities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-digital-purple flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Connect with Other Communities
          </CardTitle>
          <CardDescription>
            The strength of this movement comes from communities working together and sharing knowledge.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Build a network of allied communities:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Identify other groups with similar values or interests</li>
                  <li>Establish regular communication channels between community leaders</li>
                  <li>Create shared resources and documentation</li>
                  <li>Develop mutual aid systems for technical support</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Share your migration experiences:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Document your successes and challenges</li>
                  <li>Create templates and guides others can adapt</li>
                  <li>Offer direct support to communities considering similar moves</li>
                  <li>Be honest about what worked and what didn't</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Collaborate on advocacy:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Join forces to approach platforms with common concerns</li>
                  <li>Support each other's campaigns and initiatives</li>
                  <li>Amplify each other's messages across networks</li>
                  <li>Present united fronts when negotiating with platforms or policymakers</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-dark mb-1">Create joint events and initiatives:</p>
                <ul className="ml-6 list-disc text-digital-gray-medium">
                  <li>Host inter-community discussions on digital rights</li>
                  <li>Organize shared workshops and skill-sharing sessions</li>
                  <li>Develop collaborative projects that demonstrate alternative models</li>
                  <li>Build solidarity across different types of communities</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Connection story:</p>
            <p className="text-digital-gray-medium italic">
              "When our artist collective migrated to a new platform, three other communities had already made the move. 
              Their documentation saved us weeks of work, and they offered direct support through the transition. 
              Now we're doing the same for newer communities."
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Conclusion */}
      <div className="bg-digital-purple/10 p-6 rounded-lg border-l-4 border-digital-purple">
        <h3 className="text-xl font-semibold text-digital-purple mb-4">
          Remember: Your Leadership Makes a Difference
        </h3>
        
        <p className="text-digital-gray-medium mb-4">
          As a community leader, your decisions influence not just your own members, but potentially thousands of others. 
          By prioritizing digital rights in your community strategy, you're helping build momentum toward a better internet for everyone.
        </p>
        
        <p className="text-digital-gray-medium mb-4">
          The communities that thrive in the future will be those that invest in ownership, privacy, interoperability, 
          algorithmic transparency, and self-governance today.
        </p>
      </div>
      
      {/* CTA */}
      <div className="text-center p-8 bg-digital-coral/10 rounded-lg">
        <h3 className="text-xl font-semibold text-digital-coral mb-4">
          Need personalized guidance?
        </h3>
        
        <p className="text-digital-gray-medium mb-6">
          Connect with our network of community leaders who have successfully navigated these transitions. 
          Sign up for our community leader workshops or join our dedicated discussion forum for ongoing support.
        </p>
        
        <Button className="bg-digital-coral hover:bg-digital-coral/90 text-white">
          Join Our Community Leaders Network
        </Button>
      </div>
    </div>
  );
};

export default CommunityLeadersSection;
