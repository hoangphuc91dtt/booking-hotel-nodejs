const Booking = require("../models/booking.model");
const Payment = require("../models/payment.model");

exports.getAllPayment = async (req, res, next) => {
  try {
    const payments = await Payment.find();
    res.status(200).json({
      status: "success",
      data: { payments }
    });
  } catch (error) {
    next(error);
  }
};

exports.createOnePayment = async (req, res, next) => {
  try {
    const { booking_id } = req.body;
    const bookingExists = await Booking.findById(booking_id);
    if (!bookingExists) {
      return res.status(404).json({ message: "User not found" });
    }
    const payment = await Payment.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: { payment }
    });
  } catch (error) {
    next(error);
  }
};
exports.updateOnePayment = async (req, res, next) => {
  try {
    const { payment_id } = req.params;
    const payment = await Payment.findByIdAndUpdate(
      payment_id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: { payment }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOnePayment = async (req, res, next) => {
  try {
    const { payment_id } = req.params;
    const payment = await Payment.findByIdAndDelete(payment_id);
    res.status(200).json({
      status: "success",
      message: "Payment has been deleted"
    });
  } catch (error) {
    next(error);
  }
};
