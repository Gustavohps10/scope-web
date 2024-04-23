import { User } from "../../domain/entities/User.entity";
import {UserDTO} from "../dto/UserDTO"
import { CreateUserUseCase } from "../../domain/useCases/createUser.usecase";
import { UserRepository } from "../contracts/userRepository";

export class CreateUserService implements CreateUserUseCase{
    constructor(private readonly userRepository: UserRepository){}

    async execute(userProps: UserDTO): Promise<void>{
        const user = new User(userProps);
        return await this.userRepository.insert(user);
    }
}