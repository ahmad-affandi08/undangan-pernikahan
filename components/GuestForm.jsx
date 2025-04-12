export default function GuestForm({
  formData,
  setFormData,
  editId,
  setEditId,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Masukkan Nama Tamu..."
          className="border p-2 rounded w-full"
          value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
          required
        />
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white ${
            editId ? "bg-yellow-500" : "bg-blue-500"
          }`}
        >
          {editId ? "Update" : "Tambah"}
        </button>
        {editId && (
          <button
            type="button"
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={() => {
              setEditId(null);
              setFormData({ name: "" });
            }}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
