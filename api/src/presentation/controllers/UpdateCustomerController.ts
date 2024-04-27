import { UpdateCustomerUseCase } from "../../domain/useCases/updateCustomer.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateCustomerController implements Controller {
    constructor(private readonly updateCustomer: UpdateCustomerUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const customerProps = {
                name: req.body.name,
                cpfcnpj: req.body.cpfcnpj,
                customerType: req.body.customerType
            }
            await this.updateCustomer.execute(customerProps, req.body.id);
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}