import { BudgetDTO } from "../../data/dto/BudgetDTO";

export interface FindBudgetByIdUseCase {
    execute: (id: number) => Promise<BudgetDTO>
}