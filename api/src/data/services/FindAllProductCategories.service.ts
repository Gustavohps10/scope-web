import { ProductCategoryRepository } from "../contracts/productCategoryRepository";
import { ProductCategoryDTO } from "../dto/ProductCategoryDTO";

export class FindAllProductCategoriesService {
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    execute(): Promise<Required<ProductCategoryDTO[]>> {
        return this.productCategoryRepo.findAll();
    }
}