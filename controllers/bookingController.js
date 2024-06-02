const Booking = require("../models/booking.model");
const Room = require("../models/room.model");
const User = require("../models/user.model");

exports.getAllBookingController = async (req, res, next) => {
  try {
    const booking = await Booking.find({});
    res.status(200).json({
      status: "success",
      data: { booking }
    });
  } catch (error) {
    next(error);
  }
};
exports.createOneBookingController = async (req, res, next) => {
  try {
    const user_id = req.user.userId;
    const { room_id, check_in, check_out, status, total_price } = req.body;
    const userExists = await User.findById(user_id);
    const roomExists = await Room.findById(room_id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!roomExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const booking = await Booking.create({
      user_id,
      room_id,
      check_in,
      check_out,
      status,
      total_price
    });
    res.status(200).json({
      status: "success",
      data: { booking }
    });
  } catch (error) {
    next(error);
  }
};
exports.putOneBookingController = async (req, res, next) => {
  try {
    const { booking_id } = req.params;
    const booking = await Booking.findByIdAndUpdate(
      booking_id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: { booking }
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteOneBookingController = async (req, res, next) => {
  try {
    const { booking_id } = req.params;
    await Booking.findByIdAndDelete(booking_id);
    res.status(200).json({
      status: "success",
      message: "Booking has been deleted"
    });
  } catch (error) {
    next(error);
  }
};
