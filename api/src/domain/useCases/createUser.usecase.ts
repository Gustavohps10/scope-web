import { User, UserProps } from "../entities/User.entity";

export interface CreateUserUseCase {
    execute: (props: UserProps) => Promise<User>
}