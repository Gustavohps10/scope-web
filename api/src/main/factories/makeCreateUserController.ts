import { Controller } from "../../presentation/contracts/controller"
import { CreateUserService } from "../../data/services/createUser.service";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";

export const makeCreateUserController = (): Controller =>{
    const repo = new UserPrismaRepo()
    const service = new CreateUserService(repo)
    const controller = new CreateUserController(service);
    return controller;
}