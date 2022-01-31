const route = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../model/User");

route.get("/profiles", authMiddleware, async (req, res) => {
  console.log(req.user);
  const user = await User.findOne({ _id: req.user });
  res.status(200).json({
    status: "success",
    user,
  });
});

module.exports = route;
