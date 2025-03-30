import { Code, ExternalLink, Github, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const DevelopersSection = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark flex items-center gap-2">
        <Code className="h-7 w-7 text-digital-purple" />
        For Developers
      </h2>

      <p className="text-lg text-digital-gray-medium mb-8">
        As a developer, you have unique power to shape the digital world. Your technical skills can help build the foundation for a more equitable internet where communities have true agency and control over their digital spaces.
      </p>

      <div className="space-y-12">
        {/* Build on Open Protocols */}
        <div>
          <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
            <ExternalLink className="h-5 w-5" />
            Build on Open Protocols, Not Closed Platforms
          </h3>
          
          <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark">
              Why it matters:
            </p>
            <p className="text-digital-gray-medium">
              The architecture decisions you make today determine whether users will have freedom and control tomorrow. Open protocols create permissionless innovation and prevent platform lock-in.
            </p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-digital-gray-dark mb-2">
              Take action:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Evaluate protocols before platforms:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>When starting new projects, first ask: "Could this be built on an open protocol?"</li>
                  <li>Prioritize ATProtocol for social networking with algorithmic choice</li>
                  <li>Embrace Nostr for censorship-resistant, decentralized communication</li>
                  <li>Explore Matrix for real-time communication components</li>
                  <li>Consider ActivityPub as an additional option for federation capabilities</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Design for interoperability from day one:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Implement standard data formats (ActivityStreams, JSON-LD, etc.)</li>
                  <li>Create clear API documentation that follows REST or GraphQL best practices</li>
                  <li>Build import/export functionality as core features, not afterthoughts</li>
                  <li>Separate data models from platform-specific implementations</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Embrace open protocol ecosystems:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Implement ATProtocol for its superior data model and algorithmic choice</li>
                  <li>Build with Nostr for truly decentralized and resilient applications</li>
                  <li>Create bridges between different protocols where possible</li>
                  <li>Contribute to standards development and implementation</li>
                  <li>Design with protocol interoperability in mind, even for currently centralized applications</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Document your architectural decisions:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Explain the benefits of open protocols to stakeholders and clients</li>
                  <li>Create case studies showing how open protocols solve business problems</li>
                  <li>Highlight the long-term sustainability advantages</li>
                  <li>Address common concerns about scalability and reliability</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Developer insight:</p>
            <p className="text-digital-gray-medium italic">
              "When we rebuilt our community platform using ATProtocol instead of a proprietary API, development time increased by 20% initially. But six months later, our users had algorithm choice, better data portability, and a growing ecosystem of compatible tools. The architecture allowed us to focus on creating value rather than reinventing infrastructure."
            </p>
          </div>
        </div>
        
        {/* Contribute to Open Source Projects */}
        <div>
          <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
            <Github className="h-5 w-5" />
            Contribute to Open Source Projects
          </h3>
          
          <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark">
              Why it matters:
            </p>
            <p className="text-digital-gray-medium">
              Many crucial digital rights projects need developer support. Your contributions can accelerate the adoption of better alternatives.
            </p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-digital-gray-dark mb-2">
              Take action:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Find projects that match your skills:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Help with core protocol implementations (ATProtocol, Nostr, Matrix, etc.)</li>
                  <li>Improve user experiences in open source clients</li>
                  <li>Build bridges between different protocols and platforms</li>
                  <li>Work on accessibility for decentralized tools</li>
                  <li>Create documentation and examples</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Start with small, manageable contributions:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Fix bugs and address issues in existing projects</li>
                  <li>Improve test coverage and build processes</li>
                  <li>Update documentation with clearer examples</li>
                  <li>Add missing features that enhance usability</li>
                  <li>Help with translations and internationalization</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Contribute beyond code:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Participate in protocol design discussions</li>
                  <li>Test implementations and provide feedback</li>
                  <li>Help with project management and coordination</li>
                  <li>Mentor newcomers to the ecosystem</li>
                  <li>Share your expertise through tutorials and guides</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Build sustainable participation:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Set realistic contribution goals</li>
                  <li>Join communities that align with your values</li>
                  <li>Connect with maintainers to understand priorities</li>
                  <li>Share your work and progress publicly</li>
                  <li>Advocate for employer support of open source work</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Contribution path:</p>
            <p className="text-digital-gray-medium italic">
              "I started by fixing documentation in the BlueSky client codebase, then moved on to small bug fixes. After six months, I was helping implement new features on the ATProtocol. My contributions to open protocols now account for 20% of my work time—something I negotiated with my employer after demonstrating the business benefits."
            </p>
          </div>
        </div>
        
        {/* Design with Community Governance in Mind */}
        <div>
          <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
            <Users className="h-5 w-5" />
            Design with Community Governance in Mind
          </h3>
          
          <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark">
              Why it matters:
            </p>
            <p className="text-digital-gray-medium">
              Technical architecture determines governance possibilities. Systems designed with governance as an afterthought rarely enable true community control.
            </p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-digital-gray-dark mb-2">
              Take action:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Embed governance tools in your architecture:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Build moderation and decision-making tools as first-class features</li>
                  <li>Create flexible permission systems that support diverse governance models</li>
                  <li>Design interfaces that make governance processes transparent</li>
                  <li>Enable communities to fork content and configurations when necessary</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Implement consent-based systems:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Design for opt-in rather than opt-out wherever possible</li>
                  <li>Create clear, granular permission controls</li>
                  <li>Build tools that make consent visible and revocable</li>
                  <li>Support both individual and collective consent mechanisms</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Develop with diverse governance models in mind:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Support consensus-based decision making</li>
                  <li>Enable democratic voting mechanisms when appropriate</li>
                  <li>Allow for representative governance structures</li>
                  <li>Create tools for transparent accountability</li>
                  <li>Design for governance evolution over time</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Co-design with communities:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Involve community moderators early in the design process</li>
                  <li>Test governance tools with diverse communities</li>
                  <li>Create mechanisms for ongoing feedback</li>
                  <li>Document the governance assumptions in your code</li>
                  <li>Build flexibility for communities to modify governance as they evolve</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Governance implementation:</p>
            <p className="text-digital-gray-medium italic">
              "We rebuilt our moderation tools to support multiple decision-making models. Communities can choose consensus-required actions, majority voting, or delegated moderation with oversight. The architecture supports all these models without forcing a one-size-fits-all approach."
            </p>
          </div>
        </div>
        
        {/* Prioritize User Rights and Privacy */}
        <div>
          <h3 className="text-xl font-semibold text-digital-purple flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5" />
            Prioritize User Rights and Privacy
          </h3>
          
          <div className="mb-4 bg-digital-purple/5 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark">
              Why it matters:
            </p>
            <p className="text-digital-gray-medium">
              Privacy and user rights shouldn't be add-ons or premium features—they should be fundamental design principles that shape every aspect of your applications.
            </p>
          </div>
          
          <div className="mb-4">
            <p className="font-medium text-digital-gray-dark mb-2">
              Take action:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Adopt privacy by design principles:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Collect only what's necessary for functionality</li>
                  <li>Implement data minimization at every level</li>
                  <li>Design for secure defaults, not optional security</li>
                  <li>Use zero-knowledge proofs where appropriate</li>
                  <li>Create clear data lifecycle policies and implementations</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Build with security fundamentals:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Implement end-to-end encryption where possible</li>
                  <li>Use modern authentication methods</li>
                  <li>Conduct regular security audits</li>
                  <li>Maintain security dependencies proactively</li>
                  <li>Document your security model clearly</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Create genuine user control:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Build comprehensive data export tools</li>
                  <li>Implement the right to be forgotten at the architecture level</li>
                  <li>Give users visibility into how their data is used</li>
                  <li>Create intuitive privacy controls</li>
                  <li>Design systems that work without surveillance</li>
                </ul>
              </div>
              
              <div>
                <p className="font-medium text-digital-gray-medium mb-1">Think beyond compliance:</p>
                <ul className="space-y-2 text-digital-gray-medium ml-5 list-disc">
                  <li>Don't just meet legal requirements—exceed them</li>
                  <li>Consider ethical implications beyond legal obligations</li>
                  <li>Build for global privacy needs, not just your region</li>
                  <li>Create processes for addressing emerging privacy concerns</li>
                  <li>Document your ethical considerations alongside technical decisions</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-digital-gray-light/50 p-4 rounded-lg">
            <p className="font-medium text-digital-gray-dark mb-1">Privacy example:</p>
            <p className="text-digital-gray-medium italic">
              "We rebuilt our analytics system to use differential privacy techniques that give us the aggregate insights we need without tracking individual user behavior. It took more engineering time upfront but eliminated entire categories of privacy risks and compliance issues."
            </p>
          </div>
        </div>
        
        {/* Your Code Makes a Difference */}
        <div className="bg-digital-purple/10 p-6 rounded-lg border-l-4 border-digital-purple">
          <h3 className="text-xl font-semibold text-digital-purple mb-4">
            Your Code Makes a Difference
          </h3>
          
          <p className="text-digital-gray-medium mb-4">
            The technical choices you make as a developer have profound impacts on how people connect, organize, and communicate. By intentionally building systems that respect and enhance digital rights, you're not just writing code—you're helping create a more equitable digital future.
          </p>
          
          <p className="text-digital-gray-medium">
            When you build on open protocols, contribute to open source, design for community governance, and prioritize user rights, you're using your technical skills to shift power back to communities and individuals.
          </p>
        </div>
        
        {/* Want to Connect */}
        <div className="text-center p-8 bg-digital-coral/10 rounded-lg">
          <h3 className="text-xl font-semibold text-digital-coral mb-4">
            Want to Connect with Like-minded Developers?
          </h3>
          
          <p className="text-digital-gray-medium mb-6">
            Join our developer community to share resources, discuss technical challenges, and collaborate on projects that advance digital rights.
          </p>
          
          <Button 
            className="bg-digital-coral hover:bg-digital-coral/90 text-white"
            asChild
          >
            <a href="https://dashboard.mailerlite.com/forms/1225308/150286925399328477/share" target="_blank" rel="noopener noreferrer">
              Join the Developer Network
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DevelopersSection;
