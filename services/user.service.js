const User = require("../model/User");


exports.signupService = async (data) => {
  const result = await User.create(data);
  return result;
};

exports.findUserByEmailService = async (email) => {
  const user = await User.findOne({ email });
  return user;
};
