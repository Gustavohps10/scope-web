import { RemoveBudgetItemsService } from "../../data/services/RemoveBudgetItems.service";
import { BudgetItemPrismaRepo } from "../../infra/repositories/PrismaRepo/BudgetItem.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { RemoveBudgetItemsController } from "../../presentation/controllers/RemoveBudgetItemsController";

export const makeRemoveBudgetItemsController = (): Controller =>{
    const repo = new BudgetItemPrismaRepo();
    const service = new RemoveBudgetItemsService(repo);
    const controller = new RemoveBudgetItemsController(service);
    return controller;
}