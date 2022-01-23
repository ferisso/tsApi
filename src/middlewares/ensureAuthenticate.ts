import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function isAuth(req: Request, res: Response, next: NextFunction) {
  let token = req.headers.authorization
  token = token.split(" ")[1]
  if (!token) {
    return res.status(401).end();
  }

  verify(token, 'b5d042bab666b0e85302e18a857a6964', (err, decode) => {
    if (err) {
      return res.status(401).json({ error: "Token is not valid!" })
    }
    req.user_id = decode.sub
  })
  return next();
}