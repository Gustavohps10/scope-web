import { DeleteUserUseCase } from "../../domain/useCases/deleteUser.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class DeleteUserController implements Controller {
    constructor(private readonly deleteUser: DeleteUserUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const id = req.params.id as number;
        await this.deleteUser.execute(id);
        return ok();
    }
}