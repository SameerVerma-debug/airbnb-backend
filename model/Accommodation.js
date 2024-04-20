const mongoose = require('mongoose');
const {Schema} = mongoose;

const accommodationSchema = new Schema({
  owner:{
    type:mongoose.Schema.Types.ObjectId
  },
  title:String,
  address:String,
  photos:[String],
  description: String,
  perks:[String],
  extraInfo: String,
  checkIn:String,
  checkOut:String,
  guestsInfo: String,
  price:Number
})

module.exports = mongoose.model('Accommodation',accommodationSchema);