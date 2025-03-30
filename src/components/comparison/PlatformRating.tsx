
import { Star, StarHalf, Check, X, AlertCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Rating = "Poor" | "Fair" | "Good" | "Excellent";

interface PlatformRatingProps {
  rating: Rating;
  explanation: string;
  compact?: boolean;
}

const PlatformRating = ({ rating, explanation, compact = false }: PlatformRatingProps) => {
  const getRatingColor = (rating: Rating) => {
    switch (rating) {
      case "Poor":
        return "text-red-500";
      case "Fair":
        return "text-orange-500";
      case "Good":
        return "text-green-500";
      case "Excellent":
        return "text-digital-purple";
      default:
        return "text-gray-500";
    }
  };

  const getRatingBadge = (rating: Rating) => {
    switch (rating) {
      case "Poor":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-500 border-red-200">
            <X className="w-3 h-3 mr-1" /> Poor
          </Badge>
        );
      case "Fair":
        <Badge variant="outline" className="bg-orange-50 text-orange-500 border-orange-200">
          <AlertCircle className="w-3 h-3 mr-1" /> Fair
        </Badge>;
      case "Good":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-500 border-green-200">
            <Check className="w-3 h-3 mr-1" /> Good
          </Badge>
        );
      case "Excellent":
        return (
          <Badge variant="outline" className="bg-purple-50 text-digital-purple border-purple-200">
            <Check className="w-3 h-3 mr-1" /> Excellent
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStars = (rating: Rating) => {
    const starSize = compact ? "h-3 w-3" : "h-4 w-4";
    
    switch (rating) {
      case "Poor":
        return (
          <div className="flex">
            <Star className={`${starSize} fill-current`} />
            <Star className={starSize} />
            <Star className={starSize} />
            <Star className={starSize} />
          </div>
        );
      case "Fair":
        return (
          <div className="flex">
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
            <Star className={starSize} />
            <Star className={starSize} />
          </div>
        );
      case "Good":
        return (
          <div className="flex">
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
            <Star className={starSize} />
          </div>
        );
      case "Excellent":
        return (
          <div className="flex">
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
            <Star className={`${starSize} fill-current`} />
          </div>
        );
      default:
        return null;
    }
  };

  if (compact) {
    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={`font-medium text-xs ${getRatingColor(rating)}`}>{rating}</span>
          <div className={getRatingColor(rating)}>{getStars(rating)}</div>
        </div>
        <p className="text-xs text-muted-foreground">{explanation}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2 p-2 rounded-md hover:bg-gray-50 transition-colors h-full flex flex-col">
      <div className="flex items-center gap-2">
        <span className={`font-semibold ${getRatingColor(rating)}`}>{rating}</span>
        <div className={getRatingColor(rating)}>{getStars(rating)}</div>
      </div>
      <Separator className="my-1" />
      <p className="text-sm text-muted-foreground">{explanation}</p>
    </div>
  );
};

export default PlatformRating;
