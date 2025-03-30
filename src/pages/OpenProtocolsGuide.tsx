
import Layout from "@/components/layout/Layout";
import { Book, Code, ExternalLink, Link2, Globe, Shield, Shuffle, Users, Database, LineChart, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const OpenProtocolsGuide = () => {
  const comparisonPoints = [
    {
      category: "User Experience",
      fediverse: "Familiar feel with platforms like Mastodon. Concept of federation and choosing an instance can present a learning curve.",
      nostr: "Relies on cryptographic keys and relays which can be initially confusing. Experience varies by client application.",
      bluesky: "User-friendly experience with interface resembling early Twitter. Strong emphasis on customizable feeds."
    },
    {
      category: "Decentralization & Control",
      fediverse: "Genuinely decentralized with independent servers governed by communities. Users control data by choosing servers.",
      nostr: "Radical approach with protocol-based network of relays, no central authority. Control through cryptographic keys.",
      bluesky: "Uses AT Protocol for decentralization, allowing self-hosting and data portability. Currently more centralized."
    },
    {
      category: "Privacy & Security",
      fediverse: "Generally ad-free with less data collection. Privacy varies by instance. DMs not always end-to-end encrypted.",
      nostr: "Strong theoretical privacy through user-controlled data and encryption options. Users must secure private keys.",
      bluesky: "Emphasizes user privacy with moderation tools. Content public by default, DMs lack end-to-end encryption."
    },
    {
      category: "Interoperability",
      fediverse: "Built on ActivityPub for seamless interaction between different platforms. Can bridge to other protocols.",
      nostr: "Protocol allows various clients to interact without issue. Can connect to Fediverse through bridges.",
      bluesky: "AT Protocol aims for interoperability between applications. Plans for ActivityPub integration."
    },
    {
      category: "Algorithmic Control & Moderation",
      fediverse: "Often features chronological feeds. Moderation policies vary by instance, giving users choice of community.",
      nostr: "No protocol-level algorithms, feed curation left to clients. Relies on user blocking and relay-level moderation.",
      bluesky: "Strong emphasis on user-driven algorithmic choice through selectable feeds. Centralized moderation with user customization."
    }
  ];

  const recommendedApps = [
    {
      platform: "Fediverse",
      apps: [
        { name: "Mastodon", description: "Popular microblogging service similar to Twitter/X", link: "https://joinmastodon.org" },
        { name: "PeerTube", description: "Video sharing platform with federation capabilities", link: "https://joinpeertube.org" },
        { name: "Pixelfed", description: "Photo sharing focused on privacy and chronological timelines", link: "https://pixelfed.org" },
        { name: "Lemmy", description: "Link aggregation and discussion platform (Reddit alternative)", link: "https://join-lemmy.org" },
        { name: "Funkwhale", description: "Music sharing and streaming platform", link: "https://funkwhale.audio" },
        { name: "WriteFreely", description: "Minimalist blogging platform", link: "https://writefreely.org" },
        { name: "Friendica", description: "Versatile social networking platform", link: "https://friendi.ca" },
        { name: "Hubzilla", description: "Comprehensive publishing and communications platform", link: "https://hubzilla.org" }
      ]
    },
    {
      platform: "Nostr",
      apps: [
        { name: "Damus", description: "Popular and user-friendly client for iOS", link: "https://damus.io" },
        { name: "Amethyst", description: "Well-regarded client for Android users", link: "https://github.com/vitorpamplona/amethyst" },
        { name: "Primal", description: "Multi-platform client for web, iOS, and Android", link: "https://primal.net" },
        { name: "Iris", description: "Simple and fast web-based client", link: "https://iris.to" },
        { name: "Snort", description: "Feature-rich web interface for Nostr", link: "https://snort.social" },
        { name: "Ditto", description: "Simple and intuitive web/mobile web client", link: "https://ditto.blue" },
        { name: "Alby", description: "Browser extension for key management", link: "https://getalby.com" },
        { name: "Nostur", description: "Comprehensive client for iOS and macOS", link: "https://nostur.com" },
        { name: "FreeFrom", description: "Privacy-focused client for iOS and Android", link: "https://freefrom.app" },
        { name: "0xchat", description: "Secure messaging client for Android and iOS", link: "https://0xchat.com" }
      ]
    },
    {
      platform: "Bluesky",
      apps: [
        { name: "Official App", description: "Core features including customizable feeds", link: "https://bsky.app" },
        { name: "Graysky", description: "Third-party client with enhanced features", link: "https://graysky.app" },
        { name: "Deck.blue", description: "Powerful customizable client similar to TweetDeck", link: "https://deck.blue" },
        { name: "Skyfeed.app", description: "Create and share custom feeds", link: "https://skyfeed.app" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-digital-gray-dark to-digital-purple-dark text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Navigating Open Social Media Protocols
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              A comprehensive guide to the Fediverse, Nostr, and Bluesky: understanding their approaches 
              to digital rights, decentralization, and user control.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Introduction: The Shift Towards Open Systems
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                The contemporary social media landscape is largely defined by a handful of dominant corporate 
                entities. This centralization of power has led to increasing concerns among users regarding 
                the control and utilization of their personal data, the potential for censorship and 
                algorithmic manipulation, and a general sense of limited autonomy over their online experiences.
              </p>
              
              <p>
                In response to these limitations, a growing movement towards open and decentralized social 
                media systems has emerged, offering alternatives like the Fediverse, Nostr, and Bluesky. 
                These platforms are built upon the core principles of decentralization, user control, and 
                open protocols, aiming to shift the power dynamic away from centralized corporations and 
                towards individual users and communities.
              </p>
              
              <p>
                This guide explores each of these open social media systems, evaluating them against the 
                fundamental digital rights of privacy, security, ownership, algorithmic control, and 
                moderation choice. By providing detailed insights, comparisons, and resources, this analysis 
                aims to empower users to make informed decisions about transitioning to these alternative 
                platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">
                      <Globe className="h-8 w-8" />
                    </div>
                    <CardTitle>Fediverse</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A federated network of interconnected social media platforms that communicate using 
                    the ActivityPub protocol, enabling seamless interaction across diverse, independently 
                    operated services.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-purple-600">
                      <Key className="h-8 w-8" />
                    </div>
                    <CardTitle>Nostr</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A radically decentralized protocol that relies on a distributed network of relays and 
                    cryptographic key pairs to give users complete control over their online identities 
                    and interactions.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-sky-50 to-sky-100 border-sky-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-sky-600">
                      <LineChart className="h-8 w-8" />
                    </div>
                    <CardTitle>Bluesky</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    A decentralized social networking protocol built upon the AT Protocol, with a strong 
                    emphasis on providing users with algorithmic choice and customizable moderation options.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Platform Tabs */}
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="fediverse" className="mb-16">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="fediverse">Fediverse</TabsTrigger>
                <TabsTrigger value="nostr">Nostr</TabsTrigger>
                <TabsTrigger value="bluesky">Bluesky</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fediverse" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="h-6 w-6 text-blue-600" />
                      The Fediverse: Exploring a Federated Universe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        The term "Fediverse" is a portmanteau of "federated" and "universe," aptly describing 
                        its nature as a decentralized group of social media platforms where independent entities 
                        are united under a common set of protocols, allowing them to interact freely with one another.
                      </p>
                      
                      <p>
                        At the heart of the Fediverse lies the ActivityPub protocol, which serves as the primary 
                        communication standard enabling federation between different platforms. This protocol 
                        acts as a universal language, allowing diverse social media applications to seamlessly 
                        communicate and exchange data.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Advantages</h3>
                      <ul>
                        <li>
                          <strong>Interoperability:</strong> Users on one platform can effortlessly follow 
                          and interact with users on another, regardless of the specific application they are using.
                        </li>
                        <li>
                          <strong>Privacy:</strong> Unlike centralized platforms that often profit from users' 
                          personal information through targeted advertising, the Fediverse aims to provide users 
                          with privacy and an ad-free experience.
                        </li>
                        <li>
                          <strong>User Control:</strong> Users maintain greater control over their data and have 
                          the option to choose instances (servers) with privacy policies that align with their preferences.
                        </li>
                        <li>
                          <strong>Self-Hosting:</strong> For those seeking maximum control, the Fediverse allows 
                          users to host their own instances.
                        </li>
                        <li>
                          <strong>Open Source:</strong> The open-source nature of the protocols and many Fediverse 
                          platforms allows for public review of the underlying code, potentially leading to enhanced 
                          security through community scrutiny.
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Getting Started with Mastodon</h3>
                      <p>
                        Mastodon stands out as a popular entry point for microblogging, similar in functionality 
                        to X (formerly Twitter). To get started:
                      </p>
                      <ol>
                        <li>
                          <strong>Choose a server (instance)</strong> based on factors like specific interests, 
                          community size, moderation policies, and privacy policies.
                        </li>
                        <li>
                          <strong>Sign up on the instance's website</strong>, a process typically similar to 
                          that of conventional social media platforms.
                        </li>
                        <li>
                          <strong>Fill in your profile</strong>, discover people and hashtags to follow, and 
                          share your account address with friends.
                        </li>
                      </ol>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Privacy Considerations</h3>
                      <p>
                        While the Fediverse offers significant improvements in privacy and security, it's 
                        important for users to be aware of certain considerations:
                      </p>
                      <ul>
                        <li>
                          <strong>Server-level privacy policies</strong> are paramount. Users should carefully 
                          review these policies before joining an instance.
                        </li>
                        <li>
                          <strong>Direct messages are not end-to-end encrypted</strong> by default on platforms 
                          like Mastodon, meaning caution is advised when sharing sensitive information.
                        </li>
                        <li>
                          <strong>Defederation mechanisms</strong> allow individual instances to protect their 
                          users by blocking communication with other servers that are deemed problematic.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <a href="https://joinfediverse.wiki/Main_Page" target="_blank" rel="noopener noreferrer">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="nostr" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Key className="h-6 w-6 text-purple-600" />
                      Nostr: Embracing Radical Decentralization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Nostr, which stands for "Notes and Other Stuff Transmitted by Relays," represents a 
                        paradigm shift in social media through its commitment to radical decentralization and 
                        censorship resistance.
                      </p>
                      
                      <p>
                        At its core, Nostr relies on a network of independent relays for the transmission and 
                        storage of messages. These relays function as simple message brokers, responsible for 
                        forwarding information between users but crucially, they do not control user accounts 
                        or moderate content at the protocol level.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                      <ul>
                        <li>
                          <strong>Cryptographic Identity:</strong> User identity is managed through cryptographic 
                          key pairs: a public key (user identifier) and a private key (to sign posts and prove ownership).
                        </li>
                        <li>
                          <strong>Relay Network:</strong> Users connect to one or more relays that store and 
                          forward messages, creating a resilient and censorship-resistant network.
                        </li>
                        <li>
                          <strong>Client Choice:</strong> Users can choose from various client applications 
                          that provide interfaces for creating and viewing content.
                        </li>
                        <li>
                          <strong>Data Ownership:</strong> Users own their data and content, which is immutably 
                          and cryptographically signed, ensuring its authenticity and integrity.
                        </li>
                        <li>
                          <strong>No Central Moderation:</strong> Instead of centralized content moderation, 
                          users can block specific public keys and choose which relays to connect to.
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Getting Started with Nostr</h3>
                      <ol>
                        <li>
                          <strong>Download a Nostr client</strong> (see recommended apps below).
                        </li>
                        <li>
                          <strong>Create a new account</strong> or import existing keys.
                        </li>
                        <li>
                          <strong>Securely store your private key</strong> offline—this is crucial as it's 
                          the only way to access your account.
                        </li>
                        <li>
                          <strong>Connect to relays</strong>—most clients come with default relays, but you 
                          can add or remove them.
                        </li>
                        <li>
                          <strong>Follow users</strong> by their public keys or NIP05 usernames, and follow 
                          hashtags for topic-specific content.
                        </li>
                        <li>
                          <strong>Publish notes</strong> which are digitally signed with your private key 
                          before being sent to connected relays.
                        </li>
                      </ol>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Privacy and Security Considerations</h3>
                      <ul>
                        <li>
                          <strong>Private Key Protection:</strong> Losing your private key means losing access 
                          to your account with no recovery option.
                        </li>
                        <li>
                          <strong>IP Address Exposure:</strong> Connecting to relays exposes your IP address 
                          to each relay. Using a VPN is recommended for enhanced privacy.
                        </li>
                        <li>
                          <strong>Relay Policies:</strong> While relays are designed to be neutral, they can 
                          have their own policies and may ban users or messages.
                        </li>
                        <li>
                          <strong>Message Encryption:</strong> By default, messages are not end-to-end encrypted, 
                          although most modern clients support encrypted direct messaging.
                        </li>
                        <li>
                          <strong>Content Filtering:</strong> Users can block or ignore messages from specific 
                          public keys to manage their experience.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                      <a href="https://nostr.com/" target="_blank" rel="noopener noreferrer">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="bluesky" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <LineChart className="h-6 w-6 text-sky-600" />
                      Bluesky: Decentralized Social Networking with Algorithmic Choice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Bluesky emerges as a decentralized social networking protocol with a distinct focus 
                        on providing users with greater control over their online experience, particularly 
                        concerning the algorithms that shape their content feeds.
                      </p>
                      
                      <p>
                        At the core of Bluesky is the Authenticated Transfer Protocol (AT Protocol), which 
                        serves as the technical foundation for its decentralized architecture.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                      <ul>
                        <li>
                          <strong>Algorithmic Choice:</strong> Users can select or even develop their own 
                          algorithms to curate their feeds, leading to a more personalized experience.
                        </li>
                        <li>
                          <strong>Decentralized Identity:</strong> The AT Protocol enables decentralized 
                          identity management through Decentralized Identifiers (DIDs).
                        </li>
                        <li>
                          <strong>Data Portability:</strong> Users can move their social media data between 
                          platforms, reducing dependency on a single service.
                        </li>
                        <li>
                          <strong>User-Controlled Moderation:</strong> The platform provides customizable 
                          filters and the option to subscribe to community-driven moderation lists.
                        </li>
                        <li>
                          <strong>Custom Domains:</strong> Users can connect their profile to a domain name 
                          they own, enhancing their sense of identity ownership.
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Navigating Bluesky</h3>
                      <p>
                        Bluesky's interface is intentionally designed to mirror the familiar layout of early 
                        Twitter, facilitating a smoother transition for users. Key features include:
                      </p>
                      <ul>
                        <li>
                          <strong>Customizable Feeds:</strong> Curate your main feed by selecting topics, 
                          hashtags, or users, or by subscribing to custom-built algorithmic feeds.
                        </li>
                        <li>
                          <strong>Moderation Filters:</strong> Set preferences for content visibility, 
                          including options for adult content.
                        </li>
                        <li>
                          <strong>Muting and Blocking:</strong> Filter out unwanted words, tags, and accounts, 
                          or prevent interactions with specific users.
                        </li>
                        <li>
                          <strong>Moderation Lists:</strong> Subscribe to community-created lists to collectively 
                          block or mute certain accounts or content types.
                        </li>
                        <li>
                          <strong>Reply Controls:</strong> Manage who can reply to your posts with options for 
                          everyone, followers only, or no one.
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Privacy and Security Considerations</h3>
                      <ul>
                        <li>
                          <strong>Public Content:</strong> By default, content shared on Bluesky is public on 
                          the network, and even information about blocked accounts is visible.
                        </li>
                        <li>
                          <strong>Server Choice:</strong> The decentralized architecture allows users to choose 
                          their own servers or even host their own, granting greater control over data.
                        </li>
                        <li>
                          <strong>Unencrypted DMs:</strong> Direct messages on Bluesky are not currently 
                          end-to-end encrypted.
                        </li>
                        <li>
                          <strong>Custom Domain Security:</strong> Using custom domains provides a mechanism 
                          for enhancing online identity and verification.
                        </li>
                        <li>
                          <strong>Current Centralization:</strong> While designed for decentralization, 
                          Bluesky's ecosystem is currently more centralized around the bsky.social server.
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
                      <a href="https://bsky.app" target="_blank" rel="noopener noreferrer">
                        Learn More <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Comparative Analysis
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                When comparing the Fediverse, Nostr, and Bluesky, several key differences emerge across 
                various aspects of user experience, decentralization, privacy, and control. The following 
                table provides a side-by-side comparison of these platforms across important dimensions.
              </p>
            </div>
            
            <div className="overflow-hidden rounded-lg border border-gray-200 mb-12">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className="w-1/4 font-bold">Category</TableHead>
                    <TableHead className="w-1/4 text-blue-600 font-semibold">Fediverse</TableHead>
                    <TableHead className="w-1/4 text-purple-600 font-semibold">Nostr</TableHead>
                    <TableHead className="w-1/4 text-sky-600 font-semibold">Bluesky</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonPoints.map((point, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <TableCell className="font-medium">{point.category}</TableCell>
                      <TableCell>{point.fediverse}</TableCell>
                      <TableCell>{point.nostr}</TableCell>
                      <TableCell>{point.bluesky}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          
          {/* Recommended Applications */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Directory of Recommended Applications
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                The following sections provide a directory of recommended applications within the Fediverse, 
                Nostr, and Bluesky ecosystems. These applications have been selected based on their strong 
                support for digital rights, including privacy, security, ownership, interoperability, 
                algorithmic control, and moderation choice.
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full mb-12">
              {recommendedApps.map((platform, index) => (
                <AccordionItem key={index} value={platform.platform.toLowerCase()}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {platform.platform} Applications
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                      {platform.apps.map((app, i) => (
                        <Card key={i} className="h-full">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{app.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <CardDescription className="text-base">
                              {app.description}
                            </CardDescription>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="text-digital-blue" asChild>
                              <a href={app.link} target="_blank" rel="noopener noreferrer">
                                Visit Website <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-digital-gray-dark">
                Rights Support in Open Social Media Platforms
              </h3>
              <p className="text-digital-gray-medium mb-6">
                All the applications listed in this guide provide strong support for the five fundamental 
                digital rights: privacy, security, ownership, interoperability, and algorithmic control. 
                The specific features supporting each right are detailed in the platform-specific sections 
                of this guide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-digital-purple" />
                    Privacy & Security
                  </h4>
                  <p className="text-sm text-digital-gray-medium">
                    User control over data, reduced tracking, and enhanced security measures compared to 
                    centralized platforms.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <Database className="h-4 w-4 text-digital-purple" />
                    Ownership & Interoperability
                  </h4>
                  <p className="text-sm text-digital-gray-medium">
                    Greater control over content, identities, and the ability to move between services 
                    without losing connections.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <LineChart className="h-4 w-4 text-digital-purple" />
                    Algorithmic Control & Moderation
                  </h4>
                  <p className="text-sm text-digital-gray-medium">
                    User choice in content filtering, feed curation, and community-based moderation approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Conclusion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-digital-gray-dark">
              Conclusion: Towards a User-Centric Social Media Landscape
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                The analysis of the Fediverse, Nostr, and Bluesky reveals a significant shift in the paradigm 
                of social media, moving towards systems that offer users greater control, ownership, and 
                respect for their digital rights. Each platform, while sharing the common goal of decentralization, 
                adopts a unique approach with its own strengths and considerations.
              </p>
              
              <p>
                The trend towards open and decentralized social media reflects a growing user awareness of 
                the limitations and potential harms of centralized platforms. The desire for a more user-centric 
                internet, where digital rights are respected and users have greater agency over their online 
                experiences, is driving the adoption and development of these alternative systems.
              </p>
              
              <p>
                As these platforms continue to evolve and mature, they offer a promising vision for the future 
                of social interaction online, one where users are empowered and in control. By highlighting 
                the unique strengths and trade-offs of each platform in relation to specific digital rights, 
                we hope to guide users towards the options that best align with their values and needs.
              </p>
            </div>
            
            <div className="flex justify-center mb-12">
              <Button className="bg-digital-purple hover:bg-digital-purple-dark text-white" asChild>
                <a href="/take-action" className="flex items-center">
                  Take Action for Digital Rights
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OpenProtocolsGuide;
