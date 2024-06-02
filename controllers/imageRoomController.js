const ImageRoom = require("../models/imageRoom.model");
const Room = require("../models/room.model");
exports.getAllImagesRoom = async (req, res, next) => {
  try {
    const image_room = await ImageRoom.find().populate("room_id", "_id");
    res.status(200).json({
      status: "success",
      data: { image_room }
    });
  } catch (error) {
    next(error);
  }
};

exports.createImagesForRoom = async (req, res, next) => {
  try {
    const { room_id, image_url } = req.body;
    const roomExists = await Room.findById(room_id);
    if (!roomExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const image_room = await ImageRoom.create({ room_id, image_url });
    res.status(200).json({
      status: "success",
      data: { image_room }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateImagesForRoom = async (req, res, next) => {
  try {
    const { image_roomId } = req.params;
    const image_room = await ImageRoom.findByIdAndUpdate(
      image_roomId,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: { image_room }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteImagesForRoom = async (req, res, next) => {
  try {
    const { image_roomId } = req.params;
    await ImageRoom.findByIdAndDelete(image_roomId);
    res.status(200).json({
      status: "success",
      message: "ImageRoom has been deleted"
    });
  } catch (error) {
    next(error);
  }
};
