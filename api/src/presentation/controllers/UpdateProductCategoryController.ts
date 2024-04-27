import { UpdateProductCategoryUseCase } from "../../domain/useCases/updateProductCategory.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateProductCategoryController implements Controller{
    constructor(private readonly updateProductCategory: UpdateProductCategoryUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const productCategoryProps = {
                description: req.body.description
            }
            await this.updateProductCategory.execute(productCategoryProps, req.body.id);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}