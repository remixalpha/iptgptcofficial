import Mongoose from "mongoose";
const staffSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    dept: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    fileUrl: { type: String, require: true },
    position: { type: String, require: true },
  },
  { timestamps: true }
);
export default Mongoose.model("Staff", staffSchema);
