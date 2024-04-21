require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/connectdb");
const path = require("path");
const cron = require("node-cron");
const bodyParser = require('body-parser');
const clearOldBookings = require("./utils/clearOldBookings");
const cloudinary = require('./cloudinary/cloudinary');

connectDB(); 

cron.schedule("0 0 * * *", clearOldBookings);
        
app.use(
  cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
  })
);

app.use(express.urlencoded({ extended: true,limit:'50mb' }));
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.json({limit:'50mb'}))
app.use(cookieParser());

app.use("/register", require("./routes/auth/register"));
app.use("/login", require("./routes/auth/login"));
app.use("/accommodations", require("./routes/accommodations"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/search", require("./routes/search"));
app.use("/autocomplete", require("./routes/autocomplete"));

app.use(require("./middleware/verifyJWT"));
//app.use("/upload-by-link", require("./routes/uploadByLink"));
app.use("/upload", require("./routes/upload"));
app.use("/profile", require("./routes/profile"));
app.use("/logout", require("./routes/logout"));
app.use("/user-accommodations", require("./routes/userAccommodations"));
app.use("/bookings", require("./routes/bookings"));

mongoose.connection.once("open", () => {
  console.log("Database Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
});
