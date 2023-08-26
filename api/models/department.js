import Mongoose from "mongoose";
const departmentSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);
export default Mongoose.model("Department", departmentSchema);
