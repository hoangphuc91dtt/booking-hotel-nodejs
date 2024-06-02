const express = require("express");
const {
  getAllPayment,
  createOnePayment,
  updateOnePayment,
  deleteOnePayment
} = require("../controllers/paymentController");
const { checkUser } = require("../middlewares/checkRole");
const paymentRouter = express.Router();

paymentRouter.get("/", getAllPayment);
paymentRouter.post("/", createOnePayment);
paymentRouter.put("/:payment_id", updateOnePayment);
paymentRouter.delete("/:payment_id", deleteOnePayment);
module.exports = paymentRouter;
