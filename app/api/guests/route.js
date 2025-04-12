import dbConnect from "@/utils/dbConnect";
import guestModel from "../../../models/guestModel";
import slugify from "slugify"; // Pastikan slugify sudah terpasang

// Fetch all guests
export async function GET() {
  try {
    await dbConnect();
    const guests = await guestModel.find();
    return new Response(JSON.stringify({ success: true, data: guests }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

// Create a new guest
export async function POST(req) {
  try {
    await dbConnect();
    const { name } = await req.json();

    const slug = slugify(name, { lower: true, strict: true });
    const url = `/invitation/${slug}`;
    // Membuat tamu baru dengan slug dan URL
    const newGuest = await guestModel.create({
      name,
      slug,
      url,
    });

    return new Response(JSON.stringify({ success: true, data: newGuest }), {
      status: 201,
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
