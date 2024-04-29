import { BudgetDTO } from "../../data/dto/BudgetDTO";

export interface FindAllBudgetsUseCase {
    execute: ()=> Promise<Required<BudgetDTO[]>>
}