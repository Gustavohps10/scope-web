import { DeleteBudgetUseCase } from "../../domain/useCases/deleteBudget.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class DeleteBudgetController implements Controller {
    constructor(private readonly deleteBudget: DeleteBudgetUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse> {
        await this.deleteBudget.execute(req.params.id)
        return ok();
    }
}