import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeFindAllCustomersController } from "../factories/makeFindAllCustomersController";
import { makeFindCustomerByIdController } from "../factories/makeFindCustomerByIdController";
import { makeUpdateCustomerController } from "../factories/makeUpdateCustomerController";
import { makeCreateCustomerController } from "../factories/makeCreateCustomerController";

export default (router: Router): void =>{
    router.get('/customers', adaptRoute(makeFindAllCustomersController()))
    router.get('/customers/:id', adaptRoute(makeFindCustomerByIdController()))
    router.post('/customers', adaptRoute(makeCreateCustomerController()))
    router.put('/customers', adaptRoute(makeUpdateCustomerController()))
}