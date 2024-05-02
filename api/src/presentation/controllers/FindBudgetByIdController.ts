import { FindBudgetByIdUseCase } from "../../domain/useCases/findBudgetById.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { BudgetViewModel } from "../view-models/budget";

export class FindBudgetByIdController implements Controller {
    constructor(private readonly findBudgetById: FindBudgetByIdUseCase){}

    async handle(req: HttpRequest, next: Function): Promise<HttpResponse<BudgetViewModel>>{
        const budget = await this.findBudgetById.execute(req.params.id);
        const viewModel = {
            ...budget
        }  
        return ok(viewModel);
    }
}