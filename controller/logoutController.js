const handleLogout = (req, res) => {
    res
      .clearCookie("jwt")
      .json({ message: "Cookie Cleared" });
  
};

module.exports = handleLogout;
