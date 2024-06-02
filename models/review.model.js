const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    room_id: {
      type: Schema.Types.ObjectId,
      ref: "Room",
      required: true
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: 1,
      max: 5
    },
    comment: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
