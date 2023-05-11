const mongoose = require("mongoose");

const validator = require("validator");

const doctorSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid email"],
      trim: true,
      lowercase: true,
      unique: true,
      required: [true, "Email address is required"],
    },

    role: {
      type: String,
      enum: ["user", "doctor", "admin"],
      default: "doctor",
    },

    name: {
      type: String,
      required: [true, "Please provide a firstname"],
      minLength: [3, "Name must be at least 3 characters"],
      maxLength: [100, "Name is too large"],
    },

    image: {
      type: String,
      required: true,
      validate: [validator.isUrl, "wrong url"],
    },
    location: {
      type: String,
    },
    about: {
      type: String,
    },
    specialist: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Doctors", doctorSchema);

module.exports = User;
