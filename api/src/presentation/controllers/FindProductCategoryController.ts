import { FindProductCategoryByIdUseCase } from "../../domain/useCases/findProductCategoryById.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { ProductCategoryViewModel } from "../view-models/productCategory";

export class FindProductCategoryController implements Controller {
    constructor(private readonly findProductCategoryById: FindProductCategoryByIdUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<ProductCategoryViewModel>>{
        try {
            const productCategory = await this.findProductCategoryById.execute(req.params.id);
            const viewModel = {
                id: productCategory.id,
                description: productCategory.description
            }
            return ok(viewModel);
        } catch (error) {
            return serverError(error);
        }
    }
} 