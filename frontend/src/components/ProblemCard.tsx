import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Problem } from "@/data/yogaData";
import * as Icons from "lucide-react";

interface ProblemCardProps {
  problem: Problem;
}

const ProblemCard = ({ problem }: ProblemCardProps) => {
  const IconComponent = Icons[problem.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  
  return (
    <Link to={`/exercises/${problem.id}`}>
      <Card className="card-gradient hover-lift shadow-card overflow-hidden border-border/50 group h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={problem.image} 
            alt={problem.name}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-3 mb-2">
              {IconComponent && (
                <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {problem.name}
              </h3>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {problem.description}
          </p>
        </div>
      </Card>
    </Link>
  );
};

export default ProblemCard;
