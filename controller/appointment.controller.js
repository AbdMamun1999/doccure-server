const { createAppointmentService } = require("../services/appointment.service");

exports.createAppointment = async (req, res, next) => {
    try {
      const result = await createAppointmentService(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Stock created successfull",
        data: result,
      });
    } catch (error) {
      res.status(400).send({
        status: "Failed",
        message: "Stock create failed",
        error: error.message,
      });
    }
  };