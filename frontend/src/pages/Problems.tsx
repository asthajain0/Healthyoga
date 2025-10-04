import { useEffect, useState } from "react";
import ProblemCard from "@/components/ProblemCard";
import { Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useAppContext } from "../context/AppContext.jsx"

const Problems = () => {

    const {axios} = useAppContext();

    const [problems, setProblems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchProblems = async () => {
        try {
          const response = await axios.get("/api/problems");
          setProblems(response.data);
        } catch (err) {
          console.error(err);
          setError("Failed to load problems.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchProblems();
    }, []);
  

  return (
    <div className="min-h-screen pb-20 calm-gradient">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Leaf className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Health Focus</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What problem are you facing?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select your health concern to discover personalized yoga exercises
          </p>
        </div>
        
        {loading ? (
          <p className="text-center text-lg text-muted-foreground">Loading problems...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Problems;
