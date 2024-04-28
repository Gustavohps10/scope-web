import { ProductDTO } from "../../data/dto/ProductDTO";

export interface FindProductByIdUseCase {
    execute: (id: number) => Promise<Required<ProductDTO>>
}