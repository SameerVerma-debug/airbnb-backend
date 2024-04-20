const Accommodation = require("../model/Accommodation");

const handleGetAccommodation = async(req,res) => {
  const {id} = req.params;
  if(!id){
    return res.sendStatus(404);
  }

  try{
    const foundAccommodation = await Accommodation.findById(id);
    res.json(foundAccommodation);
  }
  catch(err){
    res.sendStatus(404);
  }
}

module.exports = handleGetAccommodation;