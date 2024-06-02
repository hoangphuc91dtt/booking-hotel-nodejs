const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Thêm role vào payload
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
      // Email không chính xác
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      // Mật khẩu chính xác
      const token = jwt.sign(
        { userId: user._id, role: user.role }, // Thêm role vào payload
        process.env.APP_SECRET
      );
      res.status(200).json({
        status: "success",
        data: { token, userName: user.name, role: user.role } // Gửi role về client
      });
    } else {
      // Mật khẩu không chính xác
    }
  } catch (error) {
    next(error);
  }
};
