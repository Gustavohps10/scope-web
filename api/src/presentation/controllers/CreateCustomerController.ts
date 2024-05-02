import { CreateCustomerUseCase } from "../../domain/useCases/CreateCustomer.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateCustomerController implements Controller {
    constructor(private readonly createCustomer: CreateCustomerUseCase){}
    
    async handle(req: HttpRequest): Promise<HttpResponse>{
        const customerProps = {
            name: req.body.name,
            cpfcnpj: req.body.cpfcnpj,
            customerType: req.body.customerType
        }
        await this.createCustomer.execute(customerProps);
        return ok();
    }
}