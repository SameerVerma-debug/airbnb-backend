const Accommodation = require("../model/Accommodation");

const handleFillAutoComplete = async (req,res) => {
  const {searchTerm} = req.params;

  const results = await Accommodation.aggregate([
    {
      '$search': {
        'index': "autoCompleteAccommodations",
        "autocomplete":{
          "query":searchTerm,
          "path":"address",
          "tokenOrder":"sequential",
          "fuzzy":{}
        }
      }
    },
    {
      $limit: 10
    },
    {
      $project:{
        "address":1
      }
    }
  ])

  res.json(results);
}

module.exports = handleFillAutoComplete