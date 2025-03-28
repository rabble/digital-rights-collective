
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-digital-gray-dark">
            We've Lost Our Way
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              In the last few weeks alone we've witnessed an unprecedented wave of disruption across social media platforms. 
              Government workers, locked out of their jobs, are struggling to organize securely. During the LA fires, 
              emergency responders and volunteers found their critical updates buried by algorithms that prioritized engagement over urgency. 
              Countless online communities face arbitrary deplatforming, surveillance, and loss of their digital spaces without recourse or explanation.
            </p>
            
            <p>
              These aren't isolated incidents: they're symptoms of a fundamental crisis in how we've allowed our digital communities to be governed. 
              We've unwittingly accepted a system where massive corporations control the public sphere; algorithms optimize for advertising revenue 
              rather than human connection, and we the people have no real agency over our digital existence.
            </p>
            
            <p>
              Rabble has spent decades building social technologies, including working at Odeo, the company that ultimately pivoted to become Twitter, 
              where they were the social app's first employee and de facto CTO until late 2006; and building numerous other community organizing platforms. 
              They've watched with growing concern as our digital spaces have become increasingly toxic and hostile to genuine community needs. 
              The promise of social media as they defined it in the early days—to connect and empower communities of people—has been subverted by a 
              business model that treats human connection as a commodity to be monetized.
            </p>
            
            <p>
              Today, if you run a Facebook Group with thousands of members, you have no real authority – your community exists at the whim of 
              corporate policies you cannot influence. This is fundamentally at odds with how real-world communities have always operated. 
              Your local gardening club, bowling league, or neighborhood association, has democratic processes for leadership and decision-making. 
              Why should our digital communities be any different?
            </p>
            
            <div className="bg-digital-purple/5 p-6 rounded-lg border-l-4 border-digital-purple my-8">
              <h3 className="text-xl font-bold mb-2 text-digital-purple-dark">It's Time For a New Bill Of Digital Rights For Social Media</h3>
              <p className="mb-0">
                Rabble believes that the time has come for a new Social Media Bill of Digital Rights. 
                Just as the original Bill of Rights protected individual freedoms from government overreach, 
                we need fundamental protections for our digital communities from corporate control and surveillance capitalism.
              </p>
            </div>
            
            <p>
              <Link 
                to="/bill-of-rights" 
                className="text-digital-blue font-semibold hover:text-digital-purple transition-colors flex items-center"
              >
                Read more about the Social Media Bill of Rights <ExternalLink className="ml-1 h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
