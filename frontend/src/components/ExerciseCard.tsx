import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Exercise } from "@/data/yogaData";
import { Clock } from "lucide-react";

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  return (
    <Link to={`/exercise/${exercise.id}`}>
      <Card className="card-gradient hover-lift shadow-card overflow-hidden border-border/50 group h-full">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={exercise.image} 
            alt={exercise.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm">
              {exercise.level}
            </Badge>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent" />
        </div>
        
        <div className="p-5 relative -mt-12">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {exercise.name}
            </h3>
            {exercise.sanskritName && (
              <p className="text-xs text-muted-foreground italic mb-2">
                {exercise.sanskritName}
              </p>
            )}
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {exercise.tagline}
            </p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{exercise.duration}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ExerciseCard;
