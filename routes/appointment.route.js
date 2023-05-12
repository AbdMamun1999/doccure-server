const express = require("express");
const appointmentController = require("../controller/appointment.controller");
const router = express.Router();


router.route("/appointments").post(appointmentController.createAppointment);

module.exports = router;
