import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: [3, "name should be more then 3 characters"],
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
      min: [3, "firstname should be more then 3 characters"],
    },
    lastname: {
      type: String,
      required: true,
      min: [3, "lastname should be more then 3 characters"],
    },
  },
  {
    collection: "users_collection_todo",
  }
);

export const UserModel = mongoose.model("Users", userSchema);
