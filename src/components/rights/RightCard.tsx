
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  violations: string[];
  implementations: string[];
}

const RightCard = ({
  icon,
  title,
  description,
  violations,
  implementations,
}: RightCardProps) => {
  return (
    <Card className="border-2 border-digital-purple/30 hover:border-digital-purple transition-colors duration-300 h-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="p-2 rounded-full bg-digital-purple/10 text-digital-purple">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        
        <div>
          <h4 className="font-semibold text-red-500 mb-2">Violations:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {violations.map((violation, index) => (
              <li key={index}>{violation}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-green-600 mb-2">Proper Implementation:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {implementations.map((implementation, index) => (
              <li key={index}>{implementation}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RightCard;
