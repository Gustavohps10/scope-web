import { FindCustomerByIdService } from "../../data/services/FindCustomerById.service";
import { CustomerPrismaRepo } from "../../infra/repositories/PrismaRepo/Customer.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindCustomerByIdController } from "../../presentation/controllers/FindCustomerByIdController";

export const makeFindCustomerByIdController = (): Controller =>{
    const repo = new CustomerPrismaRepo();
    const service = new FindCustomerByIdService(repo);
    const controller = new FindCustomerByIdController(service);
    return controller; 
}