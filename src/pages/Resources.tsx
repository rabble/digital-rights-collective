import Layout from "@/components/layout/Layout";
import { Book, Code, ExternalLink, Link2, Lightbulb, Globe, Shield, Database, Shuffle, LineChart, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Resources = () => {
  const dwebPrinciples = [
    {
      title: "Technology for Human Agency",
      icon: <Shield className="h-6 w-6" />,
      description: "Technology that enables the primacy of people as beneficiaries, upholding security, privacy and self-determination. We value open source, interoperability, and peer-to-peer relationships over hierarchical control."
    },
    {
      title: "Distributed Benefits",
      icon: <Shuffle className="h-6 w-6" />,
      description: "Decentralized technologies are most beneficial when rewards and recognition are distributed among contributors. High concentration of organizational control is antithetical to the decentralized web."
    },
    {
      title: "Mutual Respect",
      icon: <Users className="h-6 w-6" />,
      description: "We support clear codes of conduct for respectful behavior and accountability. We stand for open and transparent practices that actively pursue equity, mutual trust, and respect."
    },
    {
      title: "Humanity",
      icon: <Globe className="h-6 w-6" />,
      description: "The objective is to protect human rights and empower people, especially those experiencing systemic inequity. We stand for agency over data and relationships, rights to free expression, privacy, and knowledge."
    },
    {
      title: "Ecological Awareness",
      icon: <LineChart className="h-6 w-6" />,
      description: "Projects should minimize ecological harm and avoid technologies that worsen environmental health. We value systems that reduce energy consumption while increasing device lifespan."
    }
  ];

  const resourceCategories = [
    {
      title: "Open Protocols",
      icon: <Code className="h-6 w-6" />,
      resources: [
        {
          title: "ActivityPub Protocol",
          description: "The decentralized social networking protocol powering the Fediverse.",
          link: "https://activitypub.rocks/"
        },
        {
          title: "Nostr Protocol",
          description: "A truly censorship-resistant alternative to Twitter that is based on cryptographic keypairs.",
          link: "https://nostr.com/"
        },
        {
          title: "nos.social",
          description: "A user-friendly Nostr client that provides a modern social media experience on the decentralized Nostr protocol.",
          link: "https://nos.social/"
        },
        {
          title: "AT Protocol",
          description: "The protocol behind BlueSky, offering algorithmic choice and portable identity.",
          link: "https://atproto.com/"
        },
        {
          title: "Navigating Open Social Media Protocols",
          description: "Our comprehensive guide to the Fediverse, Nostr, and Bluesky platforms.",
          internal: true,
          link: "/open-protocols-guide"
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: <Book className="h-6 w-6" />,
      resources: [
        {
          title: "Digital Rights 101",
          description: "An introduction to digital rights concepts for the non-technical community leader.",
          link: "#"
        },
        {
          title: "The Fediverse Explained",
          description: "Understanding how federated social networks work and why they matter.",
          link: "#"
        },
        {
          title: "Algorithmic Literacy Guide",
          description: "How algorithms shape our digital experiences and how to take back control.",
          link: "#"
        }
      ]
    }
  ];

  const organizations = [
    {
      name: "Electronic Frontier Foundation",
      description: "Defending civil liberties in the digital world.",
      link: "https://www.eff.org/"
    },
    {
      name: "Fight for the Future",
      description: "A group ensuring that technology is a force for empowerment, free expression, and liberation.",
      link: "https://www.fightforthefuture.org/"
    },
    {
      name: "Freedom of the Press Foundation",
      description: "Protecting, defending, and empowering public-interest journalism in the 21st century.",
      link: "https://freedom.press/"
    },
    {
      name: "Internet Archive",
      description: "Building a digital library of Internet sites and other cultural artifacts in digital form.",
      link: "https://archive.org/"
    },
    {
      name: "NewPublic",
      description: "Working to build digital public spaces that serve the common good, with research and ideas for better digital spaces.",
      link: "https://newpublic.org/"
    },
    {
      name: "Aspiration Tech",
      description: "Connecting nonprofit organizations, foundations and social change initiatives to software solutions and technology skills that help them better carry out their missions.",
      link: "https://aspirationtech.org/"
    }
  ];

  const recommendedBooks = [
    {
      title: "Design Justice",
      author: "Sasha Costanza-Chock",
      year: "2020",
      description: "Design Justice explores how design might be led by marginalized communities to challenge structural inequalities. It shows how to center people who are too often marginalized by design.",
      link: "https://mitpress.mit.edu/books/design-justice"
    },
    {
      title: "Race After Technology",
      author: "Ruha Benjamin",
      year: "2019",
      description: "Explores how new technologies could reinforce White supremacy and deepen social inequity, arguing that automation has the potential to hide, speed up, and deepen discrimination.",
      link: "https://www.ruhabenjamin.com/race-after-technology"
    },
    {
      title: "Algorithms of Oppression",
      author: "Safiya Umoja Noble",
      year: "2018",
      description: "Challenges the idea that search engines like Google offer an equal playing field for all forms of ideas, identities, and activities. Shows how algorithms reinforce negative biases against people of color.",
      link: "https://nyupress.org/9781479837243/algorithms-of-oppression/"
    },
    {
      title: "Platform Capitalism",
      author: "Nick Srnicek",
      year: "2017",
      description: "Examines the rise of platform-based businesses from Google and Facebook to Airbnb and discusses how these platforms extract data as raw material for profit.",
      link: "https://politybooks.com/bookdetail/?isbn=9781509504879"
    },
    {
      title: "New Dark Age",
      author: "James Bridle",
      year: "2018", 
      description: "Explores how technology is clouding our understanding of the world, arguing that the proliferation of information has led to a new kind of ignorance.",
      link: "https://www.versobooks.com/books/3002-new-dark-age"
    },
    {
      title: "Twitter and Tear Gas",
      author: "Zeynep Tufekci",
      year: "2017",
      description: "An examination of how social media has transformed protest movements and political organizing, along with its limitations and vulnerabilities to surveillance and censorship.",
      link: "https://www.twitterandteargas.org/"
    },
    {
      title: "Automation and the Future of Work",
      author: "Aaron Benanav",
      year: "2020",
      description: "Challenges mainstream accounts of technological unemployment and proposes alternative approaches to building post-scarcity futures.",
      link: "https://www.versobooks.com/books/3717-automation-and-the-future-of-work"
    },
    {
      title: "The Age of Surveillance Capitalism",
      author: "Shoshana Zuboff",
      year: "2019",
      description: "Reveals how the biggest tech companies are dealing in a new kind of marketplace called behavioral futures, where prediction products are bought and sold.",
      link: "https://shoshanazuboff.com/book/about/"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Digital Rights Resources
            </h1>
            
            <p className="text-lg text-gray-300 mb-6">
              Explore tools, guides, and educational resources to help you and your community 
              reclaim your digital rights and build better online spaces.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              DWeb Principles
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                The Decentralized Web (DWeb) principles define the values of a decentralized web
                based on enabling agency of all peoples. These principles originate from members
                of the DWeb Community — those involved with and convened by the Internet Archive's
                work on the decentralized web. They shape our approach to digital rights and the
                resources we share.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {dwebPrinciples.map((principle, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="text-digital-purple">{principle.icon}</div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-center mb-12">
              <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white" asChild>
                <a 
                  href="https://getdweb.net/principles" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Learn More About DWeb Principles
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            
            <div className="bg-digital-gray-light p-6 rounded-xl mb-16">
              <p className="italic text-digital-gray-dark">
                "These principles stand alongside other sets of principles that share or expand 
                upon these values, in recognition that our efforts to build a more just and 
                equitable world are interdependent."
              </p>
              <p className="text-right text-digital-gray-medium mt-2">— DWeb Community</p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-digital-purple">
                <BookOpen className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-digital-gray-dark">
                Recommended Books
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                Explore these essential books that examine the intersection of technology, 
                social justice, and digital rights. These works offer critical perspectives 
                on how we can create more equitable digital futures.
              </p>
            </div>
            
            <ScrollArea className="h-[450px] md:h-[500px] rounded-md border border-gray-200 p-4">
              <div className="grid grid-cols-1 gap-6">
                {recommendedBooks.map((book, index) => (
                  <Card key={index} className="h-full border-l-4 border-l-digital-purple">
                    <CardHeader>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <CardDescription className="text-base font-medium">
                        By {book.author} ({book.year})
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-digital-gray-medium">{book.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="text-digital-blue" asChild>
                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Resource Library
            </h2>
            
            <div className="bg-gradient-to-r from-digital-purple-light to-digital-purple p-8 rounded-xl text-white mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">New Guide: Navigating Open Social Media Protocols</h3>
                  <p className="mb-4">
                    Explore our comprehensive guide to the Fediverse, Nostr, and Bluesky. Learn how these open 
                    platforms support digital rights and offer alternatives to centralized social media.
                  </p>
                  <Button className="bg-white text-digital-purple hover:bg-gray-100" asChild>
                    <Link to="/open-protocols-guide">
                      Read the Guide
                    </Link>
                  </Button>
                </div>
                <div className="hidden md:block">
                  <Globe className="h-24 w-24 opacity-75" />
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Whether you're a community leader looking to migrate your group to a more rights-respecting 
                platform, a developer interested in building on open protocols, or simply someone who wants 
                to learn more about digital rights, you'll find resources here to help you take the next step.
                These resources are curated with the DWeb Principles in mind, focusing on tools and platforms
                that prioritize human agency, distributed benefits, and ecological awareness.
              </p>
            </div>
            
            {resourceCategories.map((category, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-digital-purple">{category.icon}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-digital-gray-dark">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.resources.map((resource, i) => (
                    <Card key={i} className="h-full">
                      <CardHeader>
                        <CardTitle>{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {resource.description}
                        </CardDescription>
                      </CardFooter>
                      <CardFooter>
                        <Button variant="ghost" className="text-digital-blue" asChild>
                          {resource.internal ? (
                            <Link to={resource.link}>
                              View Guide <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          ) : (
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">
                              Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          )}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Organizations Fighting for Digital Rights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {organizations.map((org, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle>{org.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {org.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="text-digital-blue" asChild>
                      <a href={org.link} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="bg-digital-gray-light p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-digital-purple mt-1">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-digital-gray-dark">
                    Have a resource to suggest?
                  </h3>
                  <p className="text-digital-gray-medium mb-4">
                    We're always looking to expand our resource library. If you have a tool, guide, 
                    or educational resource that you think should be included here, please let us know.
                  </p>
                  <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white">
                    Suggest a Resource
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resources;
