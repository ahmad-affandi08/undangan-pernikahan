"use client";

import GuestForm from "@/components/GuestForm";
import GuestTable from "@/components/GuestTable";
import { useGuests } from "@/hooks/useGuests";

export default function Dashboard() {
  const {
    guests,
    formData,
    setFormData,
    editId,
    setEditId,
    handleSubmit,
    handleDelete,
  } = useGuests();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Tamu</h1>
      <GuestForm
        formData={formData}
        setFormData={setFormData}
        editId={editId}
        setEditId={setEditId}
        handleSubmit={handleSubmit}
      />
      <GuestTable
        guests={guests}
        setEditId={setEditId}
        setFormData={setFormData}
        handleDelete={handleDelete}
      />
    </div>
  );
}
