const express = require("express");
const {
  getAllBookingController,
  createOneBookingController,
  putOneBookingController,
  deleteOneBookingController
} = require("../controllers/bookingController");
const { checkUser, checkAdmin } = require("../middlewares/checkRole");
const bookingRoute = express.Router();

bookingRoute.get("/", checkUser, getAllBookingController);
bookingRoute.post("/", checkUser, createOneBookingController);
bookingRoute.put("/:booking_id", checkAdmin, putOneBookingController);
bookingRoute.delete("/:booking_id", checkAdmin, deleteOneBookingController);

module.exports = bookingRoute;
