const authRouter = require("./authRoute");
const roomRouter = require("./roomRoute");
const reviewRouter = require("./reviewRoute");
const imageRoomRouter = require("./imageRoomRoute");
const bookingRouter = require("./bookingRoute.js");
const paymentRouter = require("./paymentRoute.js");
const complaintRouter = require("./complaintRoute.js");
const amenityRouter = require("./amenityRoute.js");
const promotionRouter = require("./promotionRoute.js");

const appRouter = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/rooms", roomRouter);
  app.use("/api/v1/images_room", imageRoomRouter);
  app.use("/api/v1/reviews", reviewRouter);
  app.use("/api/v1/bookings", bookingRouter);
  app.use("/api/v1/payments", paymentRouter);
  app.use("/api/v1/complaints", complaintRouter);
  app.use("/api/v1/amenities", amenityRouter);
  app.use("/api/v1/promotions", promotionRouter);
};
module.exports = appRouter;
