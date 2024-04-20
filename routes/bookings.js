const express = require('express');
const handleBookingAccommodation = require('../controller/bookingAccommodationController');
const handleGetUserBookings = require('../controller/getUserBookings');
const handleCancelBooking = require('../controller/cancelBookingController');
const router = express.Router();

router.route("/") 
      .post(handleBookingAccommodation)
      .get(handleGetUserBookings)
      .delete(handleCancelBooking)
module.exports = router;