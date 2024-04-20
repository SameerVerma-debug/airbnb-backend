const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/connectdb");
const path = require("path");
const cron = require("node-cron");
const clearOldBookings = require("./utils/clearOldBookings");
const CLIENT_URL = "https://airbnb-frontend-tau.vercel.app/";
require("dotenv").config();
connectDB();

cron.schedule("0 0 * * *", clearOldBookings);

const whitelist = [ CLIENT_URL,"http://localhost:5174"]; //sites allowed to access this server
const corsOptions = {
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS",
  optionsSuccessStatus: 200,
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(
  cors(corsOptions)
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
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
});
