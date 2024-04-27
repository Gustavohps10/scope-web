import { UpdateCustomerService } from "../../data/services/UpdateCustomer.service";
import { CustomerPrismaRepo } from "../../infra/repositories/PrismaRepo/Customer.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateCustomerController } from "../../presentation/controllers/UpdateCustomerController";

export const makeUpdateCustomerController = (): Controller=>{
    const repo = new CustomerPrismaRepo();
    const service = new UpdateCustomerService(repo);
    const controller = new UpdateCustomerController(service);
    return controller;
}