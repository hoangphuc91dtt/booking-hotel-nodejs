const express = require("express");
const {
  getAllPayment,
  createOnePayment,
  updateOnePayment,
  deleteOnePayment
} = require("../controllers/paymentController");
const { checkUser, checkAdmin } = require("../middlewares/checkRole");
const paymentRouter = express.Router();

paymentRouter.get("/", checkUser, getAllPayment);
paymentRouter.post("/", checkUser, createOnePayment);
paymentRouter.put("/:payment_id", checkAdmin, updateOnePayment);
paymentRouter.delete("/:payment_id", checkAdmin, deleteOnePayment);
module.exports = paymentRouter;
