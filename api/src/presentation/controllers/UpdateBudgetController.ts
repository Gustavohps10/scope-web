import { UpdateBudgetUseCase } from "../../domain/useCases/updateBudget.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateBudgetController implements Controller {
    constructor(private readonly updateBudget: UpdateBudgetUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const BudgetProps = {
                createdAt: new Date,
                expiresIn: new Date(req.body.expiresIn),
                totalValue: req.body.totalValue,
                customerId: req.body.customerId
            }
            await this.updateBudget.execute(BudgetProps, req.body.id);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}