import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    time: {
      type: String,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    collection: "todo_collection",
  }
);

export const TodoModel = mongoose.model("Todo", TodoSchema);
