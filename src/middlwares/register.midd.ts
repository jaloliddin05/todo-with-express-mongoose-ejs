import { UserModel } from "../moduls/users/model";
import { Request, Response, NextFunction } from "express";

export const registerVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username } = req.body;
  const finduser = await UserModel.findOne({ username });
  if (finduser) {
    return res.send({ message: "username already exist" });
  }
  next();
};
