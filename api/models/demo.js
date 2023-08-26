import Mongoose from "mongoose";
const demoSchema = Mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);
export default Mongoose.model("Demo", demoSchema);
