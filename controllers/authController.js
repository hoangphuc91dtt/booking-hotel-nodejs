const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.APP_SECRET
    );
    res.status(200).json({
      status: "success",
      data: { token, userName: user.name, role: user.role } // Gửi role về client
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const err = new Error("Email can not correct");
      err.statusCode = 400;
      return next(err);
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      // req.body.password is password da duoc ma hoa
      // user.password is real password
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.APP_SECRET
      );
      res.status(200).json({
        status: "success",
        data: { token, userName: user.name, role: user.role }
      });
    } else {
      const err = new Error("Password can not correct");
      err.statusCode = 400;
      return next(err);
    }
  } catch (error) {
    next(error);
  }
};
