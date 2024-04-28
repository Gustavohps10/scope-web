import { DeleteProductUseCase } from "../../domain/useCases/deleteProduct.usecase"
import { Controller } from "../contracts/controller"
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http"

export class DeleteProductController implements Controller {
    constructor(private readonly deleteProduct: DeleteProductUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            await this.deleteProduct.execute(req.params.id)
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}