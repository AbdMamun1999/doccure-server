const { getAllDoctorService } = require("../services/doctors.service");

exports.getAllDoctor = async (req, res, next) => {
  try {
    const doctors = await getAllDoctorService();

    res.status(200).json({
      status: "Success",
      data: doctors,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Could'n get the doctors.Something went wrong",
    });
  }
};
