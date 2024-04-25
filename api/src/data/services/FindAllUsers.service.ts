import { FindAllUsersUseCase } from "../../domain/useCases/findAllUsers.usecase";
import { UserRepository } from "../contracts/userRepository";
import { UserDTO } from "../dto/UserDTO";

export class FindAllUsersService implements FindAllUsersUseCase {
    constructor(private readonly userRepo: UserRepository){}

    execute(): Promise<Required<UserDTO[]>>{
        return this.userRepo.findAll();
    }
}