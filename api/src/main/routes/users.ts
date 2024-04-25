import { Router} from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateUserController } from "../factories/makeCreateUserController";
import { makeFindUserByIdController } from "../factories/makeFindUserByIdController";
import { makeFindAllUsersController } from "../factories/makeFindAllUsersController";

export default (router: Router): void =>{
    router.get('/users', adaptRoute(makeFindAllUsersController()))
    router.get('/users/:id', adaptRoute(makeFindUserByIdController()))
    router.post('/users/new', adaptRoute(makeCreateUserController()))
}