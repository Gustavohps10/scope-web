import { UserRepository } from "../../../data/contracts/userRepository";
import { UserDTO } from "../../../data/dto/UserDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class UserPrismaRepo implements UserRepository {
    async insert(userProps: UserDTO): Promise<void> {
        await prisma.usuarios.create({
            data: {
              NOME_COMPLETO: userProps.name,
              USUARIO: userProps.email,
              SENHA: userProps.password
            }
        })
    }

    async findById(id: number): Promise<Required<UserDTO>> {
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

    async findAll(): Promise<Required<UserDTO[]>> {
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