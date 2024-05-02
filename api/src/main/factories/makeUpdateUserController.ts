

import { UpdateUserService } from "../../data/services/UpdateUser.service";
import { CrypterRepo } from "../../infra/repositories/CrypterRepo";
import { UserPrismaRepo } from "../../infra/repositories/PrismaRepo/User.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateUserController } from "../../presentation/controllers/UpdateUserController";

export const makeUpdateUserController = (): Controller =>{
    const prismaRepo = new UserPrismaRepo();
    const crypterRepo = new CrypterRepo();
    const service = new UpdateUserService(prismaRepo, crypterRepo);
    const controller = new UpdateUserController(service);
    return controller;
}