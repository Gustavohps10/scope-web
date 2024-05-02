import { CreateUserUseCase } from "../../domain/useCases/createUser.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class CreateUserController implements Controller{
    constructor(
        private readonly createUser: CreateUserUseCase
    ){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        await this.createUser.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        return ok()            
    }
}