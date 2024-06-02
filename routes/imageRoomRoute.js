const express = require("express");
const {
  getAllImagesRoom,
  createImagesForRoom,
  updateImagesForRoom,
  deleteImagesForRoom
} = require("../controllers/imageRoomController");
const imageRoomRouter = express.Router();

imageRoomRouter.get("/", getAllImagesRoom);
imageRoomRouter.post("/", createImagesForRoom);
imageRoomRouter.put("/:image_roomId", updateImagesForRoom);
imageRoomRouter.delete("/:image_roomId", deleteImagesForRoom);

module.exports = imageRoomRouter;
