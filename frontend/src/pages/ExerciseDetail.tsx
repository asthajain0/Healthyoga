import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, TrendingUp, AlertTriangle, BookmarkPlus, BookmarkCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExerciseDetail = () => {
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/id/${exerciseId}`);
        setExercise(res.data);

        // Check if saved
        const saved = localStorage.getItem("myPlan");
        if (saved) {
          const plan = JSON.parse(saved);
          setIsSaved(plan.includes(exerciseId));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchExercise();
  }, [exerciseId]);

  const toggleSave = () => {
    const saved = localStorage.getItem("myPlan");
    let plan = saved ? JSON.parse(saved) : [];
    
    if (isSaved) {
      plan = plan.filter((id: string) => id !== exerciseId);
      toast({
        title: "Removed from My Plan",
        description: "Exercise removed from your practice plan"
      });
    } else {
      plan.push(exerciseId);
      toast({
        title: "Added to My Plan",
        description: "Exercise saved to your practice plan"
      });
    }
    
    localStorage.setItem("myPlan", JSON.stringify(plan));
    setIsSaved(!isSaved);
  };

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center pb-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Exercise not found</h2>
          <Link to="/problems">
            <Button>Browse Exercises</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 calm-gradient">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        {/* Hero Image */}
        <div className="relative h-80 rounded-2xl overflow-hidden mb-8 shadow-elevated animate-fade-in">
          <img 
            src={exercise.image} 
            alt={exercise.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-primary text-primary-foreground">
                {exercise.level}
              </Badge>
              <div className="flex items-center gap-1.5 text-white text-sm">
                <Clock className="h-4 w-4" />
                <span>{exercise.duration}</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {exercise.name}
            </h1>
            {exercise.sanskritName && (
              <p className="text-lg text-white/80 italic">
                {exercise.sanskritName}
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4 mb-8 animate-fade-in">
          <Button 
            onClick={toggleSave}
            size="lg"
            className={isSaved ? "wellness-gradient" : ""}
            variant={isSaved ? "default" : "outline"}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="h-5 w-5 mr-2" />
                Saved to My Plan
              </>
            ) : (
              <>
                <BookmarkPlus className="h-5 w-5 mr-2" />
                Add to My Plan
              </>
            )}
          </Button>
        </div>

        <div className="space-y-6 animate-fade-in">
          {/* Tagline */}
          <Card className="p-6 card-gradient shadow-card border-border/50">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {exercise.tagline}
            </p>
          </Card>

          {/* How to Do */}
          <Card className="p-6 card-gradient shadow-card border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-primary">📝</span>
              How to Do
            </h2>
            <ol className="space-y-3">
              {exercise.howToDo.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Card>

          {/* Benefits */}
          <Card className="p-6 card-gradient shadow-card border-border/50">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Benefits
            </h2>
            <ul className="space-y-2">
              {exercise.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Contraindications */}
          <Card className="p-6 border-destructive/30 bg-destructive/5 shadow-card">
            <h2 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              When NOT to Do
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Health Conditions:</h3>
                <ul className="space-y-2">
                  {exercise.contraindications.map((contra, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive mt-1">⚠</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {contra}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Warnings:</h3>
                <ul className="space-y-2">
                  {exercise.warnings.map((warning, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive mt-1">!</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {warning}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
