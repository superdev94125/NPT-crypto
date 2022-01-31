const mongoose = require("mongoose");

const connectDb = async (db) => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Db connects successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
