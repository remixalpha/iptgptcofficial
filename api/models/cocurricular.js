import Mongoose from "mongoose";
const CoCurricularSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    fileUrl: { type: String, require: true },
    position: { type: String, required: true },
    clubName: {
      type: String,
      required: true,
      enum: ["ncc", "asap", "iedc", "nss"],
    },
  },
  { timestamps: true }
);
export default Mongoose.model("CoCurricular", CoCurricularSchema);
