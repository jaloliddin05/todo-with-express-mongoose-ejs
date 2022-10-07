import jwt from "jsonwebtoken";

export const sign = (payload) =>
  jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 66600,
  });
