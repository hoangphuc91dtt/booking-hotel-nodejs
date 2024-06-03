const express = require("express");
const { checkUser } = require("../middlewares/checkRole");
const {
  getAllRoom,
  createOneRoom,
  updateOneRoom,
  deleteOneRoom
} = require("../controllers/roomController");
const roomRouter = express.Router();

roomRouter.get("/", getAllRoom);
roomRouter.post("/", checkUser, createOneRoom);
roomRouter.put("/:room_id", checkUser, updateOneRoom);
roomRouter.delete("/:room_id", checkUser, deleteOneRoom);

module.exports = roomRouter;
