import { useState, useEffect } from "react";

export default function InvitationCard({ guestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        const response = await fetch(`/api/guests/${guestId}`);
        const data = await response.json();
        setGuest(data.data);
      } catch (error) {
        console.error("Error fetching guest:", error);
      }
    };

    if (guestId) fetchGuest();
  }, [guestId]);

  if (!guest) return <p>Loading...</p>;

  return (
    <div className="border p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2">{guest.name}</h2>
      <p className="text-lg">Selamat datang di acara kami!</p>
    </div>
  );
}
