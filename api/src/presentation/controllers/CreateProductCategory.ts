import { CreateProductCategoryUseCase } from "../../domain/useCases/createProductCategory.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateProductCategoryController implements Controller {
    constructor(private readonly createProductCategory: CreateProductCategoryUseCase){}
    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            await this.createProductCategory.execute({
                description: req.body.description
            });
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}