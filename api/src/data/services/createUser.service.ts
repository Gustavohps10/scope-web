import { User } from "../../domain/entities/User.entity";
import { CreateUserInput, CreateUserUseCase } from "../../domain/useCases/createUser.usecase";
import { CrypterRepository } from "../contracts/crypterRepository";
import { UserRepository } from "../contracts/userRepository";

export class CreateUserService implements CreateUserUseCase{
    constructor(
        private readonly userRepository: UserRepository,
        private readonly crypterRepository: CrypterRepository
    ){}

    async execute(input: CreateUserInput): Promise<void>{ 
        const user = new User(input);
        const cryptPassword = await this.crypterRepository.crypt(input.password);
        user.updatePassword(cryptPassword);
        return this.userRepository.insert(user);
    }
}