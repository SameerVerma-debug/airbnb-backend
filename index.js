const PORT = 4000;
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/connectdb");
const path = require("path");
const cron = require("node-cron");
const clearOldBookings = require("./utils/clearOldBookings");
const CLIENT_URL = "http://localhost:5173"

connectDB();

cron.schedule("0 0 * * *", clearOldBookings);

app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/register", require("./routes/auth/register"));
app.use("/login", require("./routes/auth/login"));
app.use("/accommodations", require("./routes/accommodations"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/search", require("./routes/search"));
app.use("/autocomplete", require("./routes/autocomplete"));

app.use(require("./middleware/verifyJWT"));
app.use("/upload-by-link", require("./routes/uploadByLink"));
app.use("/upload", require("./routes/upload"));
app.use("/profile", require("./routes/profile"));
app.use("/logout", require("./routes/logout"));
app.use("/user-accommodations", require("./routes/userAccommodations"));
app.use("/bookings", require("./routes/bookings"));

mongoose.connection.once("open", () => {
  console.log("Database Connected");
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
