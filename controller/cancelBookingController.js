const Booking = require("../model/Booking");

const handleCancelBooking = async (req, res) => {
  const { bookingId } = req.body;
  
  try {
    const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    res.json(deletedBooking._id);
  } catch (err) {
    res.status(500).json({ message: "Something Went Wrong" });
  }
};

module.exports = handleCancelBooking;
