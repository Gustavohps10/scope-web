export interface UpdateBudgetUseCase {
    execute: (input: UpdateBudgetInput) => Promise<void>
}

export type UpdateBudgetInput = {
    id: number
    createdAt: Date
    expiresIn?: Date
    totalValue: number
    customerId: number
}