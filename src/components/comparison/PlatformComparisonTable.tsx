import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlatformRating from "./PlatformRating";
import { ExternalLink, Info } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type Platform = {
  name: string;
  type: "Corporate" | "Open Protocol";
  privacy: {
    rating: "Poor" | "Fair" | "Good" | "Excellent";
    explanation: string;
  };
  ownership: {
    rating: "Poor" | "Fair" | "Good" | "Excellent";
    explanation: string;
  };
  interoperability: {
    rating: "Poor" | "Fair" | "Good" | "Excellent";
    explanation: string;
  };
  algorithmic: {
    rating: "Poor" | "Fair" | "Good" | "Excellent";
    explanation: string;
  };
  governance: {
    rating: "Poor" | "Fair" | "Good" | "Excellent";
    explanation: string;
  };
};

// Original platforms array with nos.social added as first Nostr app
const platforms: Platform[] = [
  {
    name: "Facebook/Meta",
    type: "Corporate",
    privacy: {
      rating: "Poor",
      explanation: "Extensive data collection, targeted advertising, and history of data breaches and sharing."
    },
    ownership: {
      rating: "Poor",
      explanation: "Claims extensive rights to user content, limited data portability, no true right to be forgotten."
    },
    interoperability: {
      rating: "Poor",
      explanation: "Closed ecosystem, restricted APIs, no federation support, walled garden approach."
    },
    algorithmic: {
      rating: "Poor",
      explanation: "Opaque algorithms optimized for engagement, limited user controls, no transparency."
    },
    governance: {
      rating: "Fair",
      explanation: "Some group moderation tools, but ultimate control remains with platform. Inconsistent enforcement."
    }
  },
  {
    name: "Twitter/X",
    type: "Corporate",
    privacy: {
      rating: "Poor",
      explanation: "Public by default, extensive tracking, targeted advertising based on interests and behaviors."
    },
    ownership: {
      rating: "Fair",
      explanation: "API access for data export, but limits on downloads and ownership claims on content."
    },
    interoperability: {
      rating: "Fair",
      explanation: "API available but increasingly restricted, no federation, closed ecosystem."
    },
    algorithmic: {
      rating: "Poor",
      explanation: "Chronological feed option but primarily engagement-driven with limited transparency."
    },
    governance: {
      rating: "Poor",
      explanation: "Centralized moderation, inconsistent policy enforcement, limited community tools."
    }
  },
  {
    name: "TikTok",
    type: "Corporate",
    privacy: {
      rating: "Poor",
      explanation: "Extensive data collection, concerns about government access, high surveillance risk."
    },
    ownership: {
      rating: "Poor",
      explanation: "Limited data export, broad license to user content, difficulty deleting content completely."
    },
    interoperability: {
      rating: "Poor",
      explanation: "Closed ecosystem, no meaningful API for content portability, no federation."
    },
    algorithmic: {
      rating: "Poor",
      explanation: "Highly optimized for engagement, completely opaque recommendation system."
    },
    governance: {
      rating: "Poor",
      explanation: "Centralized moderation, unclear standards, limited community control."
    }
  },
  {
    name: "Discord",
    type: "Corporate",
    privacy: {
      rating: "Fair",
      explanation: "Messages can be encrypted in transit but not end-to-end encrypted. Discord has access to all content, collects user data, and has a history of scanning private messages."
    },
    ownership: {
      rating: "Poor",
      explanation: "Limited data export options, no easy way to migrate server history or structures to other platforms, and Discord reserves the right to use your content."
    },
    interoperability: {
      rating: "Poor",
      explanation: "Closed ecosystem with minimal API access for third parties, no federation, and no official way to connect with other communication platforms."
    },
    algorithmic: {
      rating: "Fair",
      explanation: "Basic chronological message display, but server discovery and content recommendations use opaque algorithms with limited user control."
    },
    governance: {
      rating: "Good",
      explanation: "Robust server administration and moderation tools, customizable roles and permissions, but ultimately subject to Discord's platform-wide policies and decisions."
    }
  },
  {
    name: "Slack",
    type: "Corporate",
    privacy: {
      rating: "Fair",
      explanation: "Encrypted data transmission but no E2E encryption. Workspace owners can export all messages, and Slack has access to all content."
    },
    ownership: {
      rating: "Fair",
      explanation: "Paid workspaces can export data, but the export format isn't easily portable to other platforms. Free workspaces have message history limitations."
    },
    interoperability: {
      rating: "Fair",
      explanation: "Extensive API for integrations within the Slack ecosystem, but limited ability to connect with external communication platforms without custom development."
    },
    algorithmic: {
      rating: "Good",
      explanation: "Primarily chronological display with minimal algorithmic interference, clear search functionality, but closed-source with limited visibility into how features like Slack Connect work."
    },
    governance: {
      rating: "Fair",
      explanation: "Workspace administrators have control over membership and basic policies, but ultimate governance remains with Slack, including terms of service that apply to all workspaces."
    }
  },
  {
    name: "Mastodon/Fediverse",
    type: "Open Protocol",
    privacy: {
      rating: "Good",
      explanation: "Server choice allows privacy-focused options, local-only posts, community-based moderation."
    },
    ownership: {
      rating: "Good",
      explanation: "Content data portability exists, but identity is tied to specific servers. Moving requires followers to update connections."
    },
    interoperability: {
      rating: "Excellent",
      explanation: "Built on ActivityPub for federation across platforms, open standards-based."
    },
    algorithmic: {
      rating: "Good",
      explanation: "Chronological timeline by default, growing support for user-controlled algorithms."
    },
    governance: {
      rating: "Excellent",
      explanation: "Instance operators set rules, communities can create their own servers with full control."
    }
  },
  {
    name: "BlueSky",
    type: "Open Protocol",
    privacy: {
      rating: "Fair",
      explanation: "Public by default like Twitter, but built on AT Protocol with better data controls."
    },
    ownership: {
      rating: "Excellent",
      explanation: "You own your data and can move between providers while keeping your identity and followers."
    },
    interoperability: {
      rating: "Good",
      explanation: "AT Protocol designed for interoperability, though not yet fully federated."
    },
    algorithmic: {
      rating: "Excellent",
      explanation: "Pioneering custom algorithms approach, users can choose or create feed algorithms."
    },
    governance: {
      rating: "Good",
      explanation: "Moderation still evolving but designed with community governance in mind."
    }
  },
  {
    name: "nos.social (Nostr)",
    type: "Open Protocol",
    privacy: {
      rating: "Good",
      explanation: "Cryptographic identity, ability to use anonymously, resilient to censorship."
    },
    ownership: {
      rating: "Excellent",
      explanation: "Complete ownership of your key-based identity and content, truly portable across clients."
    },
    interoperability: {
      rating: "Excellent",
      explanation: "Protocol-level interoperability between all clients, fully decentralized."
    },
    algorithmic: {
      rating: "Good",
      explanation: "Client-side control of content, relay selection provides filtering options."
    },
    governance: {
      rating: "Good",
      explanation: "Self-sovereign approach, individual choice of relays, community relays emerging."
    }
  },
  {
    name: "Nostr",
    type: "Open Protocol",
    privacy: {
      rating: "Good",
      explanation: "Cryptographic identity, ability to use anonymously, resilient to censorship."
    },
    ownership: {
      rating: "Excellent",
      explanation: "Complete ownership of your key-based identity and content, truly portable across clients."
    },
    interoperability: {
      rating: "Excellent",
      explanation: "Protocol-level interoperability between all clients, fully decentralized."
    },
    algorithmic: {
      rating: "Good",
      explanation: "Client-side control of content, relay selection provides filtering options."
    },
    governance: {
      rating: "Good",
      explanation: "Self-sovereign approach, individual choice of relays, community relays emerging."
    }
  },
  {
    name: "Signal",
    type: "Open Protocol",
    privacy: {
      rating: "Excellent",
      explanation: "Industry-leading E2E encryption, minimal metadata collection, privacy-focused design."
    },
    ownership: {
      rating: "Good",
      explanation: "Messages are yours, but limited portability between platforms."
    },
    interoperability: {
      rating: "Poor",
      explanation: "Closed ecosystem, cannot connect with other messaging platforms."
    },
    algorithmic: {
      rating: "Good",
      explanation: "Simple chronological ordering, no manipulation, no targeted content."
    },
    governance: {
      rating: "Fair",
      explanation: "Group admin controls but centralized platform operation by Signal Foundation."
    }
  },
  {
    name: "Matrix",
    type: "Open Protocol",
    privacy: {
      rating: "Good",
      explanation: "Optional E2E encryption with cross-signed device verification, self-hosting option for complete control, but requires proper setup for maximum security."
    },
    ownership: {
      rating: "Good",
      explanation: "Users own their data with complete export capabilities, servers can be fully controlled by communities, right to be forgotten supported."
    },
    interoperability: {
      rating: "Excellent",
      explanation: "Federated protocol designed for interoperability, bridges to other platforms (IRC, Discord, Slack, etc.), fully open standard."
    },
    algorithmic: {
      rating: "Excellent",
      explanation: "No algorithmic manipulation, chronological conversation display, full visibility into server operations through open source clients."
    },
    governance: {
      rating: "Excellent",
      explanation: "Communities can run their own servers (instances), create custom moderation policies, and set their own rules with comprehensive admin tools."
    }
  }
];

