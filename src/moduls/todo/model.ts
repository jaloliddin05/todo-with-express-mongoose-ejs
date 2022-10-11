import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    collection: "todo_collection",
  }
);

export const TodoModel = mongoose.model("Todos", TodoSchema);
