import { User, UserProps } from "../../domain/entities/User.entity"

export interface UserRepository{
    insert: (userProps: UserProps) => Promise<void>
    findById: (id: number) => Promise<User>
    findAll: () => Promise<User[]>
    edit: (id: number, userProps: UserProps) => Promise<void>
    delete: (id: number) => Promise<void>
}