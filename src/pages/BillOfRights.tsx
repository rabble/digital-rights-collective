
import Layout from "@/components/layout/Layout";
import RightsHero from "@/components/rights/RightsHero";
import RightsPrinciples from "@/components/rights/RightsPrinciples";
import RightsDetailed from "@/components/rights/RightsDetailed";
import RightsFramework from "@/components/rights/RightsFramework";
import RightsCTA from "@/components/rights/RightsCTA";
import CallToAction from "@/components/home/CallToAction";
import { ArrowRight } from "lucide-react";

const BillOfRights = () => {
  return (
    <Layout>
      <main id="main-content">
        <RightsHero />
        
        <section aria-labelledby="rights-principles-heading">
          <RightsPrinciples />
        </section>
        
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-digital-gray-light" aria-labelledby="rights-detailed-heading">
          <div className="container">
            <RightsDetailed />
            <RightsCTA />
          </div>
        </section>

        <RightsFramework />
        <CallToAction />
      </main>
    </Layout>
  );
};

export default BillOfRights;
