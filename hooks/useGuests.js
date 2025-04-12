import { useState, useEffect } from "react";

// Fungsi untuk bikin slug dari nama
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export function useGuests() {
  const [guests, setGuests] = useState([]);
  const [formData, setFormData] = useState({ name: "", slug: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchGuests();
  }, []);

  const fetchGuests = async () => {
    try {
      const response = await fetch("/api/guests");
      const data = await response.json();
      setGuests(data.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const slug = generateSlug(formData.name);

    try {
      if (editId) {
        // Update
        const response = await fetch(`/api/admin/guests/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, slug }),
        });
        const data = await response.json();
        setGuests((prev) =>
          prev.map((guest) => (guest._id === editId ? data.data : guest))
        );
        setEditId(null);
      } else {
        // Create
        const response = await fetch("/api/guests", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, slug }),
        });
        const data = await response.json();
        setGuests((prev) => [...prev, data.data]);
      }
      setFormData({ name: "", slug: "" });
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this guest?")) return;

    try {
      await fetch(`/api/admin/guests/${id}`, { method: "DELETE" });
      setGuests((prev) => prev.filter((guest) => guest._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return {
    guests,
    formData,
    setFormData,
    editId,
    setEditId,
    handleSubmit,
    handleDelete,
  };
}
