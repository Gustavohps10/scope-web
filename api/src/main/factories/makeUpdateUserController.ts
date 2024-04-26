import { UpdateUserService } from "../../data/services/updateUser.service";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateUserController } from "../../presentation/controllers/UpdateUserController";

export const makeUpdateUserController = (): Controller =>{
    const repo = new UserPrismaRepo();
    const service = new UpdateUserService(repo);
    const controller = new UpdateUserController(service);
    return controller;
}