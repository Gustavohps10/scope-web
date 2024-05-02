import { UserRepository } from "../../../data/contracts/userRepository";
import { UserDTO } from "../../../data/dto/UserDTO";
import { PrismaClient } from "@prisma/client";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient()

export class UserPrismaRepo implements UserRepository {
    private readonly entityName = "User";

    async insert(userProps: UserDTO): Promise<void> {
        try {
            await prisma.usuarios.create({
                data: {
                  NOME_COMPLETO: userProps.name,
                  USUARIO: userProps.email,
                  SENHA: userProps.password
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to create user", this.entityName)
        }
        
    }

    async findById(id: number): Promise<Required<UserDTO>> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to find user by ID", this.entityName)
        }
    }

    async findAll(): Promise<Required<UserDTO[]>> {
        try {
            const users = await prisma.usuarios.findMany();
            return users.map(user =>({
                id: user.ID,
                name: user.NOME_COMPLETO,
                email: user.USUARIO,
                password: user.SENHA
            }))
        } catch (error) {
            throw new PrismaError(error, "Failed to find users", this.entityName)
        }
    }

    async edit(userProps: UserDTO): Promise<void> {
        try {
            await prisma.usuarios.update({
                data: {
                    NOME_COMPLETO: userProps.name,
                    USUARIO: userProps.email,
                    SENHA: userProps.password
                },
                where: {
                    ID: userProps.id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to update user", this.entityName)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await prisma.usuarios.delete({
                where: {
                    ID: id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to delete user", this.entityName)
        }
    }
}