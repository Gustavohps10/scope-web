import { Product } from "../../domain/entities/Product.entity";
import { CreateProductInput, CreateProductUseCase } from "../../domain/useCases/createProduct.usecase";
import { ProductRepository } from "../contracts/productRepository";

export class CreateProductService implements CreateProductUseCase{
    constructor(private readonly productRepo: ProductRepository){}

    async execute(input: CreateProductInput): Promise<void>{
        const product = new Product(input);
        return this.productRepo.insert(product)
    }
}