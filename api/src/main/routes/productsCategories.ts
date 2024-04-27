import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouterAdapter";
import { makeCreateProductCategoryController } from "../factories/makeCreateProductCategoryController";
import { makeFindAllProductCategoriesController } from "../factories/makeFindAllProductCategoriesController";
import { makeFindProductCategoryByIdController } from "../factories/makeFindProductCategoryByIdController";
import { makeUpdateProductCategoryController } from "../factories/makeUpdateProductCategoryController";

export default (router: Router): void =>{
    router.get('/products/categories', adaptRoute(makeFindAllProductCategoriesController()))
    router.get('/products/categories/:id', adaptRoute(makeFindProductCategoryByIdController()))
    router.post('/products/categories', adaptRoute(makeCreateProductCategoryController()))
    router.put('/products/categories', adaptRoute(makeUpdateProductCategoryController()))
}