import { User } from "../entities/User.entity";

export interface CreateUserUseCase {
    execute: (input: CreateUserInput) => Promise<void>
}

export type CreateUserInput = {
    name: string,
    email: string,
    password: string
}