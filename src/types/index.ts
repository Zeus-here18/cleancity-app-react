export interface Issue {
  id: string;
  title: string;
  description: string;
  category: 'waste' | 'graffiti' | 'drainage' | 'street' | 'other';
  location: {
    address: string;
    coordinates: [number, number];
  };
  status: 'pending' | 'in-progress' | 'resolved';
  reportedBy: string;
  reportedAt: Date;
  photos?: string[];
  assignedTo?: string;
}

export interface VolunteerEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  maxVolunteers: number;
  registeredVolunteers: number;
  category: string;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventsJoined: number;
  badgeLevel: 'bronze' | 'silver' | 'gold';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  category: string;
  image: string;
}

export interface Stats {
  cleanedAreas: number;
  resolvedIssues: number;
  activeVolunteers: number;
  upcomingEvents: number;
}