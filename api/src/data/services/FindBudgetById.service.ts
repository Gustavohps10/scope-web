import { FindBudgetByIdUseCase } from "../../domain/useCases/findBudgetById.usecase";
import { BudgetRepository } from "../contracts/budgetRepository";
import { BudgetDTO } from "../dto/BudgetDTO";


export class FindBudgetByIdService implements FindBudgetByIdUseCase{
    constructor(private readonly budgetRepo: BudgetRepository){}

    async execute(id: number): Promise<BudgetDTO>{
        return this.budgetRepo.findById(Number(id));
    }
}