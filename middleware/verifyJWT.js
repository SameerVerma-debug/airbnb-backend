const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req,res,next) => {
  const token = req.cookies.jwt || req.headers['authorization'];
  if(!token){
    return res.sendStatus(403);
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET,
    {},
    (err,decoded) => {
      if(err){
        return res.sendStatus(403);
      }
      req.body.userId = decoded.id;
      req.body.userEmail = decoded.email;
      next();
    }
  )
}

module.exports = verifyJWT;