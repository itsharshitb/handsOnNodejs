const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add the user name"],
    },
    email: {
      type: String,
      require: [true, "Please add the user name"],
      unique: [true, "Email already exist"],
    },
    password: {
      type: String,
      required: [true, "Please Enter the password"],
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
