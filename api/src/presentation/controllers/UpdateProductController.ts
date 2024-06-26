import { UpdateProductUseCase } from "../../domain/useCases/updateProduct.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";


export class UpdateProductController implements Controller{
    constructor(private readonly updateProduct: UpdateProductUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const productProps = {
            id: Number(req.params.id),
            description: req.body.description,
            observation: req.body.observation,
            saleValue: req.body.saleValue,
            status: req.body.status,
            createdAt: new Date(),
            categoryId: req.body.categoryId,
        }
        await this.updateProduct.execute(productProps);
        return ok();
    }
}