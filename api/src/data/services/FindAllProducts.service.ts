import { FindAllProductsUseCase } from "../../domain/useCases/findAllProducts.usecase";
import { ProductRepository } from "../contracts/productRepository";
import { ProductDTO } from "../dto/ProductDTO";

export class FindAllProductsService implements FindAllProductsUseCase {
    constructor(private readonly productRepo: ProductRepository){}

    async execute(): Promise<Required<ProductDTO[]>>{
        return this.productRepo.findAll();
    }
}