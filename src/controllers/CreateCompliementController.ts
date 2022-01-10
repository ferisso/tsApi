import { Request, Response } from 'express'
import { CreateCompliement } from '../services/CreateCompliement'

class CreateCompliementController {
  async handle(req: Request, res: Response) {
    const { tag_id, user_sender, user_reciver, message } = req.body

    const createCompliement = new CreateCompliement()

    const compl = await createCompliement.execute({
      tag_id,
      user_sender,
      user_reciver,
      message
    })
    return res.json(compl)
  }
}

export { CreateCompliementController }