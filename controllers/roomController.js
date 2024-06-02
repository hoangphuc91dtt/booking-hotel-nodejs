const Room = require("../models/room.model");

exports.getAllRoom = async (req, res, next) => {
  try {
    const rooms = await Room.find({});
    res.status(200).json({
      status: "success",
      result: rooms.length,
      data: { rooms }
    });
  } catch (error) {
    res.json(error);
  }
};

exports.createOneRoom = async (req, res, next) => {
  try {
    const room = await Room.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: { room }
    });
  } catch (error) {
    res.json(error);
  }
};

exports.updateOneRoom = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    const room = await Room.findByIdAndUpdate(
      room_id,
      { ...req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        room
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOneRoom = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    await Room.findByIdAndDelete(room_id);
    res.status(200).json({
      status: "success",
      message: "Room has been deleted"
    });
  } catch (error) {
    next(error);
  }
};
