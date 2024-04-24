import { UserRepository } from "../../data/contracts/userRepository";
import { UserDTO } from "../../data/dto/UserDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class PrismaRepository implements UserRepository {
    async insert(userProps: UserDTO): Promise<void> {

    }

    async findById(id: number): Promise<UserDTO> {
        const user = await prisma.usuarios.findUniqueOrThrow({
            where: {
              ID: id
            },
          })
        return {
            id: user.ID,
            name: user.NOME_COMPLETO,
            email: user.USUARIO,
            password: user.SENHA
        }
        //await prisma.$disconnect()
    }

    async findAll(): Promise<UserDTO[]> {
        const users = await prisma.usuarios.findMany();
        return users.map(user =>({
            id: user.ID,
            name: user.NOME_COMPLETO,
            email: user.USUARIO,
            password: user.SENHA
        }))
    }

    async edit(userProps: UserDTO): Promise<void> {

    }

    async delete(id: number): Promise<void> {

    }
}