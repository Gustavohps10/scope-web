import { UpdateProductCategoryUseCase, UpdateProductCategoyInput } from "../../domain/useCases/updateProductCategory.usecase";
import { ProductCategoryRepository } from "../contracts/productCategoryRepository";

export class UpdateProductCategoryService implements UpdateProductCategoryUseCase{
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    async execute(input: UpdateProductCategoyInput, id: number): Promise<void>{
        return this.productCategoryRepo.edit({...input, id})
    }
}