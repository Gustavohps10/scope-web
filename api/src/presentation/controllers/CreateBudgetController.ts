import { CreateBudgetUseCase } from "../../domain/useCases/createBudget.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateBudgetController implements Controller {
    constructor(private readonly createBudget: CreateBudgetUseCase){}
    
    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const BudgetProps = {
                createdAt: new Date,
                expiresIn: new Date(req.body.expiresIn),
                totalValue: req.body.totalValue,
                customerId: req.body.customerId
            }
            await this.createBudget.execute(BudgetProps);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}