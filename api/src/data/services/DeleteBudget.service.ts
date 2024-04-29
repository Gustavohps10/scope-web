import { DeleteBudgetUseCase } from "../../domain/useCases/deleteBudget.usecase";
import { BudgetRepository } from "../contracts/budgetRepository";

export class DeleteBudgetService implements DeleteBudgetUseCase {
    constructor(private readonly budgetRepo: BudgetRepository){}

    async execute(id: number): Promise<void>{
        return this.budgetRepo.delete(Number(id));
    }
}