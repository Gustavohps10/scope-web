import { FindCustomerByIdUseCase } from "../../domain/useCases/findCustomerById.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { CustomerViewModel } from "../view-models/customer";

export class FindCustomerByIdController implements Controller {
    constructor(private readonly findCustomerById: FindCustomerByIdUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<CustomerViewModel>>{
        const customer = await this.findCustomerById.execute(req.params.id);
        const viewModel = {
            id: customer.id,
            name: customer.name,
            cpfcnpj: customer.cpfcnpj,
            customerType: customer.customerType,
        }
        return ok(viewModel);
    }
}