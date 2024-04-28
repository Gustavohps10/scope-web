import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductController } from "../factories/makeCreateProductController";

export default (router: Router) =>{
    router.post('/products', adaptRoute(makeCreateProductController()))
}