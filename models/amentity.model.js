const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const amenitySchema = new Schema({
  room_id: {
    type: Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Amenity", amenitySchema);
