require("dotenv").config();
const express = require("express");
const connectDb = require("./db/connectDb");
const cors = require("cors");
const app = express();

connectDb(process.env.MONGO_URL);
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/user", require("./routes/auth"));
app.use("/dashboard", require("./routes/profiles"));

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) return res.status(404).json({ msg: "Auth token not found" });

//   jwt.verify(token, process.env.ACCESS_AUTH_TOKEN, (err, user) => {
//     if (err) return res.status(403);

//     req.user = user;
//     next();
//   });
// };

// app.get("/users", authenticateToken, (req, res) => {
//   console.log(req.user);
//   res.json(users.filter((post) => post.name === req.user));
// });

// app.post("/users", async (req, res) => {
//   try {
//     // const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     // console.log(salt);
//     console.log(hashedPassword);
//     const user = { name: req.body.name, password: hashedPassword };
//     users.push(user);
//     res.status(201).send();
//   } catch (error) {
//     res.status(500).send();
//   }
// });

// app.post("/users/login", async (req, res) => {
//   const user = users.find((user) => user.name === req.body.name);
//   console.log(user);
//   if (!user) {
//     return res.status(400).json({ msg: "Cannot find user" });
//   }
//   try {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       const accessToken = jwt.sign(user.name, process.env.ACCESS_AUTH_TOKEN);
//       res.status(200).json({ user, accessToken });
//     } else {
//       res.status(404).send("Not authenticated");
//     }

//     res.send({ accessToken });
//   } catch (error) {
//     res.status(500).send();
//   }
// });

app.listen(5000, () => console.log("Server is running at port 5000"));
