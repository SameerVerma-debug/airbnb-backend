const Accommodation = require("../model/Accommodation");

const handleSearchAccommodationsQuery = async(req,res) => {
  const {searchQuery} = req.params;
  if(!searchQuery){
    return res.sendStatus(404);
  }
  const results = await Accommodation.aggregate(
    [
      {
        '$search': {
          'index': "searchAccommodations",
          text: {
            'query': searchQuery,
            'path': {
              'wildcard': "*"
            },
            'fuzzy':{}
          }
        }
      }
    ]
  )
  res.json(results);
}

module.exports = handleSearchAccommodationsQuery;