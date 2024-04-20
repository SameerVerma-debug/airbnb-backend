const path = require('path');
const fs = require('fs');

const basePath = path.join(__dirname,"..","uploads/")

const handleUpload = async (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { filename, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const filenameWithExt = filename + "." + ext;
    fs.renameSync(
      path.join(basePath + filename),
      path.join(basePath + filenameWithExt)
    );
    uploadedFiles.push(filenameWithExt);
  }
  res.json(uploadedFiles);
};

module.exports = handleUpload;
