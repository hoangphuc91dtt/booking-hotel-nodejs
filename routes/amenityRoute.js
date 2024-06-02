const express = require("express");
const {
  getAllAmenity,
  createOneAmenity,
  updateOneAmenity,
  deleteOneAmenity
} = require("../controllers/amenityController");
const amenityRouter = express.Router();

amenityRouter.get("/", getAllAmenity);
amenityRouter.post("/", createOneAmenity);
amenityRouter.put("/:amenity_id", updateOneAmenity);
amenityRouter.delete("/:amenity_id", deleteOneAmenity);
module.exports = amenityRouter;
