import { AddBudgetItemsUseCase } from "../../domain/useCases/addBudgetItems.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class AddBudgetItemsController implements Controller {
    constructor(private readonly addBudgetItems: AddBudgetItemsUseCase){}
    
    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            await this.addBudgetItems.execute(req.body.items, req.params.id);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}