const express = require("express");
const app = express();
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(cors());

// routes
const userRoute = require("./routes/user.route");
const doctorRoute = require("./routes/doctor.route");
const appointmentRoute = require("./routes/appointment.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.use("/user", userRoute);
app.use("/doctors", doctorRoute);
app.use("/doctor", appointmentRoute);

module.exports = app;
