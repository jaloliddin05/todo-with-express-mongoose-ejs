import * as moment from "moment";
import { Response, Request } from "express";
import { UserModel } from "../users/model";
import { TodoModel } from "./model";

export const GET = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findOne({ _id: id });
  const findTodos = await TodoModel.find({ userId: id });
  res.render("todo", { findTodos, user });
};

export const POST = async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const time = moment().format("h:mm a");
  const newTodo = await TodoModel.create({ title, userId, time });
  res.send({ message: "created" });
};

export const PUT = async (req: Request, res: Response) => {
  const { title, isComplated, id } = req.body;
  if (title && !isComplated) {
    await TodoModel.findByIdAndUpdate(id, { title });
  } else if (isComplated && !title) {
    await TodoModel.findByIdAndUpdate(id, { isComplated });
  }
  res.send({ message: "updated" });
};

export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.body;
  await TodoModel.deleteOne({ _id: id });
  res.send({ message: "deleted" });
};
