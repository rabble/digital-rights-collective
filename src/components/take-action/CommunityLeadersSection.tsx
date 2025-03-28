
import React from "react";
import MigrationCard from "./community-leaders/MigrationCard";
import EducationCard from "./community-leaders/EducationCard";
import GovernanceCard from "./community-leaders/GovernanceCard";
import ConnectionCard from "./community-leaders/ConnectionCard";
import LeadershipReminder from "./community-leaders/LeadershipReminder";
import LeadersCTA from "./community-leaders/LeadersCTA";

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

      {/* Action Cards */}
      <MigrationCard />
      <EducationCard />
      <GovernanceCard />
      <ConnectionCard />
      
      {/* Conclusion */}
      <LeadershipReminder />
      
      {/* CTA */}
      <LeadersCTA />
    </div>
  );
};

export default CommunityLeadersSection;
