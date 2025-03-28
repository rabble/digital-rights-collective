
import { ExternalLink } from "lucide-react";
import ActionCard from "../ActionCard";
import ActionItem from "../ActionItem";
import TestimonialBox from "../TestimonialBox";

const GovernanceCard = () => {
  return (
    <ActionCard
      icon={ExternalLink}
      title="Develop Community Governance Processes"
      description="Self-governance is at the heart of the Digital Bill of Rights. Building these processes now prepares your community for more autonomous platforms."
    >
      <div>
        <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
        <div className="space-y-4">
          <ActionItem
            title="Document your current implicit norms:"
            listItems={[
              "What unwritten rules does your community already follow?",
              "How are decisions currently made?",
              "What values guide your community's interactions?"
            ]}
          />
          
          <ActionItem
            title="Create transparent moderation practices:"
            listItems={[
              "Develop clear, accessible community guidelines",
              "Establish processes for addressing violations",
              "Consider graduated responses rather than binary enforcement",
              "Create appeals processes for moderation decisions"
            ]}
          />
          
          <ActionItem
            title="Implement collective decision-making:"
            listItems={[
              "Explore models like consensus, democratic voting, or representative councils",
              "Develop processes appropriate to your community's size and needs",
              "Create transparent systems for proposing and implementing changes",
              "Document decisions and their rationales"
            ]}
          />
          
          <ActionItem
            title="Distribute responsibility:"
            listItems={[
              "Train multiple moderators to reduce burnout and single points of failure",
              "Create clear roles and responsibilities",
              "Build systems for moderator accountability",
              "Develop mentorship programs for new community leaders"
            ]}
          />
        </div>
      </div>
      
      <TestimonialBox
        label="Governance example"
        quote="Our professional community created a rotating council of seven members who serve three-month terms. Major policy decisions require council approval, while day-to-day moderation follows established guidelines. This distributed approach has increased trust and participation."
      />
    </ActionCard>
  );
};

export default GovernanceCard;
