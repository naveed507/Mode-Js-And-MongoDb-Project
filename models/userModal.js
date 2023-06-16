import mongoose from "mongoose";
let Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    required: [true, "email required"],
    unique: [true, "email already registered"],
  },
  firstName: String,
  lastName: String,
  profilePhoto: String,
  password: String,
  userType: {
    type: String,
    default: null,
  },
  source: { type: String, required: [true, "source not specified"] },
  lastVisited: { type: Date, default: new Date() },
});

var userModal = mongoose.model("user", userSchema, "user");

export default userModal;
