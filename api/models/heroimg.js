import Mongoose from "mongoose";

const heroImgSchema = Mongoose.Schema(
  {
    admin: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    fileUrl: { type: String, require: true },
  },
  { timestamps: true }
);

export default Mongoose.model("HeroImg", heroImgSchema);
