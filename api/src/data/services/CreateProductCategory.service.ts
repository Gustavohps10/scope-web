import { ProductCategory } from "../../domain/entities/ProductCategory.entity";
import { CreateProductCategoryInput, CreateProductCategoryUseCase } from "../../domain/useCases/createProductCategory.usecase";
import { ProductCategoryRepository } from "../contracts/productCategoryRepository";

export class CreateProductCategoryService implements CreateProductCategoryUseCase {
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    async execute(input: CreateProductCategoryInput): Promise<void>{
        const category = new ProductCategory(input);
        return this.productCategoryRepo.insert(category);
    }
}