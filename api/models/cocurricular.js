import Mongoose from "mongoose";
const CoCurricularSchema = Mongoose.Schema(
  {
    name: { type: String, required: true },
    fileUrl: { type: String, require: true },
    clubName: {
      type: String,
      required: true,
      enum: ["ncc", "asap", "iedc"],
    },
  },
  { timestamps: true }
);
export default Mongoose.model("CoCurricular", CoCurricularSchema);
