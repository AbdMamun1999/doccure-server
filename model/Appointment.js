const mongoose = require("mongoose");

const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const appointmentSchema = mongoose.Schema(
  {
    doctorId: {
      type: ObjectId,
      required: true,
      ref: "Doctor",
    },
    doctorEmail: {
      type: String,
      validate: [validator.isEmail, "Provide a valid email"],
      trim: true,
      lowercase: true,
      required: [true, "Email address is required"],
    },
    doctorName: {
      type: String,
      required: [true, "Please provide a firstname"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },
    patientName: {
      type: String,
      required: [true, "Please provide a firstname"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },

    patientId: {
      type: ObjectId,
      required: true,
      ref: "User",
    },

    patientEmail: {
      type: String,
      validate: [validator.isEmail, "Provide a valid email"],
      trim: true,
      lowercase: true,
      required: [true, "Email address is required"],
    },

    patientPhone: {
      type: Number,
    },
    reason: {
      type: String,
      required: true,
    },
    appointmentDate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
