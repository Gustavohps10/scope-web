import { User } from "../../domain/entities/User.entity";
import { CreateUserInput, CreateUserUseCase } from "../../domain/useCases/createUser.usecase";
import { UserRepository } from "../contracts/userRepository";
import bcrypt from "bcrypt"

export class CreateUserService implements CreateUserUseCase{
    constructor(private readonly userRepository: UserRepository){}

    async execute(input: CreateUserInput): Promise<void>{
        console.log("senha " +input.password);
        
        const user = new User({
            ...input,
            password: await bcrypt.hash(input.password, 10)
        });
        return await this.userRepository.insert(user);
    }
}