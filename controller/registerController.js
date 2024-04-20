const User = require("../model/User");
const bcrypt = require('bcrypt');

const handleRegister = async(req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password,10);
  try{
    await User.create({
      name,
      email,
      password:hashedPassword
    });
    res.status(201).json({message:"Registration Successful! Go to Login Page"});
  }
  catch(err){
    res.status(422).json({message:"Email already exists!"});
  }
}

module.exports = handleRegister;