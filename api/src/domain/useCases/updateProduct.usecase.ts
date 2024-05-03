export interface UpdateProductUseCase {
    execute: (input: UpdateProductInput) => Promise<void>
}

export type UpdateProductInput = {
    id: number
    description: string
    observation: string
    saleValue: number
    status: "ACTIVE" | "INACTIVE"
    createdAt: Date
    categoryId: number
}