import { ProductCategoryRepository } from "../contracts/productCategoryRepository";

export class DeleteProductCategoryService implements DeleteProductCategoryService{
    constructor(private readonly productCategoryRepo: ProductCategoryRepository){}

    async execute(id: number): Promise<void>{
        return this.productCategoryRepo.delete(Number(id));
    }
}