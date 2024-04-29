import { RemoveBudgetItemsUseCase } from "../../domain/useCases/removeBudgetItems.usecase";
import { BudgetItemRepository } from "../contracts/budgetItemRepository";

export class RemoveBudgetItemsService implements RemoveBudgetItemsUseCase {
    constructor(private readonly budgetItemRepo: BudgetItemRepository){}

    async execute(input: number[], budgetId: number): Promise<void>{
        budgetId = Number(budgetId);
        await this.budgetItemRepo.removeItems(input, budgetId);
        await this.budgetItemRepo.updateBudgetTotalValue(budgetId);       
    }
}