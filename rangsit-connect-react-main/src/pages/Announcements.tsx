import { useAnnouncements } from "@/contexts/AnnouncementsContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Announcements = () => {
  const { announcements } = useAnnouncements();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Announcements</h1>
      <div className="grid gap-4">
        {announcements.map((announcement, index) => (
          <Card key={index} className={announcement.urgent ? "border-red-500" : ""}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">{announcement.date} - {announcement.category}</p>
              <p className="mt-2">{announcement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Announcements;