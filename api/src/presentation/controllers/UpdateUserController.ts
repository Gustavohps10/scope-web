import { UpdateUserUseCase } from "../../domain/useCases/updateUser.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateUserController implements Controller{
    constructor(private readonly updateUser: UpdateUserUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        try {
            const userProps = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            await this.updateUser.execute(userProps, req.body.id); 
            return ok();
        } catch (error) {
            return serverError(error);
        }
    }
}