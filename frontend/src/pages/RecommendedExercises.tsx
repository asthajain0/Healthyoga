import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ExerciseCard from "@/components/ExerciseCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useAppContext } from "../context/AppContext.jsx"

const RecommendedExercises = () => {

  const {axios} = useAppContext();

  const { problemId } = useParams();
  const [problem, setProblem] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all problems
        const problemsRes = await axios.get("/api/problems");
        const foundProblem = problemsRes.data.find(p => p.id === problemId);
        setProblem(foundProblem);

        if (foundProblem) {
          // Fetch exercises for the problem category
          const exercisesRes = await axios.get(`/api/poses/${problemId}`);
          setExercises(exercisesRes.data);
        } else {
          setExercises([]);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch exercises. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, [problemId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pb-20">
        <p>Loading...</p>
      </div>
    );
  }

  if (!problem) {
    return (
      <div className="min-h-screen flex items-center justify-center pb-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Problem not found</h2>
          <Link to="/problems">
            <Button>Browse All Problems</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 calm-gradient">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/problems">
          <Button variant="ghost" className="mb-6 hover:bg-primary/10 hover:text-black">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Problems
          </Button>
        </Link>

        <div className="mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Recommended for You</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Yoga for {problem.name}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {problem.description || "These carefully selected exercises will help support your healing journey."}
          </p>
        </div>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {exercises.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No exercises found for this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedExercises;
