import mongoose from "mongoose";

const teamSchema = mongoose.Schema(
  {
    teamName: {
      type: String,
      unique: true,
    },
    teamLeaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    teamNumber: {
      type: Number,
    },
    leaderName: {
      type: String,
    },
    leaderEmail: {
      type: String,
    },
    isQualified: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
      },
    ],
    teamCode: {
      type: String,
    },
    linkNumber: {
      type: Number,
    },
  },
  { collection: "Event1" }
);

export const Event1 =
  mongoose.models.Event1 || mongoose.model("Event1", teamSchema);
