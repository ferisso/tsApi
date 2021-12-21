import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../respositories/UsersRepositories"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

interface IAuthenticate {
  email: string;
  password: string;
}

class AuthenticateJwtService {
  async execute({ email, password }: IAuthenticate) {
    const usersRepository = getCustomRepository(UsersRepositories);

    const userExists = await usersRepository.findOne({
      email
    })

    if (!userExists) {
      throw new Error("Email/Password incorrect!")
    }

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect!")
    }

    const token = sign({
      email: userExists.email,
    }, "b5d042bab666b0e85302e18a857a6964", {
      subject: userExists.id,
      expiresIn: "1d"
    })
    return token
  }
}

export { AuthenticateJwtService }