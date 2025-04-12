import dbConnect from "@/utils/dbConnect";
import guestModel from "@/models/guestModel";

export async function GET(req, { params }) {
  await dbConnect();

  try {
    const { slug } = await params;
    const guest = await guestModel.findOne({ slug }); // cari berdasarkan slug

    if (!guest) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Tamu tidak ditemukan",
        }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: guest,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
