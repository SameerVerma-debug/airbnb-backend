const cloudinary = require("../cloudinary/cloudinary");

const handleUpload = async (req, res) => {
  const { photo, userId } = req.body;
  try {
    const result = await cloudinary.uploader.upload(photo, {
      upload_preset: "unsigned_upload",
      public_id: `${userId + Date.now()}`,
      allowed_formats: ["png", "jpg", "jpeg", "svg", "ico", "webp", "jfif"],
    });
    res.status(200).json(result?.public_id);
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = handleUpload;
