import { Router } from "express";
import * as todo from "../moduls/todo";
import * as user from "../moduls/users";

const router = Router();

router
  .get("/register", user.Get_Register)
  .get("/login", user.Get_Login)
  .get("/todo/:id", todo.GET)
  .post("/register", user.Post_Register)
  .post("/login", user.Post_Login)
  .post("/todo", todo.POST)
  .put("/todo", todo.PUT)
  .delete("/todo", todo.DELETE);

export default router;
