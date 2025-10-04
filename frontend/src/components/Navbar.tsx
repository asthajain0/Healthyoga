import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Check login status
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    // Redirect to login page
    window.location.href = "/auth"; // or use navigate("/auth") if using react-router
  };

  return (
    <div className="relative z-10 flex justify-between p-7 mx-auto animate-fade-in">
          <div className="text-3xl font-bold text-slate-950 tracking-wide">
            Health<span className="text-primary">Yoga</span>
          </div>
          <div className="flex items-center gap-4 relative">
            {!isLoggedIn ? (
              <>
                <Link to="/auth">
                  <Button className="font-bold text-md p-6 border-4  border-[hsl(164,58%,74%)]  text-[hsl(164,67%,34%)] hover:bg-[hsl(164,40%,58%)]" variant="outline">Login/SignUp</Button>
                </Link>
              </>
            ) : (
              <div
                className="relative"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                 
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition">
                  <User className="text-primary w-6 h-6" />
                </div>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-xl border p-2 z-50">
                    <Link
                      to="/my-plan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      My Plan
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-md"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
    </div>
  );
}

export default Navbar;
