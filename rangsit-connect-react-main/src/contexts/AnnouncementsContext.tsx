import { createContext, useState, useContext, ReactNode } from 'react';

interface Announcement {
  title: string;
  date: string;
  category: string;
  description: string;
  urgent: boolean;
}

interface AnnouncementsContextType {
  announcements: Announcement[];
  addAnnouncement: (announcement: Announcement) => void;
  deleteAnnouncement: (index: number) => void;
}

const AnnouncementsContext = createContext<AnnouncementsContextType | undefined>(undefined);

const initialAnnouncements: Announcement[] = [
  {
    title: "Fall Semester Registration Opens",
    date: "May 15, 2025",
    category: "Academic",
    description: "Registration for Fall 2025 semester is now open. Students can register for courses through the RSU Portal.",
    urgent: true,
  },
  {
    title: "Annual University Fair 2025",
    date: "May 20, 2025",
    category: "Event",
    description: "Join us for the annual university fair featuring exhibitions, performances, and guest speakers from various industries.",
    urgent: false,
  },
];

export const AnnouncementsProvider = ({ children }: { children: ReactNode }) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const addAnnouncement = (announcement: Announcement) => {
    setAnnouncements([announcement, ...announcements]);
  };

  const deleteAnnouncement = (index: number) => {
    setAnnouncements(announcements.filter((_, i) => i !== index));
  };

  return (
    <AnnouncementsContext.Provider value={{ announcements, addAnnouncement, deleteAnnouncement }}>
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
