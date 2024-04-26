import { DeleteUserUseCase } from "../../domain/useCases/deleteUser.usecase";
import { UserRepository } from "../contracts/userRepository";

export class DeleteUserService implements DeleteUserUseCase {
    constructor(private readonly userRepo: UserRepository){}

    async execute(id: number): Promise<void>{
        return this.userRepo.delete(Number(id));
    }
}