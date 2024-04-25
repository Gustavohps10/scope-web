import { FindAllUsersService } from "../../data/services/FindAllUsers.service";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindAllUsersController } from "../../presentation/controllers/FindAllUsersController";

export const makeFindAllUsersController = (): Controller =>{
    const repo = new UserPrismaRepo();
    const service = new FindAllUsersService(repo);
    const controller = new FindAllUsersController(service);
    return controller;
}