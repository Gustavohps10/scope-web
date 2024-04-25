import { FindAllUsersUseCase } from "../../domain/useCases/findAllUsers.usecase";
import { Controller } from "../contracts/controller";
import { HttpResponse, ok, serverError } from "../contracts/http";
import { UserViewModel } from "../view-models/user";

export class FindAllUsersController implements Controller {
    constructor(private readonly findAllUsers: FindAllUsersUseCase){}

    async handle(): Promise<HttpResponse<UserViewModel[]>>{
        try {
            const users = await this.findAllUsers.execute();
            const viewModel = users.map((user) => {
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            })
            return ok(viewModel);
        } catch (error) {
            return serverError(error);
        }
    }
}