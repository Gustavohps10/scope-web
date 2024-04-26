import { UserDTO } from "../../data/dto/UserDTO";

export interface FindAllUsersUseCase {
    execute: () => Promise<Required<UserDTO[]>>
}