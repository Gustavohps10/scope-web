import { BudgetItemDTO } from "../dto/BudgetItemDTO"

export interface BudgetItemRepository {
    addItems: (items: BudgetItemDTO[]) => Promise<void>
    removeItems: (productIdsToDelete: number[]) => Promise<void> 
}