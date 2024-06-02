const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imageRoomSchema = new Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  image_url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("ImageRoom", imageRoomSchema);
