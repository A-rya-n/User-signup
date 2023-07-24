const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  if (authHeader) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "User is not authorised" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "User is not authorized or token is missing.",
    });
  }
};

module.exports = validateToken;
