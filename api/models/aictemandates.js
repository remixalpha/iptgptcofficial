import Mongoose from "mongoose";
const AicteMandatesSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    fileUrl: { type: String, require: true },
    year: { type: String, require: true, default: "2022-23" },
  },
  { timestamps: true }
);
export default Mongoose.model("AicteMandates", AicteMandatesSchema);
