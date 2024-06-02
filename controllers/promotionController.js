const Promotion = require("../models/promotion.model");
const Booking = require("../models/booking.model");

exports.getAllPromotion = async (req, res, next) => {
  try {
    const promotions = await Promotion.find({});
    res.status(200).json({
      status: "success",
      result: promotions.length,
      data: { promotions }
    });
  } catch (error) {
    next(error);
  }
};

exports.createOnePromotion = async (req, res, next) => {
  try {
    const { booking_id } = req.body;
    const bookingExists = await Booking.findById(booking_id);
    if (!bookingExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const promotion = await Promotion.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: { promotion }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOnePromotion = async (req, res, next) => {
  try {
    const { promotion_id } = req.params;
    const promotion = await Promotion.findByIdAndUpdate(
      promotion_id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: { promotion }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOnePromotion = async (req, res, next) => {
  try {
    const { promotion_id } = req.params;
    const promotion = await Promotion.findByIdAndDelete(promotion_id);
    res.status(200).json({
      status: "success",
      data: { promotion }
    });
  } catch (error) {
    next(error);
  }
};
