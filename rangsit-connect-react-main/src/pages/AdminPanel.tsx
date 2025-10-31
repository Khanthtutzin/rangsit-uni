import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ManageAnnouncements } from "@/components/ManageAnnouncements";
import { ManageClubs } from "@/components/ManageClubs";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";


const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin-login");
  };

  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center">Admin Panel</h1>
          <p className="mt-4 text-center text-muted-foreground">Welcome to the admin panel. Here you can manage the content of the website.</p>

          <div className="mt-12">
            <Tabs defaultValue="announcements">
              <TabsList>
                <TabsTrigger value="announcements">Manage Announcements</TabsTrigger>
                <TabsTrigger value="clubs">Manage Clubs</TabsTrigger>
              </TabsList>
              <TabsContent value="announcements">
                <ManageAnnouncements />
              </TabsContent>
              <TabsContent value="clubs">
                <ManageClubs />
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12 flex justify-center  ">
            <Button variant="outline" size="lg" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4 " />
              Logout
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminPanel;
