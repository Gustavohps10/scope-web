import { FindAllProductCategoriesUseCase } from "../../domain/useCases/findAllProductCategories.usecase";
import { Controller } from "../contracts/controller";
import { HttpResponse, ok, serverError } from "../contracts/http";
import { ProductCategoryViewModel } from "../view-models/productCategory";

export class FindAllProductCategoriesController implements Controller {
    constructor(private readonly findAllProductCategories: FindAllProductCategoriesUseCase){}
    async handle(): Promise<HttpResponse<ProductCategoryViewModel[]>>{
        try {
            const productCategories = await this.findAllProductCategories.execute();
            const viewModel = productCategories.map(category => ({
                id: category.id,
                description: category.description
            }));
            return ok(viewModel);
        } catch (error) {
            return serverError(error)
        }
    }
}