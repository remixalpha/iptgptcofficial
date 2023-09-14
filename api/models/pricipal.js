import Mongoose from "mongoose";
const PrincipalSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    message: { type: String, required: true },
    fileUrl: { type: String, require: true },
    Qualification: { type: String, require: true },
  },
  { timestamps: true }
);
export default Mongoose.model("Principal", PrincipalSchema);
