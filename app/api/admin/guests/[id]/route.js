import dbConnect from "@/utils/dbConnect";
import guestModel from "@/models/guestModel";

// Mengambil detail berdasarkan ID
export async function GET(req, { params }) {
  const { id } = await params; // Pastikan untuk menunggu params di-async

  try {
    await dbConnect(); // Menghubungkan ke database
    const guest = await guestModel.findById(id); // Mengambil tamu berdasarkan ID

    if (!guest) {
      return new Response("Tamu tidak ditemukan", { status: 404 });
    }

    return new Response(JSON.stringify(guest), { status: 200 });
  } catch (error) {
    console.error("Error fetching guest:", error);
    return new Response("Terjadi kesalahan pada server", { status: 500 });
  }
}

// Mengupdate data tamu
export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  try {
    await dbConnect();
    const updatedGuest = await guestModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedGuest) {
      return new Response(
        JSON.stringify({ success: false, message: "Guest not found" }),
        { status: 404 }
      );
    }
    return new Response(JSON.stringify({ success: true, data: updatedGuest }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      }
    );
  }
}

// Menghapus tamu berdasarkan ID
export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    // Pastikan params.id telah diambil dengan await
    const { id } = await params;

    // Menghapus tamu dari database
    const deletedGuest = await guestModel.findByIdAndDelete(id);

    if (!deletedGuest) {
      return new Response(
        JSON.stringify({ success: false, error: "Guest not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ success: true, data: deletedGuest }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
