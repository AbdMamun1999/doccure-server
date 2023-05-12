const Doctor = require("../model/Doctor");

exports.getAllDoctorService = async () => {
  const doctors = await Doctor.find({});
  return doctors;
};


exports.getDoctorByIdService = async (id) => {
  const doctor = await Doctor.findOne({ _id: id });
  return doctor;
};