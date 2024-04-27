import { FindProductCategoryByIdUseCase } from "../../domain/useCases/findProductCategoryById.usecase";
import { ProductCategoryRepository } from "../contracts/productCategoryRepository";
import { ProductCategoryDTO } from "../dto/ProductCategoryDTO";

export class FindProductCategoryByIdService implements FindProductCategoryByIdUseCase {
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    async execute(id: number): Promise<ProductCategoryDTO> {
        return this.productCategoryRepo.findById(Number(id))
    }
}