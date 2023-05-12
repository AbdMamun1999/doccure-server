const express = require("express");
const doctorController = require("../controller/doctors.controller");
const router = express.Router();

router.route("/alldoctor").get(doctorController.getAllDoctor);

router.route("/:id").get(doctorController.getDoctorById);

module.exports = router;
