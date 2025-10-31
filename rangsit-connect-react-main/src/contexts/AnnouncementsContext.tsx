import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface Announcement {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  category: string;
  description: string;
  urgent: boolean;
  image: string;
}

interface AnnouncementsContextType {
  announcements: Announcement[];
  loading: boolean;
  deleteAnnouncement: (id: number) => void;
}

const AnnouncementsContext = createContext<AnnouncementsContextType | undefined>(undefined);

export const AnnouncementsProvider = ({ children }: { children: ReactNode }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase.from('announcements').select('*');
      if (error) {
        console.error('Error fetching announcements:', error);
      } else {
        setAnnouncements(data || []);
      }
      setLoading(false);
    };

    fetchAnnouncements();
  }, []);

  const deleteAnnouncement = async (id: number) => {
    const { error } = await supabase.from('announcements').delete().eq('id', id);
    if (error) {
      console.error('Error deleting announcement:', error);
    } else {
      setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
    }
  };

  return (
    <AnnouncementsContext.Provider value={{ announcements, loading, deleteAnnouncement }}>
      {children}
    </AnnouncementsContext.Provider>
  );
};

export const useAnnouncements = () => {
  const context = useContext(AnnouncementsContext);
  if (context === undefined) {
    throw new Error('useAnnouncements must be used within an AnnouncementsProvider');
  }
  return context;
};
