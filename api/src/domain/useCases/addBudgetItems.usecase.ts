export interface AddBudgetItemsUseCase {
    execute: (inputs: AddBudgetItemsInput[], budgetId: number)=> Promise<void>
}

export type AddBudgetItemsInput = {
    productId: number
    productAmount: number
}