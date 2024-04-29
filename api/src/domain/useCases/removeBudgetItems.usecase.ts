export interface RemoveBudgetItemsUseCase {
    execute: (input: number[], budgetId: number) => Promise<void>
}