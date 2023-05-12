const {
  getAllDoctorService,
  getDoctorByIdService,
} = require("../services/doctors.service");

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

exports.getDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await getDoctorByIdService(id);

    if (!doctor) {
      res.status(400).json({
        status: "fail",
        error: "Could'n find any doctor",
      });
    }

    res.status(200).json({
      status: "Success",
      data: doctor,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Could'n get the doctor.Something went wrong",
    });
  }
};
