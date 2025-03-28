
import Layout from "@/components/layout/Layout";
import { Book, Code, ExternalLink, Link2, Lightbulb, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Resources = () => {
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
          title: "AT Protocol",
          description: "The protocol behind BlueSky, offering algorithmic choice and portable identity.",
          link: "https://atproto.com/"
        }
      ]
    },
    {
      title: "Community Tools",
      icon: <MessageCircle className="h-6 w-6" />,
      resources: [
        {
          title: "Matrix.org",
          description: "An open standard for secure, decentralized real-time communication.",
          link: "https://matrix.org/"
        },
        {
          title: "Lemmy",
          description: "A self-hosted social link aggregation and discussion platform.",
          link: "https://join-lemmy.org/"
        },
        {
          title: "PeerTube",
          description: "A decentralized alternative to video platforms like YouTube.",
          link: "https://joinpeertube.org/"
        }
      ]
    },
    {
      title: "Migration Guides",
      icon: <Link2 className="h-6 w-6" />,
      resources: [
        {
          title: "Moving from Facebook to the Fediverse",
          description: "A step-by-step guide for migrating your community from Facebook to Mastodon.",
          link: "#"
        },
        {
          title: "Twitter to BlueSky Migration",
          description: "How to transition your Twitter community to BlueSky while maintaining connections.",
          link: "#"
        },
        {
          title: "Building a Community on Nostr",
          description: "Best practices for establishing a community presence on the Nostr protocol.",
          link: "#"
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
              Resource Library
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p>
                Whether you're a community leader looking to migrate your group to a more rights-respecting 
                platform, a developer interested in building on open protocols, or simply someone who wants 
                to learn more about digital rights, you'll find resources here to help you take the next step.
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
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="text-digital-blue" asChild>
                          <a href={resource.link} target="_blank" rel="noopener noreferrer">
                            Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
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
