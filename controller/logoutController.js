const handleLogout = (req,res) => {
  const {token} = req.cookies;

  if(token){
    return  res.status(202).clearCookie('token').json({message:"Cookie Cleared"});
  }

  return res.json(null);
}

module.exports = handleLogout;