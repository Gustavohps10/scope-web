import { FindAllCustomersUseCase } from "../../domain/useCases/findAllCustomers.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { CustomerViewModel } from "../view-models/customer";

export class FindAllCustomersController implements Controller {
    constructor(private readonly findAllCustomers: FindAllCustomersUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<CustomerViewModel[]>>{
        const customers = await this.findAllCustomers.execute();
        const viewModel = customers.map(customer => ({
            id: customer.id,
            name: customer.name,
            cpfcnpj: customer.cpfcnpj,
            customerType: customer.customerType,
        }));
        return ok(viewModel);
    }
}