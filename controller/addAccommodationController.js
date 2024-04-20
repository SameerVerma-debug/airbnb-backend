const Accommodation = require("../model/Accommodation");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const handleAddAccommodation = async (req, res) => {
  const {
    userId,
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

  try{
    await Accommodation.create({
      owner: userId,
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
  
    res.sendStatus(201);
  }
  catch(err){
    res.sendStatus(500);
  }
};

module.exports = handleAddAccommodation;
