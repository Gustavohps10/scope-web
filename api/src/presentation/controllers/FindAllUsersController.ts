import { FindAllUsersUseCase } from "../../domain/useCases/findAllUsers.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class FindAllUsersController implements Controller {
    constructor(private readonly findAllUsers: FindAllUsersUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse<UserViewModel[]>>{
        const users = await this.findAllUsers.execute();
        const viewModel = users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })
        return ok(viewModel);
    }
}