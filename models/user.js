const mongoose = require("mongoose");
const { bookSchema } = require("./book");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  // name: {
  //   type: String,
  //   required: true,
  //   minlength: 4,
  // },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    minlength: 8,
  },
  zipCode: {
    type: Number,
    required: true,
    minlength: 5,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  ownedBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  renting: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username },
    "jwt=2df55bae-8ea6-4d56-a96c-165624600280"
     //process.env.JWT_PRIVATEKEY
  );
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
