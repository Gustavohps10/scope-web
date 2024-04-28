import { FindProductByIdUseCase } from "../../domain/useCases/findProductById.usecase";
import { ProductRepository } from "../contracts/productRepository";
import { ProductDTO } from "../dto/ProductDTO";

export class FindProductByIdService implements FindProductByIdUseCase{
    constructor(private readonly productRepo: ProductRepository){}

    async execute(id: number): Promise<Required<ProductDTO>>{
        return this.productRepo.findById(Number(id));
    }
}