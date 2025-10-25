import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Users, Utensils } from "lucide-react";

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
];

const AdminPanel = () => {
  return (
    <>
      <Navigation />
      <main className="pt-20 lg:pt-0 lg:mr-[80px]">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold">Admin Panel</h1>
          <p className="mt-4 text-muted-foreground">Welcome to the admin panel. Here you can manage the content of the website.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {adminTasks.map((task) => (
              <Card key={task.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-medium">{task.title}</CardTitle>
                  {task.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                  <Button className="mt-4">Go to section</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminPanel;
