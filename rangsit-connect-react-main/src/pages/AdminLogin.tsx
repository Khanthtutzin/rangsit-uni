/**
 * AdminLogin component provides a login interface for administrators.
 * It handles username and password input and simulates a login process.
 */
// Import the useState hook from React for managing component state
import { useState } from "react";
// Import the Link component from react-router-dom for navigation
import { Link } from "react-router-dom";
// Import UI components from the local components library
import { Button } from "@/components/ui/button"; // Button component for the login action
import { Input } from "@/components/ui/input";   // Input component for username and password fields
import { Label } from "@/components/ui/label";   // Label component for input fields
// Import the Rangsit University logo image
import rangsitLogo from "@/assets/rangsit-logo.png";
// Import the Navigation and Footer components
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Define the AdminLogin functional component
const AdminLogin = () => {
  // State variable to store the username input value, initialized as an empty string
  const [username, setUsername] = useState("");
  // State variable to store the password input value, initialized as an empty string
  const [password, setPassword] = useState("");

  // Event handler for the login form submission
  const handleLogin = (e: React.FormEvent) => {
    // Prevents the default form submission behavior, which would cause a page reload
    e.preventDefault();
    // Placeholder for actual login logic (e.g., sending data to a server)
    console.log("Username:", username, "Password:", password);
    // Displays an alert indicating that login functionality is not yet implemented
    alert("Login functionality not implemented yet.");
  };

  // The component's render method
  return (
    <> {/* React Fragment to return multiple elements */}
      {/* Renders the top navigation bar */}
      <Navigation />
      {/* Main container for the login page, ensuring it takes at least the full screen height */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 pt-20 lg:pt-4 lg:mr-[80px]">
        {/* Card-like container for the login form, with styling for width, padding, rounded corners, shadow, and border */}
        <div className="w-full max-w-md bg-card p-8 rounded-lg shadow-lg border border-border">
          {/* Section for the logo and login heading */}
          <div className="flex flex-col items-center mb-8">
            {/* Rangsit University logo image */}
            <img src={rangsitLogo} alt="Rangsit University Logo" className="w-24 h-24 mb-4" />
            {/* Main heading for the admin login page */}
            <h2 className="text-3xl font-bold text-foreground">Admin Login</h2>
            {/* Sub-text providing context for the login page */}
            <p className="text-muted-foreground text-sm">Access the administration panel</p>
          </div>

          {/* Login form with an onSubmit handler and spacing between elements */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Container for the username input field */}
            <div>
              {/* Label for the username input */}
              <Label htmlFor="username">Username</Label>
              {/* Username input field */}
              <Input
                id="username" // Unique ID for the input, linked to the label
                type="text" // Specifies the input type as text
                placeholder="Enter your username" // Placeholder text for the input
                value={username} // Binds the input value to the 'username' state variable
                onChange={(e) => setUsername(e.target.value)} // Updates 'username' state on input change
                required // Makes the input field mandatory
              />
            </div>
            {/* Container for the password input field */}
            <div>
              {/* Label for the password input */}
              <Label htmlFor="password">Password</Label>
              {/* Password input field */}
              <Input
                id="password" // Unique ID for the input, linked to the label
                type="password" // Specifies the input type as password (hides characters)
                placeholder="Enter your password" // Placeholder text for the input
                value={password} // Binds the input value to the 'password' state variable
                onChange={(e) => setPassword(e.target.value)} // Updates 'password' state on input change
                required // Makes the input field mandatory
              />
            </div>
            {/* Login button */}
            <Button type="submit" className="w-full shadow-md">
              Login
            </Button>
          </form>

          {/* Section for additional links or messages below the form */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {/* Link to navigate back to the home page */}
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      {/* Renders the footer */}
      <Footer />
    </>
  );
};

// Exports the AdminLogin component for use in other parts of the application
export default AdminLogin;
