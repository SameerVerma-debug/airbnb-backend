//Reject Booking for these:
//1. if older booking with checkOut > current checkIn
//2. if user already booked this before with checkOut > current checkIn

const Booking = require("../model/Booking");

const handleBookingAccommodation = async (req, res) => {
  const { accommodation, checkInDate, checkOutDate, noOfGuests, userId, userEmail, price } =
    req.body;

  const bookings = await Booking.find({
    accommodation,
  });

  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);


  for (let it = 0; it < bookings.length; it++) {
    const booking = bookings[it];
    const bookingCheckInDate = new Date(booking.checkInDate);
    const bookingCheckOutDate = new Date(booking.checkOutDate);

    if (
      (checkIn >= bookingCheckInDate && checkIn <= bookingCheckOutDate) ||
      (checkOut >= bookingCheckInDate && checkOut <= bookingCheckOutDate)
    ) {
      return res
        .status(406)
        .json({ message: "Accommodation Booked for current selected dates" });
    }
  }

  try{
    const newBooking = await Booking.create({
      userId,
      userEmail,
      accommodation,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      noOfGuests,
      price
    });
    res.json(newBooking);
  }
  catch(err){
    res.sendStatus(500);
  }
};

module.exports = handleBookingAccommodation;
