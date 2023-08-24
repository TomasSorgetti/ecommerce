const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const verifyAccessToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("no token detected");
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id
    req.role = decoded.role
    if (!decoded) {
      return res.status(401).send("unauthorized");
    }
  } catch (error) {
    return res.status(401).send("unauthorized");
  }
  return next();
};

module.exports = {
  verifyAccessToken,
};
