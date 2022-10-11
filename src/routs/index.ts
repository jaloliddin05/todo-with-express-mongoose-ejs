import { Router } from "express";
import * as todo from "../moduls/todo";
import * as user from "../moduls/users";
import { registerVerify } from "../middlwares/register.midd";

const router = Router();

router
  .get("/register", user.Get_Register)
  .get("/login", user.Get_Login)
  .get("/todo/:id", todo.GET)
  .post("/todo/get", todo.GET_TODOS)
  .post("/register", registerVerify, user.Post_Register)
  .post("/login", user.Post_Login)
  .post("/todo", todo.POST)
  .post("/todoEdit", todo.PUT)
  .post("/todoDelete", todo.DELETE);

export default router;
