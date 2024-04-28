import { ProductDTO } from "../dto/ProductDTO"

export interface ProductRepository{
    insert: (productProps: ProductDTO) => Promise<void>
    findById: (id: number) => Promise<Required<ProductDTO>>
    findAll: () => Promise<Required<ProductDTO[]>>
    edit: (productProps: ProductDTO) => Promise<void>
    delete: (id: number) => Promise<void>
}