import { UserDTO } from "../dto/UserDTO"


export interface UserRepository{
    insert: (userProps: UserDTO) => Promise<void>
    findById: (id: number) => Promise<Required<UserDTO>>
    findAll: () => Promise<Required<UserDTO[]>>
    edit: (userProps: UserDTO) => Promise<void>
    delete: (id: number) => Promise<void>
}