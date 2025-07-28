import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const VolunteerPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Beach Cleanup', description: 'Help clean up the beach.' },
    { id: 2, name: 'Tree Planting', description: 'Join us to plant trees in the park.' },
  ]);
  const [newEvent, setNewEvent] = useState({ name: '', description: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.description) {
      const id = events.length + 1;
      setEvents([...events, { id, ...newEvent }]);
      setNewEvent({ name: '', description: '' });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Volunteer Events</h1>
      <div className="mb-4 space-y-2">
        <Input
          placeholder="Event Name"
          name="name"
          value={newEvent.name}
          onChange={handleInputChange}
        />
        <Input
          placeholder="Event Description"
          name="description"
          value={newEvent.description}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddEvent}>Add Event</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{event.name}</h2>
              <p className="text-gray-600">{event.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VolunteerPage;
