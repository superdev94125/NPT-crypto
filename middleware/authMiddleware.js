require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const customAuth = token.length < 500;
    if (!token) return res.status(403).json({ msg: "No token found" });
    let decodedData;
    if (token && customAuth) {
      decodedData = jwt.verify(token, process.env.ACCESS_AUTH_TOKEN);
      console.log(decodedData);
      req.user = decodedData.id;
    } else {
      decodedData = jwt.decode(token);
      req.user = decodedData.sub;
    }
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = authMiddleware;
