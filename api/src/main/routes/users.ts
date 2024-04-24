import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateUserController } from "../factories/makeCreateUserController";
import { makeFindUserByIdController } from "../factories/makeFindUserByIdController";

export default (router: Router): void =>{
    router.get('/users/:id', adaptRoute(makeFindUserByIdController()))
    router.post('/users/new', adaptRoute(makeCreateUserController()))
}