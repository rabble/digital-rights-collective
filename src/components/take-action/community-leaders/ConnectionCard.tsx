
import { ExternalLink } from "lucide-react";
import ActionCard from "../ActionCard";
import ActionItem from "../ActionItem";
import TestimonialBox from "../TestimonialBox";

const ConnectionCard = () => {
  return (
    <ActionCard
      icon={ExternalLink}
      title="Connect with Other Communities"
      description="The strength of this movement comes from communities working together and sharing knowledge."
    >
      <div>
        <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
        <div className="space-y-4">
          <ActionItem
            title="Build a network of allied communities:"
            listItems={[
              "Identify other groups with similar values or interests",
              "Establish regular communication channels between community leaders",
              "Create shared resources and documentation",
              "Develop mutual aid systems for technical support"
            ]}
          />
          
          <ActionItem
            title="Share your migration experiences:"
            listItems={[
              "Document your successes and challenges",
              "Create templates and guides others can adapt",
              "Offer direct support to communities considering similar moves",
              "Be honest about what worked and what didn't"
            ]}
          />
          
          <ActionItem
            title="Collaborate on advocacy:"
            listItems={[
              "Join forces to approach platforms with common concerns",
              "Support each other's campaigns and initiatives",
              "Amplify each other's messages across networks",
              "Present united fronts when negotiating with platforms or policymakers"
            ]}
          />
          
          <ActionItem
            title="Create joint events and initiatives:"
            listItems={[
              "Host inter-community discussions on digital rights",
              "Organize shared workshops and skill-sharing sessions",
              "Develop collaborative projects that demonstrate alternative models",
              "Build solidarity across different types of communities"
            ]}
          />
        </div>
      </div>
      
      <TestimonialBox
        label="Connection story"
        quote="When our artist collective migrated to a new platform, three other communities had already made the move. Their documentation saved us weeks of work, and they offered direct support through the transition. Now we're doing the same for newer communities."
      />
    </ActionCard>
  );
};

export default ConnectionCard;
