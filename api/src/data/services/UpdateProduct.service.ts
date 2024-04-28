import { Product } from "../../domain/entities/Product.entity";
import { UpdateProductInput, UpdateProductUseCase } from "../../domain/useCases/updateProduct.usecase";
import { ProductRepository } from "../contracts/productRepository";

export class UpdateProductService implements UpdateProductUseCase{
    constructor(private readonly productRepo: ProductRepository){}

    async execute(input: UpdateProductInput, id: number): Promise<void>{
        const product = new Product(input, id);
        return this.productRepo.edit(product);
    }
}