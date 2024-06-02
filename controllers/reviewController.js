const Review = require("../models/review.model");
const User = require("../models/user.model");
const Room = require("../models/room.model");

exports.getAllReview = async (req, res, next) => {
  try {
    const reviews = await Review.find({});

    res.status(200).json({
      status: "success",
      data: { reviews }
    });
  } catch (error) {
    next(error);
  }
};

exports.createOneReview = async (req, res, next) => {
  try {
    const user_id = req.user.userId;
    const { room_id, rating, comment } = req.body;
    const userExists = await User.findById(user_id);
    const roomExists = await Room.findById(room_id);
    if (!userExists) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!roomExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const review = await Review.create({ user_id, room_id, rating, comment });

    res.status(201).json({
      status: "success",
      data: { review }
    });
  } catch (error) {
    res.json({ error });
  }
};

exports.updateOneReview = async (req, res, next) => {
  try {
    const review_id = req.params;
    const review = await Review.findByIdAndUpdate(
      review_id,
      { ...req.body },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      status: "success",
      data: { review }
    });
  } catch (error) {
    res.json({ error });
  }
};

exports.deleteOneReview = async (req, res, next) => {
  try {
    const { review_id } = req.params;
    await Review.findByIdAndDelete(review_id);
    res.status(200).json({
      status: "success",
      message: "Review has been deleted"
    });
  } catch (error) {
    res.json({ error });
  }
};
