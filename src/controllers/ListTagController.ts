import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagController {
  async handle(req: Request, res: Response) {
    const listTagService = new ListTagService()

    const resposta = await listTagService.execute()

    return res.json(resposta)
  }
}

export { ListTagController }