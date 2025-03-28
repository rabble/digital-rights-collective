
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import RightsPreview from "@/components/home/RightsPreview";
import PlatformComparisonPreview from "@/components/home/PlatformComparisonPreview";
import CallToAction from "@/components/home/CallToAction";
import PodcastPromo from "@/components/home/PodcastPromo";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <RightsPreview />
      <PlatformComparisonPreview />
      <PodcastPromo />
      <CallToAction />
    </Layout>
  );
};

export default Index;
