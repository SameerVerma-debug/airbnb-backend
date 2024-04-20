const jwt = require('jsonwebtoken');
const Accommodation = require("../model/Accommodation");
require('dotenv').config();

const handleGetUserAccommodations = async (req,res) => {
  userId = req.body.userId;
  if(!userId){
    return res.sendStatus(403);
  }

  try{
    const userAccommodations = await Accommodation.find({owner:userId});
    return res.status(200).json(userAccommodations);
  }
  catch(err){
    res.sendStatus(401);
  }
}

module.exports = handleGetUserAccommodations;