
import Layout from "@/components/layout/Layout";
import TakeActionHero from "@/components/take-action/TakeActionHero";
import ActionCategoryCards from "@/components/take-action/ActionCategoryCards";
import GeneralUsersSection from "@/components/take-action/GeneralUsersSection";
import CommunityLeadersSection from "@/components/take-action/CommunityLeadersSection";
import DevelopersSection from "@/components/take-action/DevelopersSection";
import SectionWrapper from "@/components/take-action/SectionWrapper";

const TakeAction = () => {
  return (
    <Layout>
      <TakeActionHero />
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <ActionCategoryCards />
            
            <GeneralUsersSection />
            
            <SectionWrapper id="for-community-leaders" className="mb-16">
              <CommunityLeadersSection />
            </SectionWrapper>
            
            <SectionWrapper id="for-developers">
              <DevelopersSection />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TakeAction;
