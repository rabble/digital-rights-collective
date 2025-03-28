import Layout from "@/components/layout/Layout";
import RightsHero from "@/components/rights/RightsHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import CallToAction from "@/components/home/CallToAction";

const BillOfRights = () => {
  return (
    <Layout>
      <RightsHero />

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-digital-gray-dark">
              The Social Media Bill of Rights
            </h2>
            <p className="text-lg text-digital-gray-medium mb-6">
              These rights are not just aspirational; they are the foundation for building a more equitable, community-controlled digital future.
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold text-digital-gray-dark">
                  <CheckCircle className="mr-2 h-6 w-6 text-digital-purple" />
                  Privacy & Security
                </AccordionTrigger>
                <AccordionContent className="text-digital-gray-medium">
                  The ability to communicate and organize without fear of surveillance or exploitation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold text-digital-gray-dark">
                  <CheckCircle className="mr-2 h-6 w-6 text-digital-purple" />
                  Ownership
                </AccordionTrigger>
                <AccordionContent className="text-digital-gray-medium">
                  People and their communities must own their digital identities, connections and data, including the right to be forgotten.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold text-digital-gray-dark">
                  <CheckCircle className="mr-2 h-6 w-6 text-digital-purple" />
                  Interoperability & The Right To Exit
                </AccordionTrigger>
                <AccordionContent className="text-digital-gray-medium">
                  The freedom to port your community in its entirety, to another app without losing your connections and content.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold text-digital-gray-dark">
                  <CheckCircle className="mr-2 h-6 w-6 text-digital-purple" />
                  Algorithmic Transparency & Control
                </AccordionTrigger>
                <AccordionContent className="text-digital-gray-medium">
                  Choosing the algorithms that shape your interactions: no more black box systems optimizing for engagement at the expense of community well-being.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold text-digital-gray-dark">
                  <CheckCircle className="mr-2 h-6 w-6 text-digital-purple" />
                  Self-governance
                </AccordionTrigger>
                <AccordionContent className="text-digital-gray-medium">
                  Crucially, communities need the right to self-govern, setting their own rules for behavior which are contextually relevant to their community.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default BillOfRights;
