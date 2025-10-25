import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, Utensils, LogOut, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
    title: "Manage Academic Calendar",
    description: "Update Academic Calendar ",
    icon: <Calendar className="w-8 h-8 text-primary" />,
    link: "/admin/academicCalender",
  },
];

const AdminPanel = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center">Admin Panel</h1>
          <p className="mt-4 text-center text-muted-foreground">Welcome to the admin panel. Here you can manage the content of the website.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 text-center">
            {adminTasks.map((task) => (
              <Card key={task.title}>
                <CardHeader className="flex flex-row items-center justify-center pb-2">
                  <div className="pr-3">
                    {task.icon}
                  </div>
                  <CardTitle className="text-center text-lg font-medium">{task.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">{task.description}</p>
                  <div className="mt-4 flex justify-center">
                    <Button>Go to section</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
