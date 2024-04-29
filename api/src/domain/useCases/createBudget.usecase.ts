export interface CreateBudgetUseCase {
    execute: (input: CreateBudgetInput) => Promise<void>
}

export type CreateBudgetInput = {
    createdAt: Date,
    expiresIn?: Date
    totalValue: number,
    customerId: number
}