import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../respositories/UsersRepositories";

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories)

    const user = await usersRepository.find({ select: ['name', 'email', 'admin'] })
    return user
  }
}

export { ListUserService };