import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import RecommendedExercises from "./pages/RecommendedExercises";
import ExerciseDetail from "./pages/ExerciseDetail";
import MyPlan from "./pages/MyPlan";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import BottomNav from "./components/BottomNav";
import Navbar from "./components/navbar";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/exercises/:problemId" element={<RecommendedExercises />} />
          <Route path="/exercise/:exerciseId" element={<ExerciseDetail />} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/my-plan" element={<MyPlan />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
