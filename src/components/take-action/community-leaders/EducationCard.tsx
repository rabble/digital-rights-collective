
import { ExternalLink } from "lucide-react";
import ActionCard from "../ActionCard";
import ActionItem from "../ActionItem";
import TestimonialBox from "../TestimonialBox";

const EducationCard = () => {
  return (
    <ActionCard
      icon={ExternalLink}
      title="Educate Your Community on Digital Rights"
      description="Most people don't understand how current platforms limit their rights until they experience the alternatives."
    >
      <div>
        <h4 className="font-medium text-digital-gray-dark mb-2">Take action:</h4>
        <div className="space-y-4">
          <ActionItem
            title="Make digital literacy part of your community culture:"
            listItems={[
              "Host regular discussions about platform policies and their impacts",
              "Share accessible resources explaining concepts like algorithms, data ownership, and privacy",
              "Connect abstract rights to concrete experiences your community has had"
            ]}
          />
          
          <ActionItem
            title="Use real examples from your community's history:"
            listItems={[
              "Times when platform algorithms buried important announcements",
              "Instances of arbitrary content removal or account suspension",
              "Challenges in organizing community activities due to platform limitations"
            ]}
          />
          
          <ActionItem
            title="Create custom educational materials:"
            listItems={[
              "Develop guides specific to your community's context and needs",
              "Use analogies and examples that resonate with your particular group",
              "Translate complex technical concepts into language that makes sense for your members"
            ]}
          />
          
          <ActionItem
            title="Invite experts for Q&A sessions:"
            listItems={[
              "Connect with digital rights advocates who can speak to your community",
              "Host workshops on privacy tools and practices",
              "Create spaces for members to ask questions they might be embarrassed to ask elsewhere"
            ]}
          />
        </div>
      </div>
      
      <TestimonialBox
        label="Resource tip"
        quote="We created a 'Digital Rights Corner' in our weekly newsletter, featuring one concept explained simply each week. After six months, our members were having sophisticated conversations about algorithmic bias and interoperability."
      />
    </ActionCard>
  );
};

export default EducationCard;
