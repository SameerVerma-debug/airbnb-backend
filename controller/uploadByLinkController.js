const path = require('path');
const imageDownlaoder = require('image-downloader');

const handleUploadByLink = async(req,res) => {
  const {link} = req.body;
  console.log(link);
  if(!link){
    res.status(404).json({message:"Can't get Image"});
    return;
  }
  const newName = 'photo' + Date.now() + '.jpg';
  const options = {
    url:link,
    dest:path.join(__dirname,"..","uploads",newName)
  }
  try{
    await imageDownlaoder.image(options);
    console.log(newName);
    res.json(newName);
  }
  catch(err){
    res.sendStatus(500);
  }
}

module.exports = handleUploadByLink;