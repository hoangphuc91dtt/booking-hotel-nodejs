const { verifyToken } = require("./verifyToken");

exports.checkAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ status: "Forbidden: Admins only" });
    }
  });
};

exports.checkUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user) {
      next();
    } else {
      res.status(403).json({ status: "Forbidden: Users only" });
    }
  });
};
