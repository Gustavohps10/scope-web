import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductCategoryController } from "../factories/makeCreateProductCategoryController";

export default (router: Router): void =>{
    router.post('/products/categories', adaptRoute(makeCreateProductCategoryController()))
}