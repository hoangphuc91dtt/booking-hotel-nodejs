const express = require("express");
const { checkAdmin, checkUser } = require("../middlewares/checkRole"); // Sửa tên middleware ở đây
const {
  getAllRoom,
  createOneRoom,
  updateOneRoom,
  deleteOneRoom
} = require("../controllers/roomController");
const roomRouter = express.Router();

roomRouter.get("/", getAllRoom);
roomRouter.post("/", checkAdmin, createOneRoom); // Sử dụng tên đúng của middleware ở đây
roomRouter.put("/:room_id", checkAdmin, updateOneRoom); // Sử dụng tên đúng của middleware ở đây
roomRouter.delete("/:room_id", checkAdmin, deleteOneRoom); // Sử dụng tên đúng của middleware ở đây

module.exports = roomRouter;
