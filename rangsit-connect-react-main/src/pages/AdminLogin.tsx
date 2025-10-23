import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import rangsitLogo from "@/assets/rangsit-logo.png";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username, "Password:", password);
    alert("Login functionality not implemented yet.");
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg border border-border">
          <div className="flex flex-col items-center mb-8">
            <img src={rangsitLogo} alt="Rangsit University Logo" className="w-24 h-24 mb-4" />
            <h2 className="text-3xl font-bold text-foreground">Admin Login</h2>
            <p className="text-muted-foreground text-sm">Access the administration panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
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
      <Footer />
    </>
  );
};

export default AdminLogin;
