import { ProductCategoryDTO } from "../dto/ProductCategoryDTO"


export interface ProductCategoryRepository{
    insert: (categoryProps: ProductCategoryDTO) => Promise<void>
    findById: (id: number) => Promise<Required<ProductCategoryDTO>>
    findAll: () => Promise<Required<ProductCategoryDTO[]>>
    edit: (categoryProps: ProductCategoryDTO) => Promise<void>
    delete: (id: number) => Promise<void>
}