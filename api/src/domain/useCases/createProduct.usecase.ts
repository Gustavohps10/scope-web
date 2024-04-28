export interface CreateProductUseCase {
    execute: (input: CreateProductInput) => Promise<void>
}

export type CreateProductInput = {
    description: string
    observation: string
    saleValue: number
    status: "ACTIVE" | "INACTIVE"
    createdAt: Date
    categoryId: number
}