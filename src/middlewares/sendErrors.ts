import { Request, Response, NextFunction } from "express"

export function sendErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  // middleware de erro 4 params
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
}