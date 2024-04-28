import { ProductDTO } from "../../data/dto/ProductDTO";

export interface FindAllProductsUseCase {
    execute: () => Promise<Required<ProductDTO[]>>
}