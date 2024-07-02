import mongoose, { Schema } from "mongoose";

const event_Schema = new Schema(
  {
    event: {
      type: String,
      required: [true, "Event is required."],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dateOfEvent: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Event = mongoose.models.Event || mongoose.model("Event", event_Schema);

export default Event;
