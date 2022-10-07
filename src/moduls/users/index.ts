import { Request, Response } from "express";
import { UserModel } from "./model";

export const Get_Register = async (_: Request, res: Response) => {
  res.render("register");
};
export const Get_Login = async (_: Request, res: Response) => {
  res.render("login");
};
export const Post_Register = async (req: Request, res: Response) => {
  const { username, password, lastname, firstname } = req.body;
  const user = await UserModel.create({
    username,
    password,
    lastname,
    firstname,
  });
  res.redirect(`/todo/${user._id}`);
};
export const Post_Login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username, password });
  if (!user) {
    return res.render("login");
  }
  res.redirect(`/todo/${user._id}`);
};
