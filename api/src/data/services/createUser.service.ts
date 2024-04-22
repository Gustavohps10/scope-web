import { UserProps } from "../../domain/entities/User.entity";
import { CreateUserUseCase } from "../../domain/useCases/createUser.usecase";
import { UserRepository } from "../contracts/userRepository";

export class CreateUserService implements CreateUserUseCase{
    constructor(private readonly userRepository: UserRepository){}

    async execute(userProps: UserProps): Promise<void>{
        return this.userRepository.insert(userProps)
    }
}