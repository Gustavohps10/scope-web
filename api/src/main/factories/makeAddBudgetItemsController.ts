import { AddBudgetItemsService } from "../../data/services/AddBudgetItems.service";
import { BudgetItemPrismaRepo } from "../../infra/repositories/PrismaRepo/BudgetItem.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { AddBudgetItemsController } from "../../presentation/controllers/AddBudgetItemsController";

export const makeAddBudgetItemsController = (): Controller =>{
    const repo = new BudgetItemPrismaRepo();
    const service = new AddBudgetItemsService(repo);
    const controller = new AddBudgetItemsController(service);
    return controller;
}