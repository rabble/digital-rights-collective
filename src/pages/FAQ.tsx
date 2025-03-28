
import { Info, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FAQ = () => {
  const faqItems = [
    {
      question: "Why do we need these rights now?",
      answer: "As our social interactions increasingly move online, the platforms that host them have gained unprecedented control over our communities. These rights aim to rebalance power toward the people who actually form and nurture these communities."
    },
    {
      question: "How would these rights be enforced?",
      answer: "While some aspects could eventually be enshrined in law, the immediate goal is to build consumer awareness and encourage platforms to adopt these principles voluntarily. Supporting alternative platforms that already respect these rights is another key strategy."
    },
    {
      question: "Aren't these platforms private companies that can set their own rules?",
      answer: "Yes, but that doesn't mean we should accept whatever terms they offer. Just as consumers have pushed companies to adopt better environmental or labor practices, we can create market pressure for better digital rights practices. Additionally, when platforms become essential public infrastructure, they take on responsibilities beyond those of typical businesses."
    },
    {
      question: "Won't more privacy and community control lead to more harmful content?",
      answer: "Not necessarily. Community self-governance doesn't mean no governance—it means governance that's contextual and accountable to community members rather than distant corporate policies. Many community-governed spaces have stricter, more effective moderation than algorithm-driven platforms because they're built on shared values and human judgment."
    },
    {
      question: "What about national security or law enforcement needs?",
      answer: "Privacy rights should be balanced with legitimate public safety concerns, but the current model gives too much data to both corporations and governments with too little transparency. Better systems would limit data collection in the first place and require proper legal processes for access to what data is collected."
    },
    {
      question: "Don't these platforms need to monetize through advertising?",
      answer: "Advertising isn't necessarily incompatible with these rights, but surveillance-based behavioral advertising is. Alternative business models include contextual advertising (based on content, not user profiles), subscription services, community funding, and platform cooperatives owned by users themselves."
    },
    {
      question: "If I switch to alternative platforms, won't I lose my audience?",
      answer: "This is a real concern and highlights why interoperability and data portability are so important. In the short term, many people maintain presences on both mainstream and alternative platforms. In the long term, as more open protocols gain adoption, you'll be able to change platforms without losing connections."
    },
    {
      question: "Aren't open protocols less secure or reliable than corporate platforms?",
      answer: "Not inherently. Many open protocols are subject to more rigorous security auditing because their code is transparent. As for reliability, while corporate platforms have more resources, they can also disappear overnight (as many defunct platforms have shown). Distributed systems often have greater long-term resilience."
    },
    {
      question: "How can I evaluate if a platform respects these rights?",
      answer: "Our platform comparison tool offers a starting point, breaking down how major platforms measure against each right. Generally, look for platforms that: offer data export, have transparent community guidelines, provide end-to-end encryption, allow community moderation, and are built on interoperable standards."
    },
    {
      question: "Why should I trust this movement?",
      answer: "This isn't about trust in any single organization but about empowering communities themselves. These principles are drawn from decades of work by digital rights advocates, community organizers, and technologists who've seen firsthand how current models fail communities. We encourage you to research these ideas independently and reach your own conclusions."
    },
    {
      question: "What's the difference between this and other digital rights efforts?",
      answer: "Many excellent digital rights initiatives focus on individual privacy, algorithmic accountability, or content moderation. Our focus is specifically on community rights and self-governance—the ability for groups to control their own digital spaces and connections."
    },
    {
      question: "I'm not technical—how can I understand these issues better?",
      answer: "You don't need technical expertise to grasp what's at stake. If you've ever been frustrated by a platform changing rules without consulting users, seen important community information buried by algorithms, or worried about surveillance, you already understand the core issues. Our resources section includes non-technical explanations and real-world examples."
    },
    {
      question: "Can these rights actually be implemented with current technology?",
      answer: "Yes! The exciting thing is that all of these rights are already being implemented by various platforms and protocols. No single platform yet embodies all of them perfectly, but the technical foundations exist. What's missing is broader awareness and adoption."
    },
    {
      question: "How will this affect creators who depend on current platforms?",
      answer: "Creators often suffer most from platform whims—sudden algorithm changes can destroy livelihoods overnight. Systems that respect these rights would give creators more stability, direct relationships with their audiences, and the ability to move between platforms without losing followers."
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Breadcrumb className="mb-6 text-gray-300">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>FAQ</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="inline-flex bg-white/10 p-2 rounded-full mb-6">
              <Info className="h-6 w-6 mr-2" />
              <span className="font-semibold">Common Questions</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            
            <p className="text-lg text-gray-300">
              Answers to common questions about digital rights, platform governance, and how these principles can be implemented.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:bg-gray-50">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-digital-gray-medium">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-16 bg-digital-gray-light/30 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-digital-gray-dark">
                Ready to Take Action?
              </h3>
              <p className="text-digital-gray-medium mb-6">
                Now that you understand the principles behind the Digital Bill of Rights, 
                learn how you can help promote these ideas.
              </p>
              <Button 
                className="bg-digital-coral hover:bg-digital-coral/90 text-white"
                asChild
              >
                <Link to="/take-action">
                  See How You Can Take Action <ArrowRight className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
