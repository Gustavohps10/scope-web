import { FindAllBudgetsService } from "../../data/services/FindAllBudgets.service";
import { BudgetPrismaRepo } from "../../infra/repositories/PrismaRepo/Budget.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindAllBudgetsController } from "../../presentation/controllers/FindAllBudgetsController";

export const makeFindAllBudgetsController = (): Controller => {
    const repo = new BudgetPrismaRepo();
    const service = new FindAllBudgetsService(repo);
    const controller = new FindAllBudgetsController(service);
    return controller;
}