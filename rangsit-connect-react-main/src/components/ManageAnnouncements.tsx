
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";

export const ManageAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase.from("announcements").select("*");
    if (error) console.log("Error fetching announcements:", error);
    else setAnnouncements(data);
  };

  const handleFileChange = (file) => {
    setImageFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrlToSave = imageUrl;

    if (imageFile) {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("images")
        .upload(`announcements/${Date.now()}_${imageFile.name}`, imageFile);

      if (uploadError) {
        console.log("Error uploading image:", uploadError);
        return;
      }

      console.log("uploadData", uploadData);

      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(uploadData.path);

      console.log("publicUrlData", publicUrlData);

      imageUrlToSave = publicUrlData.publicUrl;
      console.log("imageUrlToSave", imageUrlToSave);
    }

    if (editing) {
      const { data, error } = await supabase
        .from("announcements")
        .update({ title, subtitle, image_url: imageUrlToSave })
        .eq("id", editing)
        .select();
      if (error) console.log("Error updating announcement:", error);
      else setAnnouncements(announcements.map((a) => (a.id === editing ? data[0] : a)));
    } else {
      const { data, error } = await supabase
        .from("announcements")
        .insert([{ title, subtitle, image_url: imageUrlToSave }])
        .select();
      if (error) console.log("Error creating announcement:", error);
      else setAnnouncements([...announcements, data[0]]);
    }
    setTitle("");
    setSubtitle("");
    setImageUrl("");
    setImageFile(null);
    setEditing(null);
  };

  const handleEdit = (announcement) => {
    setTitle(announcement.title);
    setSubtitle(announcement.subtitle);
    setImageUrl(announcement.image_url);
    setEditing(announcement.id);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from("announcements").delete().eq("id", id);
    if (error) console.log("Error deleting announcement:", error);
    else setAnnouncements(announcements.filter((a) => a.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
          <Input
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                handleFileChange(e.target.files[0]);
              }
            }}
          />
          <Button type="submit">{editing ? "Update" : "Create"}</Button>
        </form>
        <div className="mt-8 space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement.id} className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{announcement.title}</h3>
                <p className="text-sm text-muted-foreground">{announcement.subtitle}</p>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm" onClick={() => handleEdit(announcement)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(announcement.id)}>
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};


