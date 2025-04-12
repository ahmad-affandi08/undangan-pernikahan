export default function GuestTable({
  guests,
  setEditId,
  setFormData,
  handleDelete,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Nama</th>
            <th className="border border-gray-300 px-4 py-2">Slug</th>
            <th className="border border-gray-300 px-4 py-2">URL</th>
            <th className="border border-gray-300 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {guests.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="border border-gray-300 px-4 py-6 text-center"
              >
                Belum Ada Tamu.
              </td>
            </tr>
          ) : (
            guests.map((guest, index) => (
              <tr key={guest._id}>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {guest.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {guest.slug}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={guest.url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {guest.url}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
                    onClick={() => {
                      setEditId(guest._id);
                      setFormData({ name: guest.name });
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleDelete(guest._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
