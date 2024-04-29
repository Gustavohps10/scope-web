import { BudgetDTO } from "../dto/BudgetDTO"

export interface BudgetRepository{
    insert: (budgetProps: BudgetDTO) => Promise<void>
    findById: (id: number) => Promise<Required<BudgetDTO>>
    findAll: () => Promise<Required<BudgetDTO[]>>
    edit: (budgetProps: BudgetDTO) => Promise<void>
    delete: (id: number) => Promise<void>
}