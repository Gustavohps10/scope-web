import { BudgetItemDTO } from "../dto/BudgetItemDTO"
import { ProductDTO } from "../dto/ProductDTO"

export interface BudgetItemRepository {
    addItems: (items: BudgetItemDTO[], budgetId: number) => Promise<void>
    removeItems: (productIdsToDelete: number[]) => Promise<void>
    findProductList: (productsIds: number[]) => Promise<Required<ProductDTO[]>>
    updateBudgetTotalValue: (budgetId: number) => Promise<void>
}