const express = require("express");
const {
  getAllAmenity,
  createOneAmenity,
  updateOneAmenity,
  deleteOneAmenity
} = require("../controllers/amenityController");
const { checkUser } = require("../middlewares/checkRole");
const amenityRouter = express.Router();

amenityRouter.get("/", getAllAmenity);
amenityRouter.post("/", checkUser, createOneAmenity);
amenityRouter.put("/:amenity_id", checkUser, updateOneAmenity);
amenityRouter.delete("/:amenity_id", checkUser, deleteOneAmenity);
module.exports = amenityRouter;
