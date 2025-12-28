const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // cek header ada atau tidak
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Access denied. Token missing.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // isi token: { userId, role }
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

// 👮 Middleware: cek ADMIN
const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "ADMIN") {
    return next();
  }

  return res.status(403).json({
    message: "Access denied. Admins only.",
  });
};

module.exports = {
  auth,
  isAdmin,
};