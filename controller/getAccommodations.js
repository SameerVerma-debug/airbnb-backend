const Accommodation = require("../model/Accommodation");

const handleGetAccommodations = async (req, res) => {
  const allAccommodations = await Accommodation.find();
  res.json(allAccommodations);
}

module.exports = handleGetAccommodations;