import { ProductRepository } from "../contracts/productRepository";

export class DeleteProductService implements DeleteProductService{
    constructor(private readonly productRepo: ProductRepository){}

    async execute(id: number): Promise<void>{
        return this.productRepo.delete(Number(id));
    }
}