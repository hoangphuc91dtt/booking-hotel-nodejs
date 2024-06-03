const express = require("express");
const {
  getAllComplaint,
  createOneComplaint,
  updateOneComplaint,
  deleteOneComplaint
} = require("../controllers/complaintController");
const { checkUser, checkAdmin } = require("../middlewares/checkRole");
const complaintRouter = express.Router();

complaintRouter.get("/", getAllComplaint);
complaintRouter.post("/", checkUser, createOneComplaint);
complaintRouter.put("/:complaint_id", checkAdmin, updateOneComplaint);
complaintRouter.delete("/:complaint_id", checkAdmin, deleteOneComplaint);
module.exports = complaintRouter;
