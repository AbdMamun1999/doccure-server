const {
  signupService,
  findUserByEmailService,
} = require("../services/user.service");
const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    const user = await signupService(req?.body);

    const token = generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
      data: {
        token,
        user: others,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "failed",
        error: "Please provide your credentials",
      });
    }

    const user = await findUserByEmailService(email);

    if (!user) {
      return res.status(401).json({
        status: "failed",
        error: "No user found.please create and account",
      });
    }

    const isPasswordValid = user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    const token = await generateToken(user);

    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully looged in",
      data: {
        user: others,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error: error.message,
    });
  }
};
