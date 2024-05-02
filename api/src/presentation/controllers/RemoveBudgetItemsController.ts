import { RemoveBudgetItemsUseCase } from "../../domain/useCases/removeBudgetItems.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class RemoveBudgetItemsController implements Controller {
    constructor(private readonly removeBudgetItems: RemoveBudgetItemsUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        await this.removeBudgetItems.execute(req.body.productIds, req.params.id);
        return ok();
    }
} 