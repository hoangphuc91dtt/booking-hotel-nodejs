const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  booking_id: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ["open", "closed", "pending"], // Add more statuses as needed
    default: "open"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;
