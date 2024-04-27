export interface DeleteProductCategoryUseCase {
    execute: (id: number)=> Promise<void>
}