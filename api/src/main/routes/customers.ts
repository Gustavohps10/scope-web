import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeFindAllCustomersController } from "../factories/makeFindAllCustomersController";

export default (router: Router): void =>{
    router.get('/customers', adaptRoute(makeFindAllCustomersController()))
}