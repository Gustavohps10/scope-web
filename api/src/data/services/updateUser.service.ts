import { User } from "../../domain/entities/User.entity";
import { UpdateUserInput, UpdateUserUseCase } from "../../domain/useCases/updateUser.usecase";
import { UserRepository } from "../contracts/userRepository";

export class UpdateUserService implements UpdateUserUseCase {
    constructor(private readonly userRepo: UserRepository){}

    async execute(input: UpdateUserInput, id: number): Promise<void> {
        // const userProps = await this.userRepo.findById(id);
        // const user = new User(userProps);
        // user.updateEmail(input.email);
        // user.updateName(input.name);
        // user.updatePassword(input.password);
        return this.userRepo.edit({...input, id});
    }
}