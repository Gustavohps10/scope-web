import { Controller } from "../../presentation/contracts/controller"
import { CreateUserService } from "../../data/services/createUser.service";
import { FakeDatabase } from "../../infra/repositories/FakeQueryDB";
import { CreateUserController } from "../../presentation/controllers/CreateUserController";

export const makeCreateUserController = (): Controller =>{
    const repo = new FakeDatabase()
    const service = new CreateUserService(repo)
    const controller = new CreateUserController(service);
    return controller;
}