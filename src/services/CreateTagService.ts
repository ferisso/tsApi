import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../respositories/TagsRepositories"

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Name is incorrect!");
    }

    const tagExists = await tagsRepositories.findOne({
      name
    })

    if (tagExists) {
      throw new Error("Tag already exists!")
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag);

    return tag;

  }
}

export { CreateTagService }