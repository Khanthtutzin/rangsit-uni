import { useState } from 'react';
import { useAnnouncements } from '@/contexts/AnnouncementsContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

const ManageAnnouncements = () => {
  const { announcements, addAnnouncement, deleteAnnouncement } = useAnnouncements();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [urgent, setUrgent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAnnouncement({ title, date, category, description, urgent });
    setTitle('');
    setDate('');
    setCategory('');
    setDescription('');
    setUrgent(false);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-8">Manage Announcements</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Announcement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div className="flex items-center">
              <Input id="urgent" type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} className="mr-2 w-4 h-4" />
              <Label htmlFor="urgent">Urgent</Label>
            </div>
            <Button type="submit">Add Announcement</Button>
          </form>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Existing Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <Card key={index}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{announcement.title}</h3>
                  <p className="text-sm text-muted-foreground">{announcement.date} - {announcement.category}</p>
                </div>
                <Button variant="destructive" size="icon" onClick={() => deleteAnnouncement(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAnnouncements;
