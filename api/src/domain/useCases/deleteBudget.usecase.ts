export interface DeleteBudgetUseCase {
    execute: (id: number) => Promise<void>
}