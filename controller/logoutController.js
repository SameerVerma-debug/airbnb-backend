const handleLogout = (req, res) => {
  console.log(req.cookies.jwt);
    res
      .clearCookie("jwt")
      .json({ message: "Cookie Cleared" });
  
};

module.exports = handleLogout;
