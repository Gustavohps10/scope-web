import { Budget } from "../../domain/entities/Budget.entity";
import { CreateBudgetInput, CreateBudgetUseCase } from "../../domain/useCases/createBudget.usecase";
import { BudgetRepository } from "../contracts/budgetRepository";

export class CreateBudgetService implements CreateBudgetUseCase {
    constructor(private readonly budgetRepo: BudgetRepository){}

    async execute(input: CreateBudgetInput): Promise<void> {
        let defaultExpirationDate = new Date();
        defaultExpirationDate.setUTCDate(defaultExpirationDate.getUTCDate() + 15); //add +15 days

        const budgetProps = {
            ...input,
            expiresIn: input.expiresIn || defaultExpirationDate
        }
        const budget = new Budget(budgetProps);
        return this.budgetRepo.insert(budget);
    }
}