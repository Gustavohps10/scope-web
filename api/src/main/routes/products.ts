import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductController } from "../factories/makeCreateProductController";
import { makeFindAllProductsController } from "../factories/makeFindAllProductsController";

export default (router: Router) =>{
    router.get('/products', adaptRoute(makeFindAllProductsController()))
    router.post('/products', adaptRoute(makeCreateProductController()))
}