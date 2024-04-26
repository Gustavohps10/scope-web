import { DeleteUserService } from "../../data/services/DeleteUser.service";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { DeleteUserController } from "../../presentation/controllers/DeleteUserController";


export const makeDeleteUserController = (): Controller =>{
    const repo = new UserPrismaRepo();
    const service = new DeleteUserService(repo);
    const controller = new DeleteUserController(service);
    return controller;
}