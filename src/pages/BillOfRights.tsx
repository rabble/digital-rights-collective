
import Layout from "@/components/layout/Layout";
import RightsHero from "@/components/rights/RightsHero";
import RightsPrinciples from "@/components/rights/RightsPrinciples";
import RightsDetailed from "@/components/rights/RightsDetailed";
import RightsFramework from "@/components/rights/RightsFramework";
import RightsCTA from "@/components/rights/RightsCTA";
import CallToAction from "@/components/home/CallToAction";

const BillOfRights = () => {
  return (
    <Layout>
      <RightsHero />
      
      {/* Rights Principles Section */}
      <RightsPrinciples />
      
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-digital-gray-light">
        <div className="container">
          <RightsDetailed />
          <RightsCTA />
        </div>
      </section>

      <RightsFramework />
      <CallToAction />
    </Layout>
  );
};

export default BillOfRights;
