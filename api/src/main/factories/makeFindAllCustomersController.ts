import { FindAllCustomersService } from "../../data/services/FindAllCustomers.service";
import { CustomerPrismaRepo } from "../../infra/repositories/PrismaRepo/Customer.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindAllCustomersController } from "../../presentation/controllers/FindAllCustomersController";

export const makeFindAllCustomersController = ():Controller =>{
    const repo = new CustomerPrismaRepo();
    const service = new FindAllCustomersService(repo);
    const controller = new FindAllCustomersController(service);
    return controller;
}