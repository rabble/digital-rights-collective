
import { Star, StarHalf } from "lucide-react";

type Rating = "Poor" | "Fair" | "Good" | "Excellent";

interface PlatformRatingProps {
  rating: Rating;
  explanation: string;
}

const PlatformRating = ({ rating, explanation }: PlatformRatingProps) => {
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

  const getStars = (rating: Rating) => {
    switch (rating) {
      case "Poor":
        return (
          <div className="flex">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5" />
            <Star className="h-5 w-5" />
            <Star className="h-5 w-5" />
          </div>
        );
      case "Fair":
        return (
          <div className="flex">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5" />
            <Star className="h-5 w-5" />
          </div>
        );
      case "Good":
        return (
          <div className="flex">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5" />
          </div>
        );
      case "Excellent":
        return (
          <div className="flex">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <span className={`font-semibold ${getRatingColor(rating)}`}>{rating}</span>
        <div className={getRatingColor(rating)}>{getStars(rating)}</div>
      </div>
      <p className="text-sm text-muted-foreground">{explanation}</p>
    </div>
  );
};

export default PlatformRating;
