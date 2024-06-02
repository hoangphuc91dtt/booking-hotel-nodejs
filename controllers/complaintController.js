const Complaint = require("../models/complain.model");
const User = require("../models/user.model");
const Booking = require("../models/booking.model");

exports.getAllComplaint = async (req, res) => {
  try {
    const complaints = await Complaint.find({});
    res.status(200).json(complaints);
  } catch (error) {
    next(error);
  }
};

exports.createOneComplaint = async (req, res) => {
  try {
    const { user_id, booking_id, description, status, created_at } = req.body;
    const userExists = await User.findById(user_id);
    const bookingExists = await Booking.findById(booking_id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!bookingExists) {
      return res.status(404).json({ message: "Booking not found" });
    }
    const complaint = await Complaint.create({
      user_id,
      booking_id,
      description,
      status,
      created_at
    });
    res.status(200).json({
      status: "success",
      data: { complaint }
    });
  } catch (error) {
    next(error);
  }
};
exports.updateOneComplaint = async (req, res) => {
  try {
    const { complaint_id } = req.params;
    const complaint = await Complaint.findByIdAndUpdate(
      complaint_id,
      { ...req.body },
      {
        new: true,
        runValidators: true
      }
    );
    res.status(200).json(complaint);
  } catch (error) {
    next(error);
  }
};

exports.deleteOneComplaint = async (req, res) => {
  try {
    const { complaint_id } = req.params;
    await Complaint.findByIdAndDelete(complaint_id);
    res.status(200).json({
      status: "success",
      message: "Complaint has been deleted"
    });
  } catch (error) {
    next(error);
  }
};
