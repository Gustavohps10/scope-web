import { FindAllProductCategoriesUseCase } from "../../domain/useCases/findAllProductCategories.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok } from "../contracts/http";
import { ProductCategoryViewModel } from "../view-models/productCategory";

export class FindAllProductCategoriesController implements Controller {
    constructor(private readonly findAllProductCategories: FindAllProductCategoriesUseCase){}
    
    async handle(req:HttpRequest): Promise<HttpResponse<ProductCategoryViewModel[]>>{
        const productCategories = await this.findAllProductCategories.execute();
        const viewModel = productCategories.map(category => ({
            id: category.id,
            description: category.description
        }));
        return ok(viewModel);
    }
}