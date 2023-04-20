const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  alias: {
    type: String,
    required: true,
    maxlength: 60,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  delete userObject.created;
  return userObject;
};

module.exports = mongoose.model("users", usersSchema);