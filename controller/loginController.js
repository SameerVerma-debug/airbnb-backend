const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email }).exec();

    if (!foundUser) {
      return res.status(409).json({ message: "Email does not exist" });
    }

    const storedPassword = foundUser.password;
    const isPasswordCorrect = await bcrypt.compare(password, storedPassword);

    if (!isPasswordCorrect) {
      return res.status(409).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      { email: foundUser.email, id: foundUser._id },
      process.env.JWT_SECRET,
      {}
    );
    res
      .cookie("token", token)
      .json(foundUser);
  } catch (err) {
    res.status(409).json({ message: "Login not successful" });
  }
};

module.exports = handleLogin;
