import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductCategoryController } from "../factories/makeCreateProductCategoryController";
import { makeFindAllProductCategoriesController } from "../factories/makeFindAllProductCategoriesController";

export default (router: Router): void =>{
    router.get('/products/categories', adaptRoute(makeFindAllProductCategoriesController()))
    router.post('/products/categories', adaptRoute(makeCreateProductCategoryController()))
}