import { UserRepository } from "../../data/contracts/userRepository";
import { UserDTO } from "../../data/dto/UserDTO";
import { readOne, readAll } from "../data-sources/FakeUsers";

export class FakeDatabase implements UserRepository{
    async insert(userProps: UserDTO): Promise<void> {

    }

    async findById(id: number): Promise<UserDTO> {
        const user = await readOne();
        return {
            id: user._id,
            name: user.fullname,
            email: user.email,
            password: user.password
        }
    }

    async findAll(): Promise<UserDTO[]> {
        const users = await readAll();
        return users.map(user =>({
            id: user._id,
            name: user.fullname,
            email: user.email,
            password: user.password
        }))
    }

    async edit(userProps: UserDTO): Promise<void> {

    }

    async delete(id: number): Promise<void> {

    }
}