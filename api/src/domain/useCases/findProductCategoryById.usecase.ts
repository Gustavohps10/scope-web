import { ProductCategoryDTO } from "../../data/dto/ProductCategoryDTO";

export interface FindProductCategoryByIdUseCase {
    execute: (id: number) => Promise<ProductCategoryDTO>
}