import mongoose from "mongoose";

const GuestSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true }, // <= Tambahkan
    url: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.models.Guest || mongoose.model("Guest", GuestSchema);
