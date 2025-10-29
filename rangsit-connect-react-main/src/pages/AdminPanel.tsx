import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, Utensils, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useNavigate, Link } from "react-router-dom";

const adminTasks = [
  {
    title: "Manage Announcements",
    description: "Create, edit, and delete university announcements.",
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    link: "/admin/announcements",
  },
  {
    title: "Manage Clubs",
    description: "Add new student clubs and update existing ones.",
    icon: <Users className="w-8 h-8 text-primary" />,
    link: "/admin/clubs",
  },
  {
    title: "Manage Canteen",
    description: "Update canteen menus and operating hours.",
    icon: <Utensils className="w-8 h-8 text-primary" />,
    link: "/admin/canteen",
  },
  {
    title: "Manage Calendar",
    description: "Update calendar events and add new events.",
    icon: <Utensils className="w-8 h-8 text-primary" />,
    link: "/admin/canteen",
  },
];

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
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <p className="mt-4 text-muted-foreground">Welcome to the admin panel. Here you can manage the content of the website.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {adminTasks.map((task) => (
              <Card key={task.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">{task.title}</CardTitle>
                  {task.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                  <div className="mt-4 flex justify-center">
                    <Link to={task.link}>
                      <Button>Go to section</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
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
