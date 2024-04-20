const mongoose = require("mongoose");
const { Schema } = mongoose;
const Accommodation = require("../model/Accommodation")
const bookingSchema = new Schema({
  accommodation: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"Accommodation"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  noOfGuests: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("booking", bookingSchema);
