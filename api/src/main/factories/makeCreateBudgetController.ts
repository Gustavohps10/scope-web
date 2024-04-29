import { CreateBudgetService } from "../../data/services/CreateBudget.service";
import { BudgetPrismaRepo } from "../../infra/repositories/PrismaRepo/Budget.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { CreateBudgetController } from "../../presentation/controllers/CreateBudgetController";

export const makeCreateBudgetController = (): Controller =>{
    const repo = new BudgetPrismaRepo();
    const service = new CreateBudgetService(repo);
    const controller = new CreateBudgetController(service);
    return controller;
}