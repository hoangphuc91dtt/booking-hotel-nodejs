const express = require("express");
const {
  getAllComplaint,
  createOneComplaint,
  updateOneComplaint,
  deleteOneComplaint
} = require("../controllers/complaintController");
const complaintRouter = express.Router();

complaintRouter.get("/", getAllComplaint);
complaintRouter.post("/", createOneComplaint);
complaintRouter.put("/:complaint_id", updateOneComplaint);
complaintRouter.delete("/:complaint_id", deleteOneComplaint);
module.exports = complaintRouter;
