const express = require("express");
const { checkUser } = require("../middlewares/checkRole");
const {
  getAllReview,
  createOneReview,
  updateOneReview,
  deleteOneReview
} = require("../controllers/reviewController");
const reviewRouter = express.Router();

reviewRouter.get("/", getAllReview);
reviewRouter.post("/", checkUser, createOneReview);
reviewRouter.put("/:review_id", checkUser, updateOneReview);
reviewRouter.delete("/:review_id", checkUser, deleteOneReview);

module.exports = reviewRouter;
