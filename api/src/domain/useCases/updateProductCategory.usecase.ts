export interface UpdateProductCategoryUseCase {
    execute: (input: UpdateProductCategoyInput)=> Promise<void>
}

export type UpdateProductCategoyInput = {
    id: number
    description: string
}