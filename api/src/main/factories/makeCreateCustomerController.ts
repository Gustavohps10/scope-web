import { CreateCustomerService } from "../../data/services/CreateCustomer.service";
import { CustomerPrismaRepo } from "../../infra/repositories/PrismaRepo/Customer.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { CreateCustomerController } from "../../presentation/controllers/CreateCustomerController";

export const makeCreateCustomerController = (): Controller =>{
    const repo = new CustomerPrismaRepo();
    const service = new CreateCustomerService(repo);
    const controller = new CreateCustomerController(service);
    return controller;
}