const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  booking_id: {
    type: Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },
  payment_date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"]
  },
  status: {
    type: String,
    required: [true, "Payment status is required"],
    enum: ["pending", "paid"]
  }
});

module.exports = mongoose.model("Payment", paymentSchema);
