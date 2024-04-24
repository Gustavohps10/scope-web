import { FindUserByIdUseCase } from "../../domain/useCases/findUserById.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class FindUserByIdController implements Controller{
    constructor(private readonly findUserById: FindUserByIdUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<UserViewModel>>{
        try {
            const id = req.params.id as number;
            const user = await this.findUserById.execute(id);
            const viewModel = {
                id: user.id,
                name: user.name,
                email: user.email
            }
            return ok(viewModel);
        } catch (error) {
            return serverError(error);
        }

    }
}