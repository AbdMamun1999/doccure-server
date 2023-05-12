const Appointment = require("../model/Appointment");

exports.createAppointmentService =  async (data) => {
    const result = await Appointment.create(data);
    console.log(result)
    return result;
  };