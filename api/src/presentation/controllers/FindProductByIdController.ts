import { FindProductByIdUseCase } from "../../domain/useCases/findProductById.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { ProductViewModel } from "../view-models/product";

export class FindProductByIdController implements Controller{
    constructor(private readonly findProductById: FindProductByIdUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<ProductViewModel>>{
        const product = await this.findProductById.execute(req.params.id);
        const viewModel = {
            id: product.id,
            description: product.description,
            observation: product.observation,
            saleValue: product.saleValue,
            createdAt: product.createdAt,
            status: product.status,
            categoryId: product.categoryId
        }
        return ok(viewModel);
    }
}