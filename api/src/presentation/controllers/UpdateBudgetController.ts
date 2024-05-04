import { UpdateBudgetUseCase } from "../../domain/useCases/updateBudget.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateBudgetController implements Controller {
    constructor(private readonly updateBudget: UpdateBudgetUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const BudgetProps = {
            id: Number(req.params.id),
            createdAt: new Date,
            expiresIn: req.body.expiresIn,
            totalValue: req.body.totalValue,
            customerId: req.body.customerId
        }
        await this.updateBudget.execute(BudgetProps);
        return ok();
    }
}