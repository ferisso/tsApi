import { Request, Response } from "express"
import { AuthenticateJwtService } from "../services/AuthenticateJwtService"


class AuthenticateJwtController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body
    const authenticateJwtService = new AuthenticateJwtService()

    const jwt = await authenticateJwtService.execute({ email, password })

    res.json(jwt)
  }
}

export { AuthenticateJwtController }