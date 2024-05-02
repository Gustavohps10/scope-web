import { CreateProductUseCase } from "../../domain/useCases/createProduct.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateProductController implements Controller{
    constructor(private readonly createProduct: CreateProductUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const productProps = {
            description: req.body.description,
            observation: req.body.observation,
            saleValue: req.body.saleValue,
            status: req.body.status,
            createdAt: new Date(),
            categoryId: req.body.categoryId,
        }
        await this.createProduct.execute(productProps)
        return ok();
    }
}