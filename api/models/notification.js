import Mongoose from "mongoose";

const notificationSchema = Mongoose.Schema(
  {
    admin: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
    message: { type: String, require: true, max: 1024, min: 6 },
    link: { type: String, require: true, default: "" },
    fileUrl: { type: String, require: true },
    selectedType: { type: String, required: true },
  },
  { timestamps: true }
);

export default Mongoose.model("Notification", notificationSchema);
