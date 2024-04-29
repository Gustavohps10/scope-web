import { DeleteBudgetService } from "../../data/services/DeleteBudget.service";
import { BudgetPrismaRepo } from "../../infra/repositories/PrismaRepo/Budget.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { DeleteBudgetController } from "../../presentation/controllers/DeleteBudgetController";

export const makeDeleteBudgetController = (): Controller =>{
    const repo = new BudgetPrismaRepo();
    const service = new DeleteBudgetService(repo);
    const controller = new DeleteBudgetController(service);
    return controller;
}