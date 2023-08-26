import Mongoose from "mongoose";
const HodSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    dept: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    fileUrl: { type: String, require: true },
    Qualification: { type: String, require: true },
  },
  { timestamps: true }
);
export default Mongoose.model("Hod", HodSchema);
