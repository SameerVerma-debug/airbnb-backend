const Booking = require("../model/Booking");
const handleGetUserBookings = async(req,res) => {
  const {userId} = req.body;
  if(!userId){
    return res.sendStatus(403);
  }

  try{
    const userBookings = await Booking.find({userId:userId}).populate('accommodation');
  res.json(userBookings);
  }
  catch(err){
    res.sendStatus(500);
  }
}

module.exports = handleGetUserBookings;