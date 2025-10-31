
/**
 * AdminLogin component provides a login interface for administrators.
 * It handles username and password input and simulates a login process.
 */

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RIG from "@/assets/RIG.png";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      navigate("/admin-panel");
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
          <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg border border-border">
            <div className="flex flex-col items-center mb-8">
              <img
                src={RIG}
                alt="Rangsit University Logo"
                className="w-24 h-24 mb-4"
              />
              <h2 className="text-3xl font-bold text-foreground">Admin Login</h2>
              <p className="text-muted-foreground text-sm">
                Access the administration panel
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  required
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <Button type="submit" className="w-full shadow-md">
                Login
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              <Link to="/" className="text-primary hover:underline">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminLogin;
