export interface UpdateBudgetUseCase {
    execute: (input: UpdateBudgetInput) => Promise<void>
}

export type UpdateBudgetInput = {
    id: number
    createdAt: Date
    expiresIn?: string
    totalValue: number
    customerId: number
}