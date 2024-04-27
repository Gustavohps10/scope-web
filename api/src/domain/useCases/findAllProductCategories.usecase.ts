import { ProductCategoryDTO } from "../../data/dto/ProductCategoryDTO";

export interface FindAllProductCategoriesUseCase {
    execute: ()=> Promise<Required<ProductCategoryDTO[]>>
}