const express = require("express");
const {
  getAllPromotion,
  createOnePromotion,
  updateOnePromotion,
  deleteOnePromotion
} = require("../controllers/promotionController");
const { checkAdmin } = require("../middlewares/checkRole");
const promotionRouter = express.Router();

promotionRouter.get("/", getAllPromotion);
promotionRouter.post("/", checkAdmin, createOnePromotion);
promotionRouter.put("/:promotion_id", checkAdmin, updateOnePromotion);
promotionRouter.delete("/:promotion_id", checkAdmin, deleteOnePromotion);
module.exports = promotionRouter;
