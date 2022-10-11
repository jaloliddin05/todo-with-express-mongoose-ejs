import * as moment from "moment";
import { Response, Request } from "express";
import { UserModel } from "../users/model";
import { TodoModel } from "./model";

export const GET = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await UserModel.findOne({ _id: id });
  const Todos = await TodoModel.find({ userId: id });
  res.render("todo", { Todos, user });
};
export const GET_TODOS = async (req: Request, res: Response) => {
  const { userId } = req.body;
  let todos = await TodoModel.find({ userId });

  res.send(todos);
};

export const POST = async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const time = moment().format("h:mm a");
  await TodoModel.create({
    title,
    isCompleted: false,
    userId,
    time,
  });

  let todos = await TodoModel.find({ userId });

  res.send(todos);
};

export const PUT = async (req: Request, res: Response) => {
  const { title, isComplated, id, userId } = req.body;

  if (title) {
    await TodoModel.findByIdAndUpdate(id, { title });
  } else if (!title) {
    await TodoModel.findByIdAndUpdate(id, { isCompleted: isComplated });
  }
  let todos = await TodoModel.find({ userId });
  res.send(todos);
};

export const DELETE = async (req: Request, res: Response) => {
  const { id, userId } = req.body;
  await TodoModel.deleteOne({ _id: id });
  let todos = await TodoModel.find({ userId });
  res.send(todos);
};
