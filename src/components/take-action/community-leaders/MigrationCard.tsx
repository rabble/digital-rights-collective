
import { ExternalLink } from "lucide-react";
import ActionCard from "../ActionCard";
import ActionItem from "../ActionItem";
import TestimonialBox from "../TestimonialBox";

const MigrationCard = () => {
  return (
    <ActionCard
      icon={ExternalLink}
      title="Plan Migration Strategies to Open Protocols"
      description="Moving your community to platforms that respect digital rights helps protect your members and ensures long-term stability."
    >
      <div>
        <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
        <div className="space-y-4">
          <ActionItem
            title="Start with a community assessment:"
            listItems={[
              "What are your community's specific needs?",
              "Which rights matter most to your particular group?",
              "What features are essential versus nice-to-have?"
            ]}
          />
          
          <ActionItem
            title="Research platform options:"
            listItems={[
              "For discussion communities, consider Discourse or platforms on the Fediverse",
              "For real-time chat, explore Matrix instances or Signal groups",
              "For content creation, look into Ghost, Write.as, or other platforms with data portability"
            ]}
          />
          
          <ActionItem
            title="Develop a phased approach:"
            listItems={[
              "Begin with a small pilot group to test the new platform",
              "Create comprehensive guides tailored to your community's technical comfort level",
              "Set a realistic timeline with clear milestones",
              "Consider maintaining presences on both old and new platforms during transition"
            ]}
          />
          
          <ActionItem
            title="Address common concerns proactively:"
            listItems={[
              "Prepare answers for questions about accessibility, learning curves, and why the move matters",
              "Highlight the long-term benefits of platform independence and data ownership",
              "Create support systems for members who need extra help migrating"
            ]}
          />
        </div>
      </div>
      
      <TestimonialBox
        label="Success story"
        quote="Our neighborhood mutual aid group moved from Facebook to a combination of Matrix and a self-hosted forum. Though the transition took three months, we now have complete control over our data, better privacy for vulnerable members, and our own governance systems."
      />
    </ActionCard>
  );
};

export default MigrationCard;
