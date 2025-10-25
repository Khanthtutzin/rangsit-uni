/**
 * The main application component.
 * This component sets up the main routing for the application and includes global providers like QueryClientProvider and TooltipProvider.
 */
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Canteen from "./pages/Canteen";
import Announcements from "./pages/Announcements";
import Clubs from "./pages/Clubs";
import AcademicCalendar from "./pages/AcademicCalendar";
import ShuttleBus from "./pages/ShuttleBus";
import AdminLogin from "./pages/AdminLogin";
import InternationalPrograms from "./pages/InternationalPrograms";
import AdminPanel from "./pages/AdminPanel";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import AcademicPrograms from "./pages/AcademicPrograms";
import Admissions from "./pages/Admissions";
import Library from "./pages/Library";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/canteen" element={<Canteen />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/calendar" element={<AcademicCalendar />} />
            <Route path="/shuttle-bus" element={<ShuttleBus />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/international-programs" element={<InternationalPrograms />} />
            <Route path="/academic-programs" element={<AcademicPrograms />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/library" element={<Library />} />
            <Route
              path="/admin-panel"
              element={<ProtectedRoute><AdminPanel /></ProtectedRoute>}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
