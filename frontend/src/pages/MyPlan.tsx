import { useState, useEffect } from "react";
import { exercises } from "@/data/yogaData";
import ExerciseCard from "@/components/ExerciseCard";
import { Card } from "@/components/ui/card";
import { Calendar, Flame } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useAppContext } from "../context/AppContext.jsx"

const MyPlan = () => {

  const {axios} = useAppContext();

  const [savedExercises, setSavedExercises] = useState([]);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.warn("No token found — user not logged in.");
          setLoading(false);
          return;
        }

        // ✅ Get user's saved exercises from backend
        const res = await axios.get("/api/plan", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data.success && Array.isArray(res.data.plan)) {
          setSavedExercises(res.data.plan);
        }

        // optional streak logic if you're tracking practice dates later
        const lastPracticed = localStorage.getItem("lastPracticed");
        if (lastPracticed) {
          const lastDate = new Date(lastPracticed);
          const today = new Date();
          const diffDays = Math.floor(
            (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24)
          );

          if (diffDays <= 1) {
            const currentStreak = parseInt(localStorage.getItem("streak") || "0");
            setStreak(currentStreak);
          }
        }
      } catch (error) {
        console.error("Error fetching plan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, []);

  // Filter only exercises from your yogaData that match backend IDs
  const myExercises = exercises.filter((ex) => savedExercises.includes(ex.id));

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Loading your plan...
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 calm-gradient">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Practice</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Plan
          </h1>
          <p className="text-lg text-muted-foreground">
            Your personalized yoga practice routine
          </p>
        </div>

        {streak > 0 && (
          <Card className="p-6 mb-8 card-gradient shadow-card border-border/50 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Flame className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {streak} Day Streak!
                </h3>
                <p className="text-sm text-muted-foreground">
                  Keep up the amazing work
                </p>
              </div>
            </div>
          </Card>
        )}

        {myExercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {myExercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center card-gradient shadow-card border-border/50 animate-fade-in">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Your plan is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Start adding exercises to build your personalized yoga practice
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
