import { FindAllBudgetsUseCase } from "../../domain/useCases/findAllBudgets.usecase";
import { BudgetRepository } from "../contracts/budgetRepository";
import { BudgetDTO } from "../dto/BudgetDTO";

export class FindAllBudgetsService implements FindAllBudgetsUseCase{
    constructor(private readonly budgetRepo: BudgetRepository){}

    async execute(): Promise<Required<BudgetDTO[]>> {
        return this.budgetRepo.findAll();
    }
}