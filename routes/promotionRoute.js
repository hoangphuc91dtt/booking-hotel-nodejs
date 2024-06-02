const express = require("express");
const {
  getAllPromotion,
  createOnePromotion,
  updateOnePromotion,
  deleteOnePromotion
} = require("../controllers/promotionController");
const promotionRouter = express.Router();

promotionRouter.get("/", getAllPromotion);
promotionRouter.post("/", createOnePromotion);
promotionRouter.put("/:promotion_id", updateOnePromotion);
promotionRouter.delete("/:promotion_id", deleteOnePromotion);
module.exports = promotionRouter;
