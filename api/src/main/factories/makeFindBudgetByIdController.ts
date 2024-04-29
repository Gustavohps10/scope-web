import { FindBudgetByIdService } from "../../data/services/FindBudgetById.service";
import { BudgetPrismaRepo } from "../../infra/repositories/PrismaRepo/Budget.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindBudgetByIdController } from "../../presentation/controllers/FindBudgetByIdController";

export const makeFindBudgetByIdController = (): Controller =>{
    const repo = new BudgetPrismaRepo();
    const service = new FindBudgetByIdService(repo);
    const controller = new FindBudgetByIdController(service);
    return controller; 
}