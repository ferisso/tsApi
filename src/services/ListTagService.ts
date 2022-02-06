import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../respositories/TagsRepositories"


class ListTagService {
  async execute() {
    const tagRepositories = getCustomRepository(TagsRepositories)

    const dados = await tagRepositories.find()

    return dados
  }
}

export { ListTagService }