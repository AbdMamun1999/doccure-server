const Doctor = require("../model/Doctor");

exports.getAllDoctorService = async () => {
  const doctors = await Doctor.find({});
  console.log(doctors);
  return doctors;
};
