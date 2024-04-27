export interface CreateProductCategoryUseCase {
    execute: (input: CreateProductCategoryInput)=> Promise<void>
}

export type CreateProductCategoryInput = {
    description: string
}