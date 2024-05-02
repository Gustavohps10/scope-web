import { DeleteProductCategoryUseCase } from "../../domain/useCases/deleteProductCategory.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class DeleteProductCategoryController implements Controller{
    constructor(private readonly deleteProductCategory: DeleteProductCategoryUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        await this.deleteProductCategory.execute(req.params.id)
        return ok()
    }
}