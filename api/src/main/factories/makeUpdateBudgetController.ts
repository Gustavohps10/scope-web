import { UpdateBudgetService } from "../../data/services/UpdateBudget.service";
import { BudgetPrismaRepo } from "../../infra/repositories/PrismaRepo/Budget.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateBudgetController } from "../../presentation/controllers/UpdateBudgetController";

export const makeUpdateBudgetController = (): Controller =>{
    const repo = new BudgetPrismaRepo();
    const service = new UpdateBudgetService(repo);
    const controller = new UpdateBudgetController(service);
    return controller;
}