
import { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children: React.ReactNode;
}

const ActionCard = ({ icon: Icon, title, description, children }: ActionCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-digital-purple flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default ActionCard;
