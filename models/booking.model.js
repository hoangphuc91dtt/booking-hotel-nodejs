const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  check_in: {
    type: Date,
    required: true
  },
  check_out: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["pending", "confirmed", "cancelled", "completed"], // Add more statuses as needed
    default: "pending"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  total_price: {
    type: Number,
    required: true
  }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
