export interface UpdateProductUseCase {
    execute: (input: UpdateProductInput, id: number) => Promise<void>
}

export type UpdateProductInput = {
    description: string
    observation: string
    saleValue: number
    status: "ACTIVE" | "INACTIVE"
    createdAt: Date
    categoryId: number
}