import { User } from "../../domain/entities/User.entity";
import { UpdateUserInput, UpdateUserUseCase } from "../../domain/useCases/updateUser.usecase";
import { CrypterRepository } from "../contracts/crypterRepository";
import { UserRepository } from "../contracts/userRepository";

export class UpdateUserService implements UpdateUserUseCase {
    constructor(
        private readonly userRepo: UserRepository,
        private readonly crypterRepository: CrypterRepository
    ){}

    async execute(input: UpdateUserInput): Promise<void> {
        const user = new User(input);
        const cryptPassword = await this.crypterRepository.crypt(input.password);
        user.updatePassword(cryptPassword);
        return this.userRepo.edit(user);
    }
}