import { DeleteCustomerService } from "../../data/services/DeleteCustomer.service";
import { CustomerPrismaRepo } from "../../infra/repositories/PrismaRepo/Customer.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { DeleteCustomerController } from "../../presentation/controllers/DeleteCustomerController";

export const makeDeleteCustomerController = (): Controller => {
    const repo = new CustomerPrismaRepo();
    const service = new DeleteCustomerService(repo);
    const controller = new DeleteCustomerController(service);
    return controller;
}