import Mongoose from "mongoose";

const adminSchema = Mongoose.Schema(
  {
    email: { type: String, required: true, max: 200, min: 6, unique: true },
    password: { type: String, require: true, max: 1024, min: 6 },
  },
  { timestamps: true }
);

export default Mongoose.model("Admin", adminSchema);
