import { NextFunction } from "express";
import { UpdateUserUseCase } from "../../domain/useCases/updateUser.usecase";
import { Controller } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";

export class UpdateUserController implements Controller{
    constructor(private readonly updateUser: UpdateUserUseCase){}

    async handle(req: HttpRequest): Promise<HttpResponse>{
        const userProps = {
            id: Number(req.params.id),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        
        await this.updateUser.execute(userProps); 
        return ok();
    }
}