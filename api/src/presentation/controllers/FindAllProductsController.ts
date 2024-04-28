import { FindAllProductsUseCase } from "../../domain/useCases/findAllProducts.usecase";
import { Controller } from "../contracts/controller";
import { HttpResponse, ok, serverError } from "../contracts/http";
import { ProductViewModel } from "../view-models/product";

export class FindAllProductsController implements Controller {
    constructor(private readonly findAllProducts: FindAllProductsUseCase){}

    async handle(): Promise<HttpResponse<ProductViewModel[]>>{
        try {
            const products = await this.findAllProducts.execute();
            const viewModel = products.map(product => ({
                id: product.id,
                description: product.description,
                observation: product.observation,
                saleValue: product.saleValue,
                createdAt: product.createdAt,
                status: product.status,
                categoryId: product.categoryId
            }));
            return ok(viewModel);
        } catch (error) {
            return serverError(error);
        }
    }
}