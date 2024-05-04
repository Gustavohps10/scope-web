import { CreateBudgetUseCase } from "../../domain/useCases/createBudget.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateBudgetController implements Controller {
    constructor(private readonly createBudget: CreateBudgetUseCase){}
    
    async handle(req: HttpRequest): Promise<HttpResponse>{
        const BudgetProps = {
            createdAt: new Date,
            expiresIn: req.body.expiresIn,
            totalValue: req.body.totalValue,
            customerId: req.body.customerId
        }
        await this.createBudget.execute(BudgetProps);
        return ok();
    }
}