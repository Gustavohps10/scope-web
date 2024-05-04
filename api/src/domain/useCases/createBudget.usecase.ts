export interface CreateBudgetUseCase {
    execute: (input: CreateBudgetInput) => Promise<void>
}

export type CreateBudgetInput = {
    createdAt: Date
    expiresIn?: string
    totalValue: number
    customerId: number
}