import { User } from "../entities/User.entity";

export interface CreateUserUseCase {
    execute: (user: User) => Promise<void>
}