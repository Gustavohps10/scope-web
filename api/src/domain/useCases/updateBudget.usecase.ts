export interface UpdateBudgetUseCase {
    execute: (input: UpdateBudgetInput, id: number) => Promise<void>
}

export type UpdateBudgetInput = {
    createdAt: Date,
    expiresIn?: Date
    totalValue: number,
    customerId: number
}