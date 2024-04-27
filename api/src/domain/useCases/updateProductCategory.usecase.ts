export interface UpdateProductCategoryUseCase {
    execute: (input: UpdateProductCategoyInput, id:number)=> Promise<void>
}

export type UpdateProductCategoyInput = {
    description: string
}