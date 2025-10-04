import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import ProblemCard from "@/components/ProblemCard";
import heroImage from "@/assets/hero-yoga.jpg";
import { Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";

const Home = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/problems");
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
    <div className="min-h-screen calm-gradient">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex-col items-center justify-center overflow-hidden ">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Yoga for Wellness" 
            className="w-screen h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"></div>
          
        </div>
        <Navbar/>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 mt-20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Yoga for Wellness</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Find the right yoga
            <span className="text-4xl md:text-5xl lg:text-6xl mt-4 p-4 rounded-xl block wellness-gradient bg-clip-text text-white">
              that your health needs
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Personalized yoga exercises to support your wellness journey
          </p>
          
          <Link to="/problems">
            <Button size="lg" className="wellness-gradient text-white hover:opacity-90 transition-smooth shadow-elevated text-lg px-8 py-6 rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Access Problems */}
      {/* <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What do you need help with?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your health focus and discover targeted yoga practices
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
      </section> */}
    </div>
  );
};

export default Home;
