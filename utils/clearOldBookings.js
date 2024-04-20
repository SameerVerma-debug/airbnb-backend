const Booking = require("../model/Booking");

const clearOldBookings = async () => {
  const currDate = new Date();

  try {
    await Booking.deleteMany({ checkOutDate: { $lt: currDate } });
  } catch (error) {
    console.error('Error clearing old bookings:', error);
  }
};


module.exports = clearOldBookings;