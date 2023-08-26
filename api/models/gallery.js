import Mongoose from "mongoose";
const GallerySchema = Mongoose.Schema(
  {
    event: { type: String, required: true },
    tabs: { type: String, require: true },
    fileUrl: { type: String, require: true },
    date: { type: String, require: true, default: Date() },
  },
  { timestamps: true }
);
export default Mongoose.model("Gallery", GallerySchema);
