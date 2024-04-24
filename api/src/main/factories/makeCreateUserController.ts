import { Controller } from "../../presentation/contracts/controller"
import { CreateUserService } from "../../data/services/createUser.service";
import { PrismaRepository } from "../../infra/repositories/Prisma.repository";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";

export const makeCreateUserController = (): Controller =>{
    const repo = new PrismaRepository()
    const service = new CreateUserService(repo)
    const controller = new CreateUserController(service);
    return controller;
}