import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductController } from "../factories/makeCreateProductController";
import { makeFindAllProductsController } from "../factories/makeFindAllProductsController";
import { makeFindProductByIdController } from "../factories/makeFindProductByIdController";
import { makeUpdateProductController } from "../factories/makeUpdateProductController";
import { makeDeleteProductController } from "../factories/makeDeleteProductController";

export default (router: Router) =>{
    router.get('/products', adaptRoute(makeFindAllProductsController()))
    router.get('/products/:id', adaptRoute(makeFindProductByIdController()))
    router.post('/products', adaptRoute(makeCreateProductController()))
    router.put('/products', adaptRoute(makeUpdateProductController()))
    router.delete('/products/:id', adaptRoute(makeDeleteProductController()))
}