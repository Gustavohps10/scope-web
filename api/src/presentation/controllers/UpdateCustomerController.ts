import { UpdateCustomerUseCase } from "../../domain/useCases/updateCustomer.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateCustomerController implements Controller {
    constructor(private readonly updateCustomer: UpdateCustomerUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const customerProps = {
            id: Number(req.params.id),
            name: req.body.name,
            cpfcnpj: req.body.cpfcnpj,
            customerType: req.body.customerType
        }
        await this.updateCustomer.execute(customerProps);
        return ok();
    }
}