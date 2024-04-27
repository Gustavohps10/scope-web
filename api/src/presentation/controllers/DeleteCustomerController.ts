import { DeleteCustomerUseCase } from "../../domain/useCases/deleteCustomer.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class DeleteCustomerController implements Controller {
    constructor(private readonly deleteCustomer: DeleteCustomerUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse> {
        try {
            await this.deleteCustomer.execute(req.params.id)
            return ok();
        } catch (error) {
            return serverError(error)
        }
    }
}