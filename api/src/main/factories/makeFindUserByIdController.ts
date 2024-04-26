import { FindUserByIdService } from "../../data/services/FindUserById.service";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindUserByIdController } from "../../presentation/controllers/FindUserByIdController";

export const makeFindUserByIdController = (): Controller =>{
    const repo = new UserPrismaRepo()
    const service = new FindUserByIdService(repo)
    const controller = new FindUserByIdController(service);
    return controller;
}