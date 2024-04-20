const Accommodation = require("../model/Accommodation");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleEditAccommodation = async (req, res) => {
  const {
    userId,
    id,
    title,
    address,
    photos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    guestsInfo,
    price
  } = req.body;

  if(!req.body?.id){
    return res.sendStatus(404);
  }

  try{
    const foundAccommodation = await Accommodation.findById(id);
    if (userId !== foundAccommodation.owner.toString()) {
      return res.sendStatus(403);
    }
  
    foundAccommodation.set({
      title,
      address,
      photos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      guestsInfo,
      price
    });
    await foundAccommodation.save();
    res.status(200).json({ message: "Accommodation Edit Successful" });
  }
  catch(err){
    res.sendStatus(404);
  }
};

module.exports = handleEditAccommodation;
