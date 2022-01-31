require("dotenv").config({ path: "../.env" });
const User = require("../model/User");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//registerUser
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      ...req.body,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_AUTH_TOKEN,
      {
        expiresIn: "1h",
      }
    );
    res.status(201).json({
      result: user,
      token,
    });
  } catch (error) {
    res.status(500).send();
  }
});

//login
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all fields" });
    }
    let user = await User.findOne({ email });
    //console.log(user.id);
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.ACCESS_AUTH_TOKEN,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).send({ error });
  }
});
module.exports = router;
