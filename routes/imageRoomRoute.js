const express = require("express");
const {
  getAllImagesRoom,
  createImagesForRoom,
  updateImagesForRoom,
  deleteImagesForRoom
} = require("../controllers/imageRoomController");
const { checkUser } = require("../middlewares/checkRole");

const imageRoomRouter = express.Router();

imageRoomRouter.get("/", getAllImagesRoom);
imageRoomRouter.post("/", checkUser, createImagesForRoom);
imageRoomRouter.put("/:image_roomId", checkUser, updateImagesForRoom);
imageRoomRouter.delete("/:image_roomId", checkUser, deleteImagesForRoom);

module.exports = imageRoomRouter;
