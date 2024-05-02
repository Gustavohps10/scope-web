import { FindAllBudgetsUseCase } from "../../domain/useCases/findAllBudgets.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { BudgetViewModel } from "../view-models/budget";

export class FindAllBudgetsController implements Controller {
    constructor(private readonly findAllBudgets: FindAllBudgetsUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<BudgetViewModel[]>>{
        const budgets = await this.findAllBudgets.execute();
        const viewModel = budgets.map(budget => ({
            ...budget
        }));
        return ok(viewModel);
    }
}