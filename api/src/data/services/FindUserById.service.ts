import { FindUserByIdUseCase, FindUserOutput } from "../../domain/useCases/findUserById.usecase";
import { UserRepository } from "../contracts/userRepository";

export class FindUserByIdService implements FindUserByIdUseCase{
    constructor(private readonly userRepository: UserRepository){}

    async execute(id: number): Promise<FindUserOutput>{
        return this.userRepository.findById(Number(id));
    }
}