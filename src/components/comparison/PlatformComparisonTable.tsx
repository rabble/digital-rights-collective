
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import PlatformRating from "./PlatformRating";

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
  }
];

const PlatformComparisonTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[150px]">Platform</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Privacy & Security</TableHead>
            <TableHead>Ownership</TableHead>
            <TableHead>Interoperability</TableHead>
            <TableHead>Algorithmic Control</TableHead>
            <TableHead>Self-governance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {platforms.map((platform) => (
            <TableRow key={platform.name}>
              <TableCell className="font-medium">{platform.name}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  platform.type === "Corporate" 
                    ? "bg-red-100 text-red-800" 
                    : "bg-green-100 text-green-800"
                }`}>
                  {platform.type}
                </span>
              </TableCell>
              <TableCell>
                <PlatformRating
                  rating={platform.privacy.rating}
                  explanation={platform.privacy.explanation}
                />
              </TableCell>
              <TableCell>
                <PlatformRating
                  rating={platform.ownership.rating}
                  explanation={platform.ownership.explanation}
                />
              </TableCell>
              <TableCell>
                <PlatformRating
                  rating={platform.interoperability.rating}
                  explanation={platform.interoperability.explanation}
                />
              </TableCell>
              <TableCell>
                <PlatformRating
                  rating={platform.algorithmic.rating}
                  explanation={platform.algorithmic.explanation}
                />
              </TableCell>
              <TableCell>
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
  );
};

export default PlatformComparisonTable;
