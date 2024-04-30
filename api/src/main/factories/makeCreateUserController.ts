import { Controller } from "../../presentation/contracts/controller"
import { CreateUserService } from "../../data/services/CreateUser.service"; 
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";
import { CrypterRepo } from "../../infra/repositories/CrypterRepo";

export const makeCreateUserController = (): Controller =>{
    const prismaRepo = new UserPrismaRepo();
    const crypterRepo = new CrypterRepo();
    const service = new CreateUserService(prismaRepo, crypterRepo);
    const controller = new CreateUserController(service);
    return controller;
}