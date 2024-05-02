import { ProductCategory } from "../../domain/entities/ProductCategory.entity";
import { UpdateProductCategoryUseCase, UpdateProductCategoyInput } from "../../domain/useCases/updateProductCategory.usecase";
import { ProductCategoryRepository } from "../contracts/productCategoryRepository";

export class UpdateProductCategoryService implements UpdateProductCategoryUseCase{
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    async execute(input: UpdateProductCategoyInput): Promise<void>{
        const category = new ProductCategory(input);
        return this.productCategoryRepo.edit(category)
    }
}