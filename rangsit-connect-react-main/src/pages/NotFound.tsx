/**
 * NotFound component displays a 404 error page when a user navigates to a non-existent route.
 * It provides a link to return to the home page.
 */
// Import the useLocation hook from react-router-dom to access the current URL
import { useLocation } from "react-router-dom";
// Import the useEffect hook from React for side effects (like logging)
import { useEffect } from "react";

// Define the NotFound functional component
const NotFound = () => {
  // Get the current location object from react-router-dom, which contains information about the URL
  const location = useLocation();

  // useEffect hook to perform side effects after rendering
  useEffect(() => {
    // Logs a 404 error message to the console, including the non-existent path the user tried to access
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]); // The effect re-runs if the pathname changes

  // The component's render method
  return (
    // Main container div, styled to take full screen height and center its content both horizontally and vertically
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Inner div for text content, centered */}
      <div className="text-center">
        {/* Main heading for the 404 error */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        {/* Descriptive paragraph for the error */}
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        {/* Link to navigate back to the home page */}
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Exports the NotFound component for use in other parts of the application (e.g., routing for unmatched paths)
export default NotFound;
