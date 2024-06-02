const Amenity = require("../models/amentity.model");
const Room = require("../models/room.model");

exports.getAllAmenity = async (req, res) => {
  try {
    const amenities = await Amenity.find({});
    res.status(200).json({
      status: "success",
      result: amenities.length,
      data: { amenities }
    });
  } catch (error) {
    next(error);
  }
};

exports.createOneAmenity = async (req, res) => {
  try {
    const { room_id } = req.body;
    const roomExists = await Room.findById(room_id);
    if (!roomExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const amenity = await Amenity.create({ ...req.body });
    res.status(200).json({
      status: "success",
      data: { amenity }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateOneAmenity = async (req, res) => {
  try {
    const { amenity_id } = req.params;
    const { room_id } = req.body;
    const roomExists = await Room.findById(room_id);
    if (!roomExists) {
      return res.status(404).json({ message: "Room not found" });
    }
    const amenity = await Amenity.findByIdAndUpdate(
      amenity_id,
      { ...req.body },
      {
        new: true
      }
    );
    res.status(200).json({
      status: "success",
      data: { amenity }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteOneAmenity = async (req, res) => {
  try {
    const { amenity_id } = req.params;
    const amenity = await Amenity.findByIdAndDelete(amenity_id);
    res.status(200).json({
      status: "success",
      data: { amenity }
    });
  } catch (error) {
    next(error);
  }
};