// Separate platforms by type
const openProtocols = platforms.filter(platform => platform.type === "Open Protocol");
const corporatePlatforms = platforms.filter(platform => platform.type === "Corporate");

const PlatformComparisonTable = () => {
  const isMobile = useIsMobile();

  // Mobile view renders tabs for different categories
  const renderMobileView = () => {
    return (
      <Tabs defaultValue="privacy" className="w-full">
        <div className="px-4 py-3 bg-gradient-to-r from-digital-gray-light to-white">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 mr-2 shadow-sm">
                Open Protocol
              </span>
              <span className="text-xs text-gray-700">
                Community-driven
              </span>
            </div>
            <div className="flex items-center">
              <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800 mr-2 shadow-sm">
                Corporate
              </span>
              <span className="text-xs text-gray-700">
                Centrally-controlled
              </span>
            </div>
          </div>
          
          <div className="text-xs text-gray-600 flex flex-wrap gap-3 mb-2">
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
              <span>Poor</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-orange-500 mr-1"></span>
              <span>Fair</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
              <span>Good</span>
            </div>
            <div className="flex items-center">
              <span className="h-2 w-2 rounded-full bg-digital-purple mr-1"></span>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start p-0 h-auto bg-transparent space-x-1 mb-2">
          <TabsTrigger 
            value="privacy" 
            className="text-xs py-2 px-3 whitespace-nowrap data-[state=active]:bg-digital-purple data-[state=active]:text-white"
          >
            Privacy
          </TabsTrigger>
          <TabsTrigger 
            value="ownership" 
            className="text-xs py-2 px-3 whitespace-nowrap data-[state=active]:bg-digital-purple data-[state=active]:text-white"
          >
            Ownership
          </TabsTrigger>
          <TabsTrigger 
            value="interoperability" 
            className="text-xs py-2 px-3 whitespace-nowrap data-[state=active]:bg-digital-purple data-[state=active]:text-white"
          >
            Interoperability
          </TabsTrigger>
          <TabsTrigger 
            value="algorithmic" 
            className="text-xs py-2 px-3 whitespace-nowrap data-[state=active]:bg-digital-purple data-[state=active]:text-white"
          >
            Algorithms
          </TabsTrigger>
          <TabsTrigger 
            value="governance" 
            className="text-xs py-2 px-3 whitespace-nowrap data-[state=active]:bg-digital-purple data-[state=active]:text-white"
          >
            Governance
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="privacy" className="mt-0">
          <div className="bg-gray-50 p-2 rounded-md mb-2">
            <h3 className="font-medium text-sm">Privacy & Security</h3>
            <p className="text-xs text-gray-600">How well platforms protect user data and communications</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-digital-purple px-2">Open Protocols</h4>
            {openProtocols.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-purple flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.privacy.rating}
                    explanation={platform.privacy.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
            
            <h4 className="font-medium text-sm text-digital-gray-dark px-2 pt-2">Corporate Platforms</h4>
            {corporatePlatforms.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-gray-dark flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.privacy.rating}
                    explanation={platform.privacy.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ownership" className="mt-0">
          <div className="bg-gray-50 p-2 rounded-md mb-2">
            <h3 className="font-medium text-sm">Ownership</h3>
            <p className="text-xs text-gray-600">User control over their data and content</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-digital-purple px-2">Open Protocols</h4>
            {openProtocols.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-purple flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.ownership.rating}
                    explanation={platform.ownership.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
            
            <h4 className="font-medium text-sm text-digital-gray-dark px-2 pt-2">Corporate Platforms</h4>
            {corporatePlatforms.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-gray-dark flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.ownership.rating}
                    explanation={platform.ownership.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="interoperability" className="mt-0">
          <div className="bg-gray-50 p-2 rounded-md mb-2">
            <h3 className="font-medium text-sm">Interoperability</h3>
            <p className="text-xs text-gray-600">Ability to connect with other platforms and services</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-digital-purple px-2">Open Protocols</h4>
            {openProtocols.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-purple flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.interoperability.rating}
                    explanation={platform.interoperability.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
            
            <h4 className="font-medium text-sm text-digital-gray-dark px-2 pt-2">Corporate Platforms</h4>
            {corporatePlatforms.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-gray-dark flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.interoperability.rating}
                    explanation={platform.interoperability.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="algorithmic" className="mt-0">
          <div className="bg-gray-50 p-2 rounded-md mb-2">
            <h3 className="font-medium text-sm">Algorithmic Control</h3>
            <p className="text-xs text-gray-600">Transparency and user control over content algorithms</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-digital-purple px-2">Open Protocols</h4>
            {openProtocols.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-purple flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.algorithmic.rating}
                    explanation={platform.algorithmic.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
            
            <h4 className="font-medium text-sm text-digital-gray-dark px-2 pt-2">Corporate Platforms</h4>
            {corporatePlatforms.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-gray-dark flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.algorithmic.rating}
                    explanation={platform.algorithmic.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="governance" className="mt-0">
          <div className="bg-gray-50 p-2 rounded-md mb-2">
            <h3 className="font-medium text-sm">Self-governance</h3>
            <p className="text-xs text-gray-600">User and community control over platform rules and moderation</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-digital-purple px-2">Open Protocols</h4>
            {openProtocols.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-purple flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.governance.rating}
                    explanation={platform.governance.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
            
            <h4 className="font-medium text-sm text-digital-gray-dark px-2 pt-2">Corporate Platforms</h4>
            {corporatePlatforms.map((platform) => (
              <Card key={platform.name} className="overflow-hidden border shadow-sm">
                <div className="p-3 flex justify-between items-center bg-gray-50 border-b">
                  <div className="font-medium text-sm text-digital-gray-dark flex items-center">
                    {platform.name}
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <PlatformRating
                    rating={platform.governance.rating}
                    explanation={platform.governance.explanation}
                    compact={true}
                  />
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    );
  };

  // Desktop view renders the full table
  const renderDesktopView = () => {
    return (
      <Card className="overflow-hidden border-0 shadow-md">
        <div className="p-4 md:p-6 bg-gradient-to-r from-digital-gray-light to-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 mr-2 shadow-sm">
                Open Protocol
              </span>
              <span className="text-sm text-gray-700">
                Community-driven platforms based on open standards
              </span>
            </div>
            <div className="flex items-center">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-red-100 text-red-800 mr-2 shadow-sm">
                Corporate
              </span>
              <span className="text-sm text-gray-700">
                Centrally-controlled commercial platforms
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p className="mb-2">
              <strong>Rating Key:</strong>
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                <span>Poor</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-orange-500 mr-2"></span>
                <span>Fair</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                <span>Good</span>
              </div>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-digital-purple mr-2"></span>
                <span>Excellent</span>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-gray-50 sticky top-0 z-10">
              <TableRow>
                <TableHead className="min-w-[150px] font-bold">Platform</TableHead>
                <TableHead className="font-bold">Type</TableHead>
                <TableHead className="font-bold">Privacy & Security</TableHead>
                <TableHead className="font-bold">Ownership</TableHead>
                <TableHead className="font-bold">Interoperability</TableHead>
                <TableHead className="font-bold">Algorithmic Control</TableHead>
                <TableHead className="font-bold">Self-governance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Open Protocols Section */}
              {openProtocols.map((platform) => (
                <TableRow key={platform.name} className="hover:bg-gray-50/80 transition-colors">
                  <TableCell className="font-medium text-digital-purple flex items-center align-top">
                    {platform.name}
                    {platform.name === "Mastodon/Fediverse" && (
                      <ExternalLink className="ml-1 w-3 h-3 text-gray-400" />
                    )}
                  </TableCell>
                  <TableCell className="align-top">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                      {platform.type}
                    </span>
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.privacy.rating}
                      explanation={platform.privacy.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.ownership.rating}
                      explanation={platform.ownership.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.interoperability.rating}
                      explanation={platform.interoperability.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.algorithmic.rating}
                      explanation={platform.algorithmic.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.governance.rating}
                      explanation={platform.governance.explanation}
                    />
                  </TableCell>
                </TableRow>
              ))}
              
              {/* Corporate Platforms Section with divider */}
              <TableRow>
                <TableCell colSpan={7} className="p-0">
                  <div className="h-3 bg-gray-50 border-y border-gray-200"></div>
                </TableCell>
              </TableRow>
              
              {corporatePlatforms.map((platform) => (
                <TableRow key={platform.name} className="hover:bg-gray-50/80 transition-colors">
                  <TableCell className="font-medium text-digital-gray-dark align-top">
                    {platform.name}
                  </TableCell>
                  <TableCell className="align-top">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      {platform.type}
                    </span>
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.privacy.rating}
                      explanation={platform.privacy.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.ownership.rating}
                      explanation={platform.ownership.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.interoperability.rating}
                      explanation={platform.interoperability.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.algorithmic.rating}
                      explanation={platform.algorithmic.explanation}
                    />
                  </TableCell>
                  <TableCell className="align-top">
                    <PlatformRating
                      rating={platform.governance.rating}
                      explanation={platform.governance.explanation}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    );
  };

  return isMobile ? renderMobileView() : renderDesktopView();
};

export default PlatformComparisonTable;
