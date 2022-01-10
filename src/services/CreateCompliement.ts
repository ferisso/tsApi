import { getCustomRepository } from "typeorm"
import { CompliementsRepositories } from "../respositories/CompliementsRepositories"
import { UsersRepositories } from "../respositories/UsersRepositories";


interface ICompliements {
  tag_id: string;
  user_sender: string;
  user_reciver: string;
  message: string;
}

class CreateCompliement {
  async execute({ tag_id, user_sender, user_reciver, message }: ICompliements) {
    const complimentRepository = getCustomRepository(CompliementsRepositories);
    const userRepository = getCustomRepository(UsersRepositories);

    if (user_sender === user_reciver) {
      throw new Error("Users cannot be the same!")
    }

    const userReciverExists = await userRepository.findOne(user_reciver)

    if (!userReciverExists) {
      throw new Error("Invalid User!")
    }

    const compliement = complimentRepository.create({
      tag_id,
      user_sender,
      user_reciver,
      message
    })

    await complimentRepository.save(compliement)

    return compliement;
  }
}

export { CreateCompliement }