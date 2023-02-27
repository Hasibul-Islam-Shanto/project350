const mongoose = require("mongoose");

const DbConncetion = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shanto78:shanto78@cluster0.69uibsr.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected Succesfully.");
  } catch (error) {
    console.log(`Database is not connected. : ${error}`);
  }
};

module.exports = DbConncetion;
