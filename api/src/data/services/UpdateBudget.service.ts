import { Budget } from "../../domain/entities/Budget.entity";
import { UpdateBudgetInput, UpdateBudgetUseCase } from "../../domain/useCases/updateBudget.usecase";
import { BudgetRepository } from "../contracts/budgetRepository";

export class UpdateBudgetService implements UpdateBudgetUseCase {
    constructor(private readonly budgetRepo: BudgetRepository){}

    async execute(input: UpdateBudgetInput, id: number): Promise<void> {
        let defaultExpirationDate = new Date();
        defaultExpirationDate.setUTCDate(defaultExpirationDate.getUTCDate() + 15); //add +15 days

        const budgetProps = {
            ...input,
            expiresIn: input.expiresIn || defaultExpirationDate
        }
        const budget = new Budget(budgetProps, id);
        return this.budgetRepo.edit(budget);
    }
}