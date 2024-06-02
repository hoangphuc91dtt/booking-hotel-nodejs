const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  booking_id: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  applied_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Promotion", promotionSchema);
